<template>
    <div class="dark">
        <transition name="home">
            <div v-if="loading" class="loading">
                <img class="pic" src="@/assets/img/logo/loader.png" alt="">
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    data: () => ({
        loading: true,
    }),
    name: 'loadingVue',

    transition: 'home',

    watch: {
        async $route() {
            this.loading = await true
            setTimeout(() => {
                this.loading = false
            }, 1500)
        },
    },

    async mounted() {
        this.loading = await true
        setTimeout(() => {
            this.loading = false
        }, 1500)
    },

    methods: {
        start() {
            this.loading = true
            document.body.style.overflowY = 'hidden'
            document.body.style.height = '100vh'
        },
        finish() {
            this.loading = false
            document.body.style.overflowY = 'auto'
            document.body.style.height = 'auto'
        },
    },
}
</script>

<style scoped>
.dark {}

.home-enter-active,
.home-leave-active {
    transition: opacity 0.5s;
}

.home-enter,
.home-leave-active {
    opacity: 0;
}

.loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99999;
    background: var(--green)
}

svg {
    width: 150px;
    height: 150px;
}

svg path {
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
    fill: transparent;
    stroke: var(--red);
    animation: full 2.5s infinite ease 0.6s;
}

svg path.red {
    animation: fullRed 2.5s infinite ease 0.6s;
}

.pic {
    transition: .3s;
    width: 220px;
    object-fit: contain;
    animation: scaler 2.5s infinite;
}

@keyframes scaler {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1)
    }

    100% {
        transform: scale(1);
    }
}

@keyframes full {
    0% {
        stroke-dasharray: 300;
        stroke-dashoffset: 300;
        fill: transparent;
        stroke: var(--red);
    }

    100% {
        stroke-dashoffset: 0;
        fill: white;
        stroke: transparent;
    }
}

@keyframes fullRed {
    0% {
        stroke-dasharray: 300;
        stroke-dashoffset: 300;
        fill: transparent;
        stroke: var(--red);
    }

    100% {
        stroke-dashoffset: 0;
        fill: var(--red);
        stroke: transparent;
    }
}
</style>