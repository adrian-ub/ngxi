import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilGrabHandleIcon],svg[pepicons-pencil-grab-handle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 7a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1zm0 3.25a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1zm0 3.25a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1z"></svg:path>`,
})
export class PepiconsPencilGrabHandleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilGrabHandleCircleIcon],svg[pepicons-pencil-grab-handle-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.5 10a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1zm0 3.25a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1zm0 3.25a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilGrabHandleCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilGrabHandleCircleFilledIcon],svg[pepicons-pencil-grab-handle-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilGrabHandleCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" d="M5.5 10a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1zm0 3.25a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1zm0 3.25a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1z"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilGrabHandleCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilGrabHandleCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilGrabHandleCircleOffIcon],svg[pepicons-pencil-grab-handle-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.5 10a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1zm0 3.25a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1zm0 3.25a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1z"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilGrabHandleCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilGrabHandleOffIcon],svg[pepicons-pencil-grab-handle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2.5 7a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1zm0 3.25a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1zm0 3.25a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1z"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilGrabHandleOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilGridIcon],svg[pepicons-pencil-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 4.5v4h4v-4zm-.5-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5zm7.5 1v4h4v-4zm-.5-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5zm-6.5 8v4h4v-4zm-.5-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zm7.5 1v4h4v-4zm-.5-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPencilGridIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilGridCircleIcon],svg[pepicons-pencil-grid-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.5 7.5v4h4v-4zm-.5-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5zm7.5 1v4h4v-4zm-.5-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5zm-6.5 8v4h4v-4zm-.5-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zm7.5 1v4h4v-4zm-.5-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5z"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilGridCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilGridCircleFilledIcon],svg[pepicons-pencil-grid-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilGridCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M7.5 7.5v4h4v-4zm-.5-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5zm7.5 1v4h4v-4zm-.5-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5zm-6.5 8v4h4v-4zm-.5-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zm7.5 1v4h4v-4zm-.5-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilGridCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilGridCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilGridCircleOffIcon],svg[pepicons-pencil-grid-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.5 7.5v4h4v-4zm-.5-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5zm7.5 1v4h4v-4zm-.5-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5zm-6.5 8v4h4v-4zm-.5-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zm7.5 1v4h4v-4zm-.5-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilGridCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilGridOffIcon],svg[pepicons-pencil-grid-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M4.5 4.5v4h4v-4zm-.5-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5zm7.5 1v4h4v-4zm-.5-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5zm-6.5 8v4h4v-4zm-.5-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zm7.5 1v4h4v-4zm-.5-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilGridOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHamburgerIcon],svg[pepicons-pencil-hamburger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3.671 18.204c-1.06-.13-1.674-.632-1.674-1.58c0-1.967 2.051-2.366 7.294-2.377h1.411c5.243.01 7.295.41 7.295 2.377c0 .948-.615 1.45-1.675 1.58c-.692.086-1.121.065-3.295-.105c-1.283-.101-2.118-.146-3.03-.146s-1.748.045-3.03.146c-2.174.17-2.604.19-3.296.105m5.622-2.957c-4.42.009-6.296.375-6.296 1.377c0 .361.185.512.797.588c.592.073 1.021.052 3.095-.11c1.306-.103 2.163-.149 3.108-.149c.944 0 1.801.046 3.108.149c2.073.162 2.503.183 3.095.11c.611-.076.797-.227.797-.588c0-1.002-1.877-1.368-6.297-1.377zm6.77-7.177C17.315 7.788 18 7.077 18 5.864c0-2.75-3.503-4.613-8-4.613S2 3.114 2 5.863c0 1.213.685 1.924 1.937 2.208c.871.197 1.658.21 4.035.142A66 66 0 0 1 10 8.176c.59 0 1.104.01 2.028.037c2.377.068 3.164.055 4.035-.142M10 2.25c4.018 0 7 1.587 7 3.613c0 .703-.329 1.044-1.158 1.232c-.752.17-1.514.183-3.785.118A67 67 0 0 0 10 7.176c-.602 0-1.123.01-2.057.037c-2.271.065-3.033.053-3.785-.118C3.328 6.907 3 6.566 3 5.863C3 3.837 5.982 2.25 10 2.25" clip-rule="evenodd"></svg:path><svg:path d="M2.502 10.432a.5.5 0 0 1-.504-.864A4.1 4.1 0 0 1 4.08 9c.486 0 .766.081 1.213.292l.012.006c.334.157.489.202.82.202c.327 0 .466-.042.764-.195l.012-.006C7.321 9.084 7.596 9 8.086 9c.497 0 .772.086 1.193.307c.292.154.418.193.721.193s.428-.04.715-.19l.004-.003c.421-.22.697-.307 1.195-.307c.492 0 .768.084 1.196.301l.005.003c.304.154.44.196.76.196s.46-.042.768-.197l.006-.003c.432-.217.708-.3 1.199-.3q1.096.001 2.138.56a.5.5 0 0 1-.472.88q-.826-.44-1.666-.44c-.31 0-.446.041-.75.194l-.007.003c-.435.219-.715.303-1.216.303s-.78-.085-1.212-.304l-.006-.003c-.3-.152-.433-.193-.743-.193s-.44.04-.729.193l-.005.002c-.417.22-.69.305-1.18.305s-.763-.085-1.182-.305l-.004-.002c-.29-.153-.418-.193-.728-.193c-.307 0-.438.04-.729.189l-.012.006c-.428.22-.712.305-1.22.305c-.504 0-.791-.083-1.247-.298l-.012-.006C4.541 10.043 4.393 10 4.08 10c-.56 0-1.082.143-1.578.432M3 13a.5.5 0 0 1 0-1h14a.5.5 0 0 1 0 1zm3.1-7.75a.6.6 0 1 1-1.2 0a.6.6 0 0 1 1.2 0m2.5-1a.6.6 0 1 1-1.2 0a.6.6 0 0 1 1.2 0m2 1.5a.6.6 0 1 1-1.2 0a.6.6 0 0 1 1.2 0m2-1.5a.6.6 0 1 1-1.2 0a.6.6 0 0 1 1.2 0m2.5 1a.6.6 0 1 1-1.2 0a.6.6 0 0 1 1.2 0"></svg:path></svg:g>`,
})
export class PepiconsPencilHamburgerIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHamburgerCircleIcon],svg[pepicons-pencil-hamburger-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.671 21.204c-1.06-.13-1.674-.632-1.674-1.58c0-1.967 2.051-2.366 7.294-2.377h1.411c5.243.01 7.295.41 7.295 2.377c0 .948-.615 1.45-1.675 1.58c-.692.086-1.121.065-3.295-.105c-1.283-.101-2.118-.146-3.03-.146s-1.748.045-3.03.146c-2.174.17-2.604.19-3.296.105m5.622-2.957c-4.42.009-6.296.375-6.296 1.377c0 .361.185.512.797.588c.592.073 1.021.052 3.095-.11c1.306-.103 2.163-.149 3.108-.149c.944 0 1.801.046 3.108.149c2.073.162 2.503.183 3.095.11c.611-.076.797-.227.797-.588c0-1.002-1.877-1.368-6.297-1.377zm6.77-7.177C20.315 10.788 21 10.077 21 8.864c0-2.75-3.503-4.613-8-4.613S5 6.114 5 8.863c0 1.213.685 1.924 1.937 2.208c.871.197 1.658.21 4.035.142A66 66 0 0 1 13 11.176c.59 0 1.104.01 2.028.037c2.377.068 3.164.055 4.035-.142M13 5.25c4.018 0 7 1.587 7 3.613c0 .703-.329 1.044-1.158 1.232c-.752.17-1.514.183-3.785.118A67 67 0 0 0 13 10.176c-.602 0-1.123.01-2.057.037c-2.271.065-3.033.053-3.785-.118C6.328 9.907 6 9.566 6 8.863C6 6.837 8.982 5.25 13 5.25" clip-rule="evenodd"></svg:path><svg:path d="M5.502 13.432a.5.5 0 0 1-.504-.864A4.1 4.1 0 0 1 7.08 12c.486 0 .766.081 1.213.292l.012.006c.334.157.489.202.82.202c.327 0 .466-.042.764-.195l.012-.006c.42-.215.695-.299 1.185-.299c.497 0 .772.086 1.193.307c.292.154.418.193.721.193s.428-.04.715-.19l.004-.003c.421-.22.697-.307 1.195-.307c.492 0 .768.084 1.196.301l.005.003c.304.154.44.196.76.196s.46-.042.768-.197l.006-.003c.432-.217.708-.3 1.199-.3q1.096.001 2.138.56a.5.5 0 0 1-.472.88q-.826-.44-1.666-.44c-.31 0-.445.041-.75.194l-.006.003c-.436.219-.716.303-1.217.303s-.78-.085-1.212-.304l-.006-.003c-.3-.152-.433-.193-.743-.193s-.44.04-.729.193l-.005.002c-.417.22-.69.305-1.18.305s-.763-.085-1.182-.305l-.004-.002c-.29-.153-.418-.193-.728-.193c-.307 0-.438.04-.729.189l-.012.006c-.428.22-.712.305-1.22.305c-.504 0-.791-.083-1.247-.298l-.012-.006C7.541 13.043 7.393 13 7.08 13c-.56 0-1.082.143-1.578.432M6 16a.5.5 0 0 1 0-1h14a.5.5 0 0 1 0 1zm3.1-7.75a.6.6 0 1 1-1.2 0a.6.6 0 0 1 1.2 0m2.5-1a.6.6 0 1 1-1.2 0a.6.6 0 0 1 1.2 0m2 1.5a.6.6 0 1 1-1.2 0a.6.6 0 0 1 1.2 0m2-1.5a.6.6 0 1 1-1.2 0a.6.6 0 0 1 1.2 0m2.5 1a.6.6 0 1 1-1.2 0a.6.6 0 0 1 1.2 0"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilHamburgerCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHamburgerCircleFilledIcon],svg[pepicons-pencil-hamburger-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilHamburgerCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M6.671 21.204c-1.06-.13-1.674-.632-1.674-1.58c0-1.967 2.051-2.366 7.294-2.377h1.411c5.243.01 7.295.41 7.295 2.377c0 .948-.615 1.45-1.675 1.58c-.692.086-1.121.065-3.295-.105c-1.283-.101-2.118-.146-3.03-.146s-1.748.045-3.03.146c-2.174.17-2.604.19-3.296.105m5.622-2.957c-4.42.009-6.296.375-6.296 1.377c0 .361.185.512.797.588c.592.073 1.021.052 3.095-.11c1.306-.103 2.163-.149 3.108-.149c.944 0 1.801.046 3.108.149c2.073.162 2.503.183 3.095.11c.611-.076.797-.227.797-.588c0-1.002-1.877-1.368-6.297-1.377zm6.77-7.177C20.315 10.788 21 10.077 21 8.864c0-2.75-3.503-4.613-8-4.613S5 6.114 5 8.863c0 1.213.685 1.924 1.937 2.208c.871.197 1.658.21 4.035.142A66 66 0 0 1 13 11.176c.59 0 1.104.01 2.028.037c2.377.068 3.164.055 4.035-.142M13 5.25c4.018 0 7 1.587 7 3.613c0 .703-.329 1.044-1.158 1.232c-.752.17-1.514.183-3.785.118A67 67 0 0 0 13 10.176c-.602 0-1.123.01-2.057.037c-2.271.065-3.033.053-3.785-.118C6.328 9.907 6 9.566 6 8.863C6 6.837 8.982 5.25 13 5.25" clip-rule="evenodd"></svg:path><svg:path d="M5.502 13.432a.5.5 0 0 1-.504-.864A4.1 4.1 0 0 1 7.08 12c.486 0 .766.081 1.213.292l.012.006c.334.157.489.202.82.202c.327 0 .466-.042.764-.195l.012-.006c.42-.215.695-.299 1.185-.299c.497 0 .772.086 1.193.307c.292.154.418.193.721.193s.428-.04.715-.19l.004-.003c.421-.22.697-.307 1.195-.307c.492 0 .768.084 1.196.301l.005.003c.304.154.44.196.76.196s.46-.042.768-.197l.006-.003c.432-.217.708-.3 1.199-.3q1.096.001 2.138.56a.5.5 0 0 1-.472.88q-.826-.44-1.666-.44c-.31 0-.445.041-.75.194l-.006.003c-.436.219-.716.303-1.217.303s-.78-.085-1.212-.304l-.006-.003c-.3-.152-.433-.193-.743-.193s-.44.04-.729.193l-.005.002c-.417.22-.69.305-1.18.305s-.763-.085-1.182-.305l-.004-.002c-.29-.153-.418-.193-.728-.193c-.307 0-.438.04-.729.189l-.012.006c-.428.22-.712.305-1.22.305c-.504 0-.791-.083-1.247-.298l-.012-.006C7.541 13.043 7.393 13 7.08 13c-.56 0-1.082.143-1.578.432M6 16a.5.5 0 0 1 0-1h14a.5.5 0 0 1 0 1zm3.1-7.75a.6.6 0 1 1-1.2 0a.6.6 0 0 1 1.2 0m2.5-1a.6.6 0 1 1-1.2 0a.6.6 0 0 1 1.2 0m2 1.5a.6.6 0 1 1-1.2 0a.6.6 0 0 1 1.2 0m2-1.5a.6.6 0 1 1-1.2 0a.6.6 0 0 1 1.2 0m2.5 1a.6.6 0 1 1-1.2 0a.6.6 0 0 1 1.2 0"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilHamburgerCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilHamburgerCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHamburgerCircleOffIcon],svg[pepicons-pencil-hamburger-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.671 21.204c-1.06-.13-1.674-.632-1.674-1.58c0-1.967 2.051-2.366 7.294-2.377h1.411c5.243.01 7.295.41 7.295 2.377c0 .948-.615 1.45-1.675 1.58c-.692.086-1.121.065-3.295-.105c-1.283-.101-2.118-.146-3.03-.146s-1.748.045-3.03.146c-2.174.17-2.604.19-3.296.105m5.622-2.957c-4.42.009-6.296.375-6.296 1.377c0 .361.185.512.797.588c.592.073 1.021.052 3.095-.11c1.306-.103 2.163-.149 3.108-.149c.944 0 1.801.046 3.108.149c2.073.162 2.503.183 3.095.11c.611-.076.797-.227.797-.588c0-1.002-1.877-1.368-6.297-1.377zm6.77-7.177C20.315 10.788 21 10.077 21 8.864c0-2.75-3.503-4.613-8-4.613S5 6.114 5 8.863c0 1.213.685 1.924 1.937 2.208c.871.197 1.658.21 4.035.142A66 66 0 0 1 13 11.176c.59 0 1.104.01 2.028.037c2.377.068 3.164.055 4.035-.142M13 5.25c4.018 0 7 1.587 7 3.613c0 .703-.329 1.044-1.158 1.232c-.752.17-1.514.183-3.785.118A67 67 0 0 0 13 10.176c-.602 0-1.123.01-2.057.037c-2.271.065-3.033.053-3.785-.118C6.328 9.907 6 9.566 6 8.863C6 6.837 8.982 5.25 13 5.25" clip-rule="evenodd"></svg:path><svg:path d="M5.502 13.432a.5.5 0 0 1-.504-.864A4.1 4.1 0 0 1 7.08 12c.486 0 .766.081 1.213.292l.012.006c.334.157.489.202.82.202c.327 0 .466-.042.764-.195l.012-.006c.42-.215.695-.299 1.185-.299c.497 0 .772.086 1.193.307c.292.154.418.193.721.193s.428-.04.715-.19l.004-.003c.421-.22.697-.307 1.195-.307c.492 0 .768.084 1.196.301l.005.003c.304.154.44.196.76.196s.46-.042.768-.197l.006-.003c.432-.217.708-.3 1.199-.3q1.096.001 2.138.56a.5.5 0 0 1-.472.88q-.826-.44-1.666-.44c-.31 0-.445.041-.75.194l-.006.003c-.436.219-.716.303-1.217.303s-.78-.085-1.212-.304l-.006-.003c-.3-.152-.433-.193-.743-.193s-.44.04-.729.193l-.005.002c-.417.22-.69.305-1.18.305s-.763-.085-1.182-.305l-.004-.002c-.29-.153-.418-.193-.728-.193c-.307 0-.438.04-.729.189l-.012.006c-.428.22-.712.305-1.22.305c-.504 0-.791-.083-1.247-.298l-.012-.006C7.541 13.043 7.393 13 7.08 13c-.56 0-1.082.143-1.578.432M6 16a.5.5 0 0 1 0-1h14a.5.5 0 0 1 0 1zm3.1-7.75a.6.6 0 1 1-1.2 0a.6.6 0 0 1 1.2 0m2.5-1a.6.6 0 1 1-1.2 0a.6.6 0 0 1 1.2 0m2 1.5a.6.6 0 1 1-1.2 0a.6.6 0 0 1 1.2 0m2-1.5a.6.6 0 1 1-1.2 0a.6.6 0 0 1 1.2 0m2.5 1a.6.6 0 1 1-1.2 0a.6.6 0 0 1 1.2 0"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilHamburgerCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHamburgerOffIcon],svg[pepicons-pencil-hamburger-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3.671 18.204c-1.06-.13-1.674-.632-1.674-1.58c0-1.967 2.051-2.366 7.294-2.377h1.411c5.243.01 7.295.41 7.295 2.377c0 .948-.615 1.45-1.675 1.58c-.692.086-1.121.065-3.295-.105c-1.283-.101-2.118-.146-3.03-.146s-1.748.045-3.03.146c-2.174.17-2.604.19-3.296.105m5.622-2.957c-4.42.009-6.296.375-6.296 1.377c0 .361.185.512.797.588c.592.073 1.021.052 3.095-.11c1.306-.103 2.163-.149 3.108-.149c.944 0 1.801.046 3.108.149c2.073.162 2.503.183 3.095.11c.611-.076.797-.227.797-.588c0-1.002-1.877-1.368-6.297-1.377zm6.77-7.177C17.315 7.788 18 7.077 18 5.864c0-2.75-3.503-4.613-8-4.613S2 3.114 2 5.863c0 1.213.685 1.924 1.937 2.208c.871.197 1.658.21 4.035.142A66 66 0 0 1 10 8.176c.59 0 1.104.01 2.028.037c2.377.068 3.164.055 4.035-.142M10 2.25c4.018 0 7 1.587 7 3.613c0 .703-.329 1.044-1.158 1.232c-.752.17-1.514.183-3.785.118A67 67 0 0 0 10 7.176c-.602 0-1.123.01-2.057.037c-2.271.065-3.033.053-3.785-.118C3.328 6.907 3 6.566 3 5.863C3 3.837 5.982 2.25 10 2.25" clip-rule="evenodd"></svg:path><svg:path d="M2.502 10.432a.5.5 0 0 1-.504-.864A4.1 4.1 0 0 1 4.08 9c.486 0 .766.081 1.213.292l.012.006c.334.157.489.202.82.202c.327 0 .466-.042.764-.195l.012-.006C7.321 9.084 7.596 9 8.086 9c.497 0 .772.086 1.193.307c.292.154.418.193.721.193s.428-.04.715-.19l.004-.003c.421-.22.697-.307 1.195-.307c.492 0 .768.084 1.196.301l.005.003c.304.154.44.196.76.196s.46-.042.768-.197l.006-.003c.432-.217.708-.3 1.199-.3q1.096.001 2.138.56a.5.5 0 0 1-.472.88q-.826-.44-1.666-.44c-.31 0-.446.041-.75.194l-.007.003c-.435.219-.715.303-1.216.303s-.78-.085-1.212-.304l-.006-.003c-.3-.152-.433-.193-.743-.193s-.44.04-.729.193l-.005.002c-.417.22-.69.305-1.18.305s-.763-.085-1.182-.305l-.004-.002c-.29-.153-.418-.193-.728-.193c-.307 0-.438.04-.729.189l-.012.006c-.428.22-.712.305-1.22.305c-.504 0-.791-.083-1.247-.298l-.012-.006C4.541 10.043 4.393 10 4.08 10c-.56 0-1.082.143-1.578.432M3 13a.5.5 0 0 1 0-1h14a.5.5 0 0 1 0 1zm3.1-7.75a.6.6 0 1 1-1.2 0a.6.6 0 0 1 1.2 0m2.5-1a.6.6 0 1 1-1.2 0a.6.6 0 0 1 1.2 0m2 1.5a.6.6 0 1 1-1.2 0a.6.6 0 0 1 1.2 0m2-1.5a.6.6 0 1 1-1.2 0a.6.6 0 0 1 1.2 0m2.5 1a.6.6 0 1 1-1.2 0a.6.6 0 0 1 1.2 0"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilHamburgerOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHammerClawIcon],svg[pepicons-pencil-hammer-claw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.69 2.2a1.5 1.5 0 0 1 .816.134l3.808 1.802a1.5 1.5 0 0 1 .714 1.998l-1.07 2.26a1.5 1.5 0 0 1-1.997.714L7.619 7.526a1.5 1.5 0 0 1-.644-.584l-.35-.583a.5.5 0 0 0-.597-.213l-.95.34c-1.258.449-2.432-.847-1.86-2.055l.44-.932A1.5 1.5 0 0 1 4.84 2.65zm.388 1.038a.5.5 0 0 0-.272-.045l-3.85.45a.5.5 0 0 0-.393.283l-.442.933a.5.5 0 0 0 .62.684l.95-.339a1.5 1.5 0 0 1 1.791.64l.35.583a.5.5 0 0 0 .215.195l3.342 1.582a.5.5 0 0 0 .666-.238l1.07-2.26a.5.5 0 0 0-.239-.666z"></svg:path><svg:path d="M14.242 5.682a1.5 1.5 0 0 1 1.997-.714l.904.428a1.5 1.5 0 0 1 .715 1.997l-1.642 3.467a1.5 1.5 0 0 1-1.997.714l-.904-.428a1.5 1.5 0 0 1-.714-1.997zm1.57.19a.5.5 0 0 0-.666.238l-1.641 3.467a.5.5 0 0 0 .238.665l.904.428a.5.5 0 0 0 .666-.238l1.64-3.467a.5.5 0 0 0-.237-.665zM6.658 17.028l3.89-8.242l.904.427l-3.89 8.241a1.5 1.5 0 0 1-1.998.716l-.903-.427a1.5 1.5 0 0 1-.714-1.998l3.85-8.135l.904.428l-3.85 8.135a.5.5 0 0 0 .238.666l.903.427a.5.5 0 0 0 .666-.238"></svg:path></svg:g>`,
})
export class PepiconsPencilHammerClawIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHammerClawCircleIcon],svg[pepicons-pencil-hammer-claw-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.69 5.2a1.5 1.5 0 0 1 .816.134l3.808 1.802a1.5 1.5 0 0 1 .714 1.998l-1.07 2.26a1.5 1.5 0 0 1-1.997.714l-3.342-1.582a1.5 1.5 0 0 1-.644-.584l-.35-.583a.5.5 0 0 0-.597-.213l-.95.34c-1.258.449-2.432-.847-1.86-2.055l.44-.932A1.5 1.5 0 0 1 7.84 5.65zm.388 1.038a.5.5 0 0 0-.272-.045l-3.85.45a.5.5 0 0 0-.393.283l-.442.933a.5.5 0 0 0 .62.684l.95-.339a1.5 1.5 0 0 1 1.791.64l.35.583a.5.5 0 0 0 .215.195l3.342 1.582a.5.5 0 0 0 .666-.238l1.07-2.26a.5.5 0 0 0-.239-.666z"></svg:path><svg:path d="M17.242 8.682a1.5 1.5 0 0 1 1.997-.714l.904.428a1.5 1.5 0 0 1 .715 1.997l-1.642 3.467a1.5 1.5 0 0 1-1.997.714l-.904-.428a1.5 1.5 0 0 1-.714-1.997zm1.57.19a.5.5 0 0 0-.666.238l-1.641 3.467a.5.5 0 0 0 .238.665l.904.428a.5.5 0 0 0 .666-.238l1.64-3.467a.5.5 0 0 0-.237-.665zM9.658 20.028l3.89-8.242l.904.427l-3.89 8.241a1.5 1.5 0 0 1-1.998.716l-.903-.427a1.5 1.5 0 0 1-.714-1.998l3.85-8.135l.904.428l-3.85 8.135a.5.5 0 0 0 .238.666l.903.427a.5.5 0 0 0 .666-.238"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilHammerClawCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHammerClawCircleFilledIcon],svg[pepicons-pencil-hammer-claw-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilHammerClawCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.69 5.2a1.5 1.5 0 0 1 .816.134l3.808 1.802a1.5 1.5 0 0 1 .714 1.998l-1.07 2.26a1.5 1.5 0 0 1-1.997.714l-3.342-1.582a1.5 1.5 0 0 1-.644-.584l-.35-.583a.5.5 0 0 0-.597-.213l-.95.34c-1.258.449-2.432-.847-1.86-2.055l.44-.932A1.5 1.5 0 0 1 7.84 5.65zm.388 1.038a.5.5 0 0 0-.272-.045l-3.85.45a.5.5 0 0 0-.393.283l-.442.933a.5.5 0 0 0 .62.684l.95-.339a1.5 1.5 0 0 1 1.791.64l.35.583a.5.5 0 0 0 .215.195l3.342 1.582a.5.5 0 0 0 .666-.238l1.07-2.26a.5.5 0 0 0-.239-.666z"></svg:path><svg:path d="M17.242 8.682a1.5 1.5 0 0 1 1.997-.714l.904.428a1.5 1.5 0 0 1 .715 1.997l-1.642 3.467a1.5 1.5 0 0 1-1.997.714l-.904-.428a1.5 1.5 0 0 1-.714-1.997zm1.57.19a.5.5 0 0 0-.666.238l-1.641 3.467a.5.5 0 0 0 .238.665l.904.428a.5.5 0 0 0 .666-.238l1.64-3.467a.5.5 0 0 0-.237-.665zM9.658 20.028l3.89-8.242l.904.427l-3.89 8.241a1.5 1.5 0 0 1-1.998.716l-.903-.427a1.5 1.5 0 0 1-.714-1.998l3.85-8.135l.904.428l-3.85 8.135a.5.5 0 0 0 .238.666l.903.427a.5.5 0 0 0 .666-.238"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilHammerClawCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilHammerClawCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHammerClawCircleOffIcon],svg[pepicons-pencil-hammer-claw-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.69 5.2a1.5 1.5 0 0 1 .816.134l3.808 1.802a1.5 1.5 0 0 1 .714 1.998l-1.07 2.26a1.5 1.5 0 0 1-1.997.714l-3.342-1.582a1.5 1.5 0 0 1-.644-.584l-.35-.583a.5.5 0 0 0-.597-.213l-.95.34c-1.258.449-2.432-.847-1.86-2.055l.44-.932A1.5 1.5 0 0 1 7.84 5.65zm.388 1.038a.5.5 0 0 0-.272-.045l-3.85.45a.5.5 0 0 0-.393.283l-.442.933a.5.5 0 0 0 .62.684l.95-.339a1.5 1.5 0 0 1 1.791.64l.35.583a.5.5 0 0 0 .215.195l3.342 1.582a.5.5 0 0 0 .666-.238l1.07-2.26a.5.5 0 0 0-.239-.666z"></svg:path><svg:path d="M17.242 8.682a1.5 1.5 0 0 1 1.997-.714l.904.428a1.5 1.5 0 0 1 .715 1.997l-1.642 3.467a1.5 1.5 0 0 1-1.997.714l-.904-.428a1.5 1.5 0 0 1-.714-1.997zm1.57.19a.5.5 0 0 0-.666.238l-1.641 3.467a.5.5 0 0 0 .238.665l.904.428a.5.5 0 0 0 .666-.238l1.64-3.467a.5.5 0 0 0-.237-.665zM9.658 20.028l3.89-8.242l.904.427l-3.89 8.241a1.5 1.5 0 0 1-1.998.716l-.903-.427a1.5 1.5 0 0 1-.714-1.998l3.85-8.135l.904.428l-3.85 8.135a.5.5 0 0 0 .238.666l.903.427a.5.5 0 0 0 .666-.238"></svg:path></svg:g><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilHammerClawCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHammerClawOffIcon],svg[pepicons-pencil-hammer-claw-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.69 2.2a1.5 1.5 0 0 1 .816.134l3.808 1.802a1.5 1.5 0 0 1 .714 1.998l-1.07 2.26a1.5 1.5 0 0 1-1.997.714L7.619 7.526a1.5 1.5 0 0 1-.644-.584l-.35-.583a.5.5 0 0 0-.597-.213l-.95.34c-1.258.449-2.432-.847-1.86-2.055l.44-.932A1.5 1.5 0 0 1 4.84 2.65zm.388 1.038a.5.5 0 0 0-.272-.045l-3.85.45a.5.5 0 0 0-.393.283l-.442.933a.5.5 0 0 0 .62.684l.95-.339a1.5 1.5 0 0 1 1.791.64l.35.583a.5.5 0 0 0 .215.195l3.342 1.582a.5.5 0 0 0 .666-.238l1.07-2.26a.5.5 0 0 0-.239-.666z"></svg:path><svg:path d="M14.242 5.682a1.5 1.5 0 0 1 1.997-.714l.904.428a1.5 1.5 0 0 1 .715 1.997l-1.642 3.467a1.5 1.5 0 0 1-1.997.714l-.904-.428a1.5 1.5 0 0 1-.714-1.997zm1.57.19a.5.5 0 0 0-.666.238l-1.641 3.467a.5.5 0 0 0 .238.665l.904.428a.5.5 0 0 0 .666-.238l1.64-3.467a.5.5 0 0 0-.237-.665zM6.658 17.028l3.89-8.242l.904.427l-3.89 8.241a1.5 1.5 0 0 1-1.998.716l-.903-.427a1.5 1.5 0 0 1-.714-1.998l3.85-8.135l.904.428l-3.85 8.135a.5.5 0 0 0 .238.666l.903.427a.5.5 0 0 0 .666-.238"></svg:path></svg:g><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilHammerClawOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHammerSledgeIcon],svg[pepicons-pencil-hammer-sledge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.28 1.055a1.5 1.5 0 0 1 .918.323l6.863 5.415a1.5 1.5 0 0 1 .528.819l.19.773a1.5 1.5 0 0 1-.279 1.289l-2.49 3.156a1.5 1.5 0 0 1-1.188.57l-.797-.005a1.5 1.5 0 0 1-.918-.322L6.243 7.658a1.5 1.5 0 0 1-.528-.819l-.19-.773a1.5 1.5 0 0 1 .279-1.288L8.295 1.62a1.5 1.5 0 0 1 1.188-.571zm.299 1.108a.5.5 0 0 0-.306-.108l-.797-.005a.5.5 0 0 0-.396.19L6.59 5.397a.5.5 0 0 0-.093.43l.19.773a.5.5 0 0 0 .176.273l6.863 5.416a.5.5 0 0 0 .306.107l.797.006a.5.5 0 0 0 .396-.19l2.491-3.158a.5.5 0 0 0 .093-.43l-.19-.773a.5.5 0 0 0-.176-.273zM8.885 9.751L3.624 16.42a.5.5 0 0 0 .082.702l.785.62a.5.5 0 0 0 .703-.083l5.261-6.668l.785.62l-5.261 6.668a1.5 1.5 0 0 1-2.107.248l-.785-.62a1.5 1.5 0 0 1-.248-2.106L8.1 9.132z"></svg:path><svg:path d="m13.376 4.06l.93-1.178a.5.5 0 0 1 .702-.082l.785.62a.5.5 0 0 1 .083.701l-.93 1.178l.786.62l.929-1.178a1.5 1.5 0 0 0-.249-2.107l-.785-.62a1.5 1.5 0 0 0-2.106.249l-.93 1.177z"></svg:path></svg:g>`,
})
export class PepiconsPencilHammerSledgeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHammerSledgeCircleIcon],svg[pepicons-pencil-hammer-sledge-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.28 4.055a1.5 1.5 0 0 1 .918.323l6.863 5.415a1.5 1.5 0 0 1 .528.819l.19.773a1.5 1.5 0 0 1-.279 1.289l-2.49 3.156a1.5 1.5 0 0 1-1.188.57l-.797-.005a1.5 1.5 0 0 1-.918-.322l-6.863-5.416a1.5 1.5 0 0 1-.528-.819l-.19-.773a1.5 1.5 0 0 1 .279-1.288l2.491-3.157a1.5 1.5 0 0 1 1.188-.571zm.299 1.108a.5.5 0 0 0-.306-.108l-.797-.005a.5.5 0 0 0-.396.19L9.59 8.397a.5.5 0 0 0-.093.43l.19.773a.5.5 0 0 0 .176.273l6.863 5.416a.5.5 0 0 0 .306.107l.797.006a.5.5 0 0 0 .396-.19l2.491-3.158a.5.5 0 0 0 .093-.43l-.19-.773a.5.5 0 0 0-.176-.273zm-1.694 7.588L6.624 19.42a.5.5 0 0 0 .082.702l.785.62a.5.5 0 0 0 .703-.083l5.261-6.668l.785.62l-5.261 6.668a1.5 1.5 0 0 1-2.107.248l-.785-.62a1.5 1.5 0 0 1-.248-2.106l5.261-6.668z"></svg:path><svg:path d="m16.376 7.06l.93-1.178a.5.5 0 0 1 .702-.082l.785.62a.5.5 0 0 1 .083.701l-.93 1.178l.785.62l.93-1.178a1.5 1.5 0 0 0-.249-2.107l-.785-.62a1.5 1.5 0 0 0-2.106.249l-.93 1.177z"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilHammerSledgeCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHammerSledgeCircleFilledIcon],svg[pepicons-pencil-hammer-sledge-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilHammerSledgeCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.28 4.055a1.5 1.5 0 0 1 .918.323l6.863 5.415a1.5 1.5 0 0 1 .528.819l.19.773a1.5 1.5 0 0 1-.279 1.289l-2.49 3.156a1.5 1.5 0 0 1-1.188.57l-.797-.005a1.5 1.5 0 0 1-.918-.322l-6.863-5.416a1.5 1.5 0 0 1-.528-.819l-.19-.773a1.5 1.5 0 0 1 .279-1.288l2.491-3.157a1.5 1.5 0 0 1 1.188-.571zm.299 1.108a.5.5 0 0 0-.306-.108l-.797-.005a.5.5 0 0 0-.396.19L9.59 8.397a.5.5 0 0 0-.093.43l.19.773a.5.5 0 0 0 .176.273l6.863 5.416a.5.5 0 0 0 .306.107l.797.006a.5.5 0 0 0 .396-.19l2.491-3.158a.5.5 0 0 0 .093-.43l-.19-.773a.5.5 0 0 0-.176-.273zm-1.694 7.588L6.624 19.42a.5.5 0 0 0 .082.702l.785.62a.5.5 0 0 0 .703-.083l5.261-6.668l.785.62l-5.261 6.668a1.5 1.5 0 0 1-2.107.248l-.785-.62a1.5 1.5 0 0 1-.248-2.106l5.261-6.668z"></svg:path><svg:path d="m16.376 7.06l.93-1.178a.5.5 0 0 1 .702-.082l.785.62a.5.5 0 0 1 .083.701l-.93 1.178l.785.62l.93-1.178a1.5 1.5 0 0 0-.249-2.107l-.785-.62a1.5 1.5 0 0 0-2.106.249l-.93 1.177z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilHammerSledgeCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilHammerSledgeCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHammerSledgeCircleOffIcon],svg[pepicons-pencil-hammer-sledge-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.28 4.055a1.5 1.5 0 0 1 .918.323l6.863 5.415a1.5 1.5 0 0 1 .528.819l.19.773a1.5 1.5 0 0 1-.279 1.289l-2.49 3.156a1.5 1.5 0 0 1-1.188.57l-.797-.005a1.5 1.5 0 0 1-.918-.322l-6.863-5.416a1.5 1.5 0 0 1-.528-.819l-.19-.773a1.5 1.5 0 0 1 .279-1.288l2.491-3.157a1.5 1.5 0 0 1 1.188-.571zm.299 1.108a.5.5 0 0 0-.306-.108l-.797-.005a.5.5 0 0 0-.396.19L9.59 8.397a.5.5 0 0 0-.093.43l.19.773a.5.5 0 0 0 .176.273l6.863 5.416a.5.5 0 0 0 .306.107l.797.006a.5.5 0 0 0 .396-.19l2.491-3.158a.5.5 0 0 0 .093-.43l-.19-.773a.5.5 0 0 0-.176-.273zm-1.694 7.588L6.624 19.42a.5.5 0 0 0 .082.702l.785.62a.5.5 0 0 0 .703-.083l5.261-6.668l.785.62l-5.261 6.668a1.5 1.5 0 0 1-2.107.248l-.785-.62a1.5 1.5 0 0 1-.248-2.106l5.261-6.668z"></svg:path><svg:path d="m16.376 7.06l.93-1.178a.5.5 0 0 1 .702-.082l.785.62a.5.5 0 0 1 .083.701l-.93 1.178l.785.62l.93-1.178a1.5 1.5 0 0 0-.249-2.107l-.785-.62a1.5 1.5 0 0 0-2.106.249l-.93 1.177z"></svg:path></svg:g><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilHammerSledgeCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHammerSledgeOffIcon],svg[pepicons-pencil-hammer-sledge-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.28 1.055a1.5 1.5 0 0 1 .918.323l6.863 5.415a1.5 1.5 0 0 1 .528.819l.19.773a1.5 1.5 0 0 1-.279 1.289l-2.49 3.156a1.5 1.5 0 0 1-1.188.57l-.797-.005a1.5 1.5 0 0 1-.918-.322L6.243 7.658a1.5 1.5 0 0 1-.528-.819l-.19-.773a1.5 1.5 0 0 1 .279-1.288L8.295 1.62a1.5 1.5 0 0 1 1.188-.571zm.299 1.108a.5.5 0 0 0-.306-.108l-.797-.005a.5.5 0 0 0-.396.19L6.59 5.397a.5.5 0 0 0-.093.43l.19.773a.5.5 0 0 0 .176.273l6.863 5.416a.5.5 0 0 0 .306.107l.797.006a.5.5 0 0 0 .396-.19l2.491-3.158a.5.5 0 0 0 .093-.43l-.19-.773a.5.5 0 0 0-.176-.273zM8.885 9.751L3.624 16.42a.5.5 0 0 0 .082.702l.785.62a.5.5 0 0 0 .703-.083l5.261-6.668l.785.62l-5.261 6.668a1.5 1.5 0 0 1-2.107.248l-.785-.62a1.5 1.5 0 0 1-.248-2.106L8.1 9.132z"></svg:path><svg:path d="m13.376 4.06l.93-1.178a.5.5 0 0 1 .702-.082l.785.62a.5.5 0 0 1 .083.701l-.93 1.178l.786.62l.929-1.178a1.5 1.5 0 0 0-.249-2.107l-.785-.62a1.5 1.5 0 0 0-2.106.249l-.93 1.177z"></svg:path></svg:g><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilHammerSledgeOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandGrabIcon],svg[pepicons-pencil-hand-grab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.183 3.72a1.875 1.875 0 0 1 3.645-.448a1.875 1.875 0 0 1 2.849 1.603v.21q.235-.084.5-.085h.375c1.035 0 1.875.84 1.875 1.875v4.56l.004.065c0 2.136-.806 3.774-2.043 4.874C13.16 17.465 11.538 18 9.931 18c-3.264 0-5.394-2.187-6.923-4.733a47 47 0 0 1-.978-1.559C.898 9.842 2.269 7.503 4.427 7.5V5.375A1.875 1.875 0 0 1 7.183 3.72m-.006 1.655a.875.875 0 1 0-1.75 0V10a.5.5 0 0 1-1 0V8.5c-1.403.003-2.257 1.51-1.542 2.69c.357.59.697 1.135.962 1.533l.006.01l.007.01C5.33 15.193 7.199 17 9.93 17c1.394 0 2.771-.465 3.794-1.374c1.001-.89 1.69-2.23 1.707-4.062l-.004-.064V6.875A.875.875 0 0 0 14.552 6h-.375a.5.5 0 0 0-.5.5v1a.5.5 0 1 1-1 0V4.875a.875.875 0 1 0-1.75 0V7a.5.5 0 1 1-1 0V3.875a.875.875 0 1 0-1.75 0V7.5a.5.5 0 0 1-1 0z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPencilHandGrabIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandGrabCircleIcon],svg[pepicons-pencil-hand-grab-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.183 6.72a1.875 1.875 0 0 1 3.645-.448a1.875 1.875 0 0 1 2.849 1.603v.21q.235-.084.5-.085h.375c1.035 0 1.875.84 1.875 1.875v4.56l.004.065c0 2.136-.806 3.774-2.043 4.874C16.16 20.465 14.538 21 12.931 21c-3.264 0-5.394-2.187-6.923-4.733a47 47 0 0 1-.978-1.559c-1.132-1.866.239-4.205 2.397-4.208V8.375a1.875 1.875 0 0 1 2.756-1.655m-.006 1.655a.875.875 0 1 0-1.75 0V13a.5.5 0 0 1-1 0v-1.5c-1.403.003-2.257 1.51-1.542 2.69c.357.59.697 1.135.962 1.533l.006.01l.007.01C8.33 18.193 10.199 20 12.93 20c1.394 0 2.771-.465 3.794-1.374c1.001-.89 1.69-2.23 1.707-4.062l-.005-.064V9.875A.875.875 0 0 0 17.553 9h-.375a.5.5 0 0 0-.5.5v1a.5.5 0 1 1-1 0V7.875a.875.875 0 1 0-1.75 0V10a.5.5 0 1 1-1 0V6.875a.875.875 0 1 0-1.75 0V10.5a.5.5 0 0 1-1 0z"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilHandGrabCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandGrabCircleFilledIcon],svg[pepicons-pencil-hand-grab-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilHandGrabCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M10.183 6.72a1.875 1.875 0 0 1 3.645-.448a1.875 1.875 0 0 1 2.849 1.603v.21q.235-.084.5-.085h.375c1.035 0 1.875.84 1.875 1.875v4.56l.004.065c0 2.136-.806 3.774-2.043 4.874C16.16 20.465 14.538 21 12.931 21c-3.264 0-5.394-2.187-6.923-4.733a47 47 0 0 1-.978-1.559c-1.132-1.866.239-4.205 2.397-4.208V8.375a1.875 1.875 0 0 1 2.756-1.655m-.006 1.655a.875.875 0 1 0-1.75 0V13a.5.5 0 0 1-1 0v-1.5c-1.403.003-2.257 1.51-1.542 2.69c.357.59.697 1.135.962 1.533l.006.01l.007.01C8.33 18.193 10.199 20 12.93 20c1.394 0 2.771-.465 3.794-1.374c1.001-.89 1.69-2.23 1.707-4.062l-.005-.064V9.875A.875.875 0 0 0 17.553 9h-.375a.5.5 0 0 0-.5.5v1a.5.5 0 1 1-1 0V7.875a.875.875 0 1 0-1.75 0V10a.5.5 0 1 1-1 0V6.875a.875.875 0 1 0-1.75 0V10.5a.5.5 0 0 1-1 0z" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilHandGrabCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilHandGrabCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandGrabCircleOffIcon],svg[pepicons-pencil-hand-grab-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10.183 6.72a1.875 1.875 0 0 1 3.645-.448a1.875 1.875 0 0 1 2.849 1.603v.21q.235-.084.5-.085h.375c1.035 0 1.875.84 1.875 1.875v4.56l.004.065c0 2.136-.806 3.774-2.043 4.874C16.16 20.465 14.538 21 12.931 21c-3.264 0-5.394-2.187-6.923-4.733a47 47 0 0 1-.978-1.559c-1.132-1.866.239-4.205 2.397-4.208V8.375a1.875 1.875 0 0 1 2.756-1.655m-.006 1.655a.875.875 0 1 0-1.75 0V13a.5.5 0 0 1-1 0v-1.5c-1.403.003-2.257 1.51-1.542 2.69c.357.59.697 1.135.962 1.533l.006.01l.007.01C8.33 18.193 10.199 20 12.93 20c1.394 0 2.771-.465 3.794-1.374c1.001-.89 1.69-2.23 1.707-4.062l-.005-.064V9.875A.875.875 0 0 0 17.553 9h-.375a.5.5 0 0 0-.5.5v1a.5.5 0 1 1-1 0V7.875a.875.875 0 1 0-1.75 0V10a.5.5 0 1 1-1 0V6.875a.875.875 0 1 0-1.75 0V10.5a.5.5 0 0 1-1 0z" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilHandGrabCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandGrabOffIcon],svg[pepicons-pencil-hand-grab-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.183 3.72a1.875 1.875 0 0 1 3.645-.448a1.875 1.875 0 0 1 2.849 1.603v.21q.235-.084.5-.085h.375c1.035 0 1.875.84 1.875 1.875v4.56l.004.065c0 2.136-.806 3.774-2.043 4.874C13.16 17.465 11.538 18 9.931 18c-3.264 0-5.394-2.187-6.923-4.733a47 47 0 0 1-.978-1.559C.898 9.842 2.269 7.503 4.427 7.5V5.375A1.875 1.875 0 0 1 7.183 3.72m-.006 1.655a.875.875 0 1 0-1.75 0V10a.5.5 0 0 1-1 0V8.5c-1.403.003-2.257 1.51-1.542 2.69c.357.59.697 1.135.962 1.533l.006.01l.007.01C5.33 15.193 7.199 17 9.93 17c1.394 0 2.771-.465 3.794-1.374c1.001-.89 1.69-2.23 1.707-4.062l-.004-.064V6.875A.875.875 0 0 0 14.552 6h-.375a.5.5 0 0 0-.5.5v1a.5.5 0 1 1-1 0V4.875a.875.875 0 1 0-1.75 0V7a.5.5 0 1 1-1 0V3.875a.875.875 0 1 0-1.75 0V7.5a.5.5 0 0 1-1 0z" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilHandGrabOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandOpenIcon],svg[pepicons-pencil-hand-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.608 3.558c-.39 0-.758.133-1.048.355V2.257A1.751 1.751 0 0 0 11.594 1a1.75 1.75 0 0 0-1.584-1c-.847 0-1.55.6-1.717 1.4A1.78 1.78 0 0 0 7.2 1.024c-.97 0-1.75.79-1.75 1.745v7.293l-.815-1.623c-.29-.59-.88-.945-1.539-.945c-.223 0-.434.045-.635.122a1.7 1.7 0 0 0-.97.979a1.74 1.74 0 0 0 .067 1.378l1.873 3.736v.022l.033.022c.223.39.424.745.603 1.079c.256.467.49.878.724 1.278c.491.823.926 1.39 1.406 1.835c1.17 1.09 2.72 1.556 5.207 1.556c1.985 0 3.58-.9 4.639-2.613c.859-1.39 1.327-3.29 1.327-5.37V5.304a1.75 1.75 0 0 0-1.75-1.745zm.636 7.97c0 1.735-.368 3.492-1.16 4.781c-.77 1.257-1.94 2.08-3.68 2.08c-2.442 0-3.624-.49-4.45-1.257c-.434-.4-.802-.923-1.204-1.59c-.234-.389-.457-.79-.702-1.234c-.19-.344-.39-.7-.625-1.112L2.55 9.461a.597.597 0 0 1 .535-.867a.59.59 0 0 1 .536.333l1.472 2.935a.8.8 0 0 0 .3.334c.079.044.179.078.28.1h.11c.068 0 .135 0 .202-.022a.8.8 0 0 0 .457-.345a.7.7 0 0 0 .1-.289V2.769a.634.634 0 0 1 1.271 0v6.736a.77.77 0 0 0 1.54 0v-7.76a.634.634 0 0 1 1.27 0v7.249a.77.77 0 0 0 1.54 0V2.257a.634.634 0 0 1 1.271 0v7.482a.77.77 0 0 0 1.539 0V5.303a.634.634 0 0 1 1.271 0z"></svg:path>`,
})
export class PepiconsPencilHandOpenIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandOpenCircleIcon],svg[pepicons-pencil-hand-open-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18.608 6.558c-.39 0-.758.133-1.048.355V5.257A1.751 1.751 0 0 0 14.594 4a1.75 1.75 0 0 0-1.584-1c-.847 0-1.55.6-1.717 1.4a1.78 1.78 0 0 0-1.093-.377c-.97 0-1.75.79-1.75 1.745v7.293l-.815-1.623c-.29-.59-.88-.945-1.539-.945c-.223 0-.434.045-.635.122a1.7 1.7 0 0 0-.97.979a1.74 1.74 0 0 0 .067 1.378l1.873 3.736v.022l.033.022c.223.39.424.745.603 1.079c.256.467.49.878.724 1.278c.491.823.926 1.39 1.406 1.835c1.17 1.09 2.72 1.556 5.207 1.556c1.985 0 3.58-.9 4.639-2.613c.859-1.39 1.327-3.29 1.327-5.37V8.304a1.75 1.75 0 0 0-1.75-1.745zm.636 7.97c0 1.735-.368 3.492-1.16 4.781c-.77 1.257-1.94 2.08-3.68 2.08c-2.442 0-3.624-.49-4.45-1.257c-.434-.4-.802-.923-1.204-1.59c-.234-.389-.457-.79-.702-1.234c-.19-.344-.39-.7-.625-1.112L5.55 12.461a.597.597 0 0 1 .535-.867a.59.59 0 0 1 .536.333l1.472 2.935a.8.8 0 0 0 .3.334c.079.044.179.078.28.1h.11c.068 0 .135 0 .202-.022a.8.8 0 0 0 .457-.345a.7.7 0 0 0 .1-.289V5.769a.634.634 0 0 1 1.271 0v6.736a.77.77 0 0 0 1.54 0v-7.76a.634.634 0 0 1 1.27 0v7.249a.77.77 0 0 0 1.54 0V5.257a.634.634 0 0 1 1.271 0v7.482a.77.77 0 0 0 1.538 0V8.303c0-.356.29-.634.636-.634s.636.29.636.634z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilHandOpenCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandOpenCircleFilledIcon],svg[pepicons-pencil-hand-open-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilHandOpenCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" d="M18.608 6.558c-.39 0-.758.133-1.048.355V5.257A1.751 1.751 0 0 0 14.594 4a1.75 1.75 0 0 0-1.584-1c-.847 0-1.55.6-1.717 1.4a1.78 1.78 0 0 0-1.093-.377c-.97 0-1.75.79-1.75 1.745v7.293l-.815-1.623c-.29-.59-.88-.945-1.539-.945c-.223 0-.434.045-.635.122a1.7 1.7 0 0 0-.97.979a1.74 1.74 0 0 0 .067 1.378l1.873 3.736v.022l.033.022c.223.39.424.745.603 1.079c.256.467.49.878.724 1.278c.491.823.926 1.39 1.406 1.835c1.17 1.09 2.72 1.556 5.207 1.556c1.985 0 3.58-.9 4.639-2.613c.859-1.39 1.327-3.29 1.327-5.37V8.304a1.75 1.75 0 0 0-1.75-1.745zm.636 7.97c0 1.735-.368 3.492-1.16 4.781c-.77 1.257-1.94 2.08-3.68 2.08c-2.442 0-3.624-.49-4.45-1.257c-.434-.4-.802-.923-1.204-1.59c-.234-.389-.457-.79-.702-1.234c-.19-.344-.39-.7-.625-1.112L5.55 12.461a.597.597 0 0 1 .535-.867a.59.59 0 0 1 .536.333l1.472 2.935a.8.8 0 0 0 .3.334c.079.044.179.078.28.1h.11c.068 0 .135 0 .202-.022a.8.8 0 0 0 .457-.345a.7.7 0 0 0 .1-.289V5.769a.634.634 0 0 1 1.271 0v6.736a.77.77 0 0 0 1.54 0v-7.76a.634.634 0 0 1 1.27 0v7.249a.77.77 0 0 0 1.54 0V5.257a.634.634 0 0 1 1.271 0v7.482a.77.77 0 0 0 1.538 0V8.303c0-.356.29-.634.636-.634s.636.29.636.634z"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilHandOpenCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilHandOpenCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandOpenCircleOffIcon],svg[pepicons-pencil-hand-open-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18.608 6.558c-.39 0-.758.133-1.048.355V5.257A1.751 1.751 0 0 0 14.594 4a1.75 1.75 0 0 0-1.584-1c-.847 0-1.55.6-1.717 1.4a1.78 1.78 0 0 0-1.093-.377c-.97 0-1.75.79-1.75 1.745v7.293l-.815-1.623c-.29-.59-.88-.945-1.539-.945c-.223 0-.434.045-.635.122a1.7 1.7 0 0 0-.97.979a1.74 1.74 0 0 0 .067 1.378l1.873 3.736v.022l.033.022c.223.39.424.745.603 1.079c.256.467.49.878.724 1.278c.491.823.926 1.39 1.406 1.835c1.17 1.09 2.72 1.556 5.207 1.556c1.985 0 3.58-.9 4.639-2.613c.859-1.39 1.327-3.29 1.327-5.37V8.304a1.75 1.75 0 0 0-1.75-1.745zm.636 7.97c0 1.735-.368 3.492-1.16 4.781c-.77 1.257-1.94 2.08-3.68 2.08c-2.442 0-3.624-.49-4.45-1.257c-.434-.4-.802-.923-1.204-1.59c-.234-.389-.457-.79-.702-1.234c-.19-.344-.39-.7-.625-1.112L5.55 12.461a.597.597 0 0 1 .535-.867a.59.59 0 0 1 .536.333l1.472 2.935a.8.8 0 0 0 .3.334c.079.044.179.078.28.1h.11c.068 0 .135 0 .202-.022a.8.8 0 0 0 .457-.345a.7.7 0 0 0 .1-.289V5.769a.634.634 0 0 1 1.271 0v6.736a.77.77 0 0 0 1.54 0v-7.76a.634.634 0 0 1 1.27 0v7.249a.77.77 0 0 0 1.54 0V5.257a.634.634 0 0 1 1.271 0v7.482a.77.77 0 0 0 1.538 0V8.303c0-.356.29-.634.636-.634s.636.29.636.634z"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilHandOpenCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandOpenOffIcon],svg[pepicons-pencil-hand-open-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.608 3.558c-.39 0-.758.133-1.048.355V2.257A1.751 1.751 0 0 0 11.594 1a1.75 1.75 0 0 0-1.584-1c-.847 0-1.55.6-1.717 1.4A1.78 1.78 0 0 0 7.2 1.024c-.97 0-1.75.79-1.75 1.745v7.293l-.815-1.623c-.29-.59-.88-.945-1.539-.945c-.223 0-.434.045-.635.122a1.7 1.7 0 0 0-.97.979a1.74 1.74 0 0 0 .067 1.378l1.873 3.736v.022l.033.022c.223.39.424.745.603 1.079c.256.467.49.878.724 1.278c.491.823.926 1.39 1.406 1.835c1.17 1.09 2.72 1.556 5.207 1.556c1.985 0 3.58-.9 4.639-2.613c.859-1.39 1.327-3.29 1.327-5.37V5.304a1.75 1.75 0 0 0-1.75-1.745zm.636 7.97c0 1.735-.368 3.492-1.16 4.781c-.77 1.257-1.94 2.08-3.68 2.08c-2.442 0-3.624-.49-4.45-1.257c-.434-.4-.802-.923-1.204-1.59c-.234-.389-.457-.79-.702-1.234c-.19-.344-.39-.7-.625-1.112L2.55 9.461a.597.597 0 0 1 .535-.867a.59.59 0 0 1 .536.333l1.472 2.935a.8.8 0 0 0 .3.334c.079.044.179.078.28.1h.11c.068 0 .135 0 .202-.022a.8.8 0 0 0 .457-.345a.7.7 0 0 0 .1-.289V2.769a.634.634 0 0 1 1.271 0v6.736a.77.77 0 0 0 1.54 0v-7.76a.634.634 0 0 1 1.27 0v7.249a.77.77 0 0 0 1.54 0V2.257a.634.634 0 0 1 1.271 0v7.482a.77.77 0 0 0 1.539 0V5.303a.634.634 0 0 1 1.271 0z"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilHandOpenOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandPointIcon],svg[pepicons-pencil-hand-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.65 2.025a1.875 1.875 0 1 1 3.75 0v2.839a1.876 1.876 0 0 1 2.647 1.06a1.874 1.874 0 0 1 2.848 1.6v.211q.238-.084.502-.085h.374c1.036 0 1.875.84 1.875 1.875v3.56l.005.065c0 2.14-.81 3.667-2.068 4.645c-1.238.963-2.858 1.355-4.432 1.355c-1.59 0-2.935-.399-4.084-1.143c-1.141-.738-2.063-1.8-2.839-3.09a47 47 0 0 1-.978-1.559c-1.133-1.867.24-4.208 2.4-4.208zm-.618 12.384l-.007-.009a46 46 0 0 1-.963-1.534C2.325 11.65 3.208 10.1 4.65 10.1h.05v1.55a.45.45 0 0 0 .9 0V2.025a.925.925 0 1 1 1.85 0L7.447 9.15a.45.45 0 0 0 .9 0V6.501a.926.926 0 0 1 1.85.024V8.75a.45.45 0 0 0 .9 0v-.54a.4.4 0 0 0 .004-.061l-.002-.624a.924.924 0 1 1 1.848-.002V9.65a.45.45 0 0 0 .9 0v-.5a.55.55 0 0 1 .55-.55h.374c.511 0 .925.414.925.925v3.625q0 .03.004.057l.001.007c-.016 1.838-.707 3.057-1.701 3.83c-1.024.796-2.416 1.156-3.85 1.156c-1.42 0-2.583-.354-3.567-.99c-.99-.64-1.82-1.582-2.546-2.792z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPencilHandPointIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandPointCircleIcon],svg[pepicons-pencil-hand-point-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.65 5.025a1.875 1.875 0 1 1 3.75 0v2.839a1.876 1.876 0 0 1 2.647 1.06a1.874 1.874 0 0 1 2.848 1.6l.002.211q.235-.084.5-.085h.375c1.035 0 1.875.84 1.875 1.875v3.56l.004.065c0 2.14-.81 3.667-2.068 4.645c-1.238.963-2.858 1.355-4.432 1.355c-1.59 0-2.935-.399-4.084-1.143c-1.141-.738-2.063-1.8-2.839-3.09a47 47 0 0 1-.978-1.559c-1.133-1.867.24-4.208 2.4-4.208zm-.618 12.384l-.007-.009a46 46 0 0 1-.963-1.534C5.325 14.65 6.208 13.1 7.65 13.1h.05v1.55a.45.45 0 0 0 .9 0V5.025a.925.925 0 1 1 1.85 0l-.004 7.125a.45.45 0 0 0 .9 0V9.501a.926.926 0 0 1 1.85.024v2.225a.45.45 0 0 0 .9 0v-.54a.4.4 0 0 0 .004-.061l-.002-.624a.924.924 0 1 1 1.848-.002v2.127a.45.45 0 0 0 .9 0v-.5a.55.55 0 0 1 .55-.55h.375c.51 0 .925.414.925.925v3.625q0 .03.003.057l.001.007c-.016 1.838-.707 3.057-1.701 3.83c-1.024.796-2.416 1.156-3.85 1.156c-1.42 0-2.583-.354-3.567-.99c-.99-.64-1.82-1.582-2.546-2.791z"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilHandPointCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandPointCircleFilledIcon],svg[pepicons-pencil-hand-point-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilHandPointCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M7.65 5.025a1.875 1.875 0 1 1 3.75 0v2.839a1.876 1.876 0 0 1 2.647 1.06a1.874 1.874 0 0 1 2.848 1.6l.002.211q.235-.084.5-.085h.375c1.035 0 1.875.84 1.875 1.875v3.56l.004.065c0 2.14-.81 3.667-2.068 4.645c-1.238.963-2.858 1.355-4.432 1.355c-1.59 0-2.935-.399-4.084-1.143c-1.141-.738-2.063-1.8-2.839-3.09a47 47 0 0 1-.978-1.559c-1.133-1.867.24-4.208 2.4-4.208zm-.618 12.384l-.007-.009a46 46 0 0 1-.963-1.534C5.325 14.65 6.208 13.1 7.65 13.1h.05v1.55a.45.45 0 0 0 .9 0V5.025a.925.925 0 1 1 1.85 0l-.004 7.125a.45.45 0 0 0 .9 0V9.501a.926.926 0 0 1 1.85.024v2.225a.45.45 0 0 0 .9 0v-.54a.4.4 0 0 0 .004-.061l-.002-.624a.924.924 0 1 1 1.848-.002v2.127a.45.45 0 0 0 .9 0v-.5a.55.55 0 0 1 .55-.55h.375c.51 0 .925.414.925.925v3.625q0 .03.003.057l.001.007c-.016 1.838-.707 3.057-1.701 3.83c-1.024.796-2.416 1.156-3.85 1.156c-1.42 0-2.583-.354-3.567-.99c-.99-.64-1.82-1.582-2.546-2.791z" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilHandPointCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilHandPointCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandPointCircleOffIcon],svg[pepicons-pencil-hand-point-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.65 5.025a1.875 1.875 0 1 1 3.75 0v2.839a1.876 1.876 0 0 1 2.647 1.06a1.874 1.874 0 0 1 2.848 1.6l.002.211q.235-.084.5-.085h.375c1.035 0 1.875.84 1.875 1.875v3.56l.004.065c0 2.14-.81 3.667-2.068 4.645c-1.238.963-2.858 1.355-4.432 1.355c-1.59 0-2.935-.399-4.084-1.143c-1.141-.738-2.063-1.8-2.839-3.09a47 47 0 0 1-.978-1.559c-1.133-1.867.24-4.208 2.4-4.208zm-.618 12.384l-.007-.009a46 46 0 0 1-.963-1.534C5.325 14.65 6.208 13.1 7.65 13.1h.05v1.55a.45.45 0 0 0 .9 0V5.025a.925.925 0 1 1 1.85 0l-.004 7.125a.45.45 0 0 0 .9 0V9.501a.926.926 0 0 1 1.85.024v2.225a.45.45 0 0 0 .9 0v-.54a.4.4 0 0 0 .004-.061l-.002-.624a.924.924 0 1 1 1.848-.002v2.127a.45.45 0 0 0 .9 0v-.5a.55.55 0 0 1 .55-.55h.375c.51 0 .925.414.925.925v3.625q0 .03.003.057l.001.007c-.016 1.838-.707 3.057-1.701 3.83c-1.024.796-2.416 1.156-3.85 1.156c-1.42 0-2.583-.354-3.567-.99c-.99-.64-1.82-1.582-2.546-2.791z" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilHandPointCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandPointOffIcon],svg[pepicons-pencil-hand-point-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M4.65 2.025a1.875 1.875 0 1 1 3.75 0v2.839a1.876 1.876 0 0 1 2.647 1.06a1.874 1.874 0 0 1 2.848 1.6v.211q.238-.084.502-.085h.374c1.036 0 1.875.84 1.875 1.875v3.56l.005.065c0 2.14-.81 3.667-2.068 4.645c-1.238.963-2.858 1.355-4.432 1.355c-1.59 0-2.935-.399-4.084-1.143c-1.141-.738-2.063-1.8-2.839-3.09a47 47 0 0 1-.978-1.559c-1.133-1.867.24-4.208 2.4-4.208zm-.618 12.384l-.007-.009a46 46 0 0 1-.963-1.534C2.325 11.65 3.208 10.1 4.65 10.1h.05v1.55a.45.45 0 0 0 .9 0V2.025a.925.925 0 1 1 1.85 0L7.447 9.15a.45.45 0 0 0 .9 0V6.501a.926.926 0 0 1 1.85.024V8.75a.45.45 0 0 0 .9 0v-.54a.4.4 0 0 0 .004-.061l-.002-.624a.924.924 0 1 1 1.848-.002V9.65a.45.45 0 0 0 .9 0v-.5a.55.55 0 0 1 .55-.55h.374c.511 0 .925.414.925.925v3.625q0 .03.004.057l.001.007c-.016 1.838-.707 3.057-1.701 3.83c-1.024.796-2.416 1.156-3.85 1.156c-1.42 0-2.583-.354-3.567-.99c-.99-.64-1.82-1.582-2.546-2.792z" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilHandPointOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandPointOpenIcon],svg[pepicons-pencil-hand-point-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.097 2.375a1.875 1.875 0 1 1 3.75 0V6.5a.5.5 0 0 1-1 0V2.375a.875.875 0 1 0-1.75 0V12a.5.5 0 0 1-1 0z"></svg:path><svg:path d="M3.018 9.759a.813.813 0 0 0-1.283.995l2.772 3.96a.5.5 0 0 1-.82.573l-2.771-3.96a1.813 1.813 0 0 1 2.86-2.219l2.2 2.566a.5.5 0 1 1-.759.651zm4.825-2.884a1.875 1.875 0 0 1 3.75 0V9.1a.5.5 0 0 1-1 0V6.875a.875.875 0 0 0-1.75 0V9.5a.5.5 0 0 1-1 0z"></svg:path><svg:path d="M14.343 7.874a1.874 1.874 0 1 0-3.747.004l.001.623a.5.5 0 1 0 1-.002l-.001-.624a.874.874 0 1 1 1.747-.001V10a.5.5 0 0 0 1 0z"></svg:path><svg:path d="M17.093 9.875c0-1.036-.84-1.875-1.875-1.875h-.375a1.5 1.5 0 0 0-1.5 1.5h1a.5.5 0 0 1 .5-.5h.375c.483 0 .875.392.875.875V13.5a.5.5 0 0 0 1 0z"></svg:path><svg:path d="M16.597 13a.5.5 0 0 1 .5.5c0 2.14-.81 3.667-2.068 4.645c-1.238.963-2.858 1.355-4.432 1.355c-1.589 0-2.935-.399-4.084-1.143c-1.144-.74-2.068-1.805-2.845-3.1a.5.5 0 1 1 .858-.514c.723 1.205 1.55 2.14 2.53 2.775c.976.631 2.13.982 3.541.982c1.426 0 2.806-.358 3.818-1.145c.993-.772 1.682-1.995 1.682-3.855a.5.5 0 0 1 .5-.5"></svg:path></svg:g>`,
})
export class PepiconsPencilHandPointOpenIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandPointOpenCircleIcon],svg[pepicons-pencil-hand-point-open-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.097 5.375a1.875 1.875 0 1 1 3.75 0V9.5a.5.5 0 0 1-1 0V5.375a.875.875 0 1 0-1.75 0V15a.5.5 0 0 1-1 0z"></svg:path><svg:path d="M6.018 12.759a.813.813 0 0 0-1.283.995l2.772 3.96a.5.5 0 0 1-.82.573l-2.771-3.96a1.813 1.813 0 0 1 2.86-2.219l2.2 2.566a.5.5 0 1 1-.759.651zm4.825-2.884a1.875 1.875 0 0 1 3.75 0V12.1a.5.5 0 0 1-1 0V9.875a.875.875 0 0 0-1.75 0V12.5a.5.5 0 0 1-1 0z"></svg:path><svg:path d="M17.343 10.874a1.874 1.874 0 1 0-3.747.004l.001.623a.5.5 0 1 0 1-.002l-.001-.624a.874.874 0 1 1 1.747-.001V13a.5.5 0 0 0 1 0z"></svg:path><svg:path d="M20.093 12.875c0-1.036-.84-1.875-1.875-1.875h-.375a1.5 1.5 0 0 0-1.5 1.5h1a.5.5 0 0 1 .5-.5h.375c.483 0 .875.392.875.875V16.5a.5.5 0 0 0 1 0z"></svg:path><svg:path d="M19.597 16a.5.5 0 0 1 .5.5c0 2.14-.81 3.667-2.068 4.645c-1.238.963-2.858 1.355-4.432 1.355c-1.589 0-2.935-.399-4.084-1.143c-1.144-.74-2.068-1.805-2.845-3.1a.5.5 0 1 1 .858-.514c.723 1.205 1.55 2.14 2.53 2.775c.976.631 2.13.982 3.541.982c1.426 0 2.806-.358 3.818-1.145c.993-.772 1.682-1.995 1.682-3.855a.5.5 0 0 1 .5-.5"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilHandPointOpenCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandPointOpenCircleFilledIcon],svg[pepicons-pencil-hand-point-open-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilHandPointOpenCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.097 5.375a1.875 1.875 0 1 1 3.75 0V9.5a.5.5 0 0 1-1 0V5.375a.875.875 0 1 0-1.75 0V15a.5.5 0 0 1-1 0z"></svg:path><svg:path d="M6.018 12.759a.813.813 0 0 0-1.283.995l2.772 3.96a.5.5 0 0 1-.82.573l-2.771-3.96a1.813 1.813 0 0 1 2.86-2.219l2.2 2.566a.5.5 0 1 1-.759.651zm4.825-2.884a1.875 1.875 0 0 1 3.75 0V12.1a.5.5 0 0 1-1 0V9.875a.875.875 0 0 0-1.75 0V12.5a.5.5 0 0 1-1 0z"></svg:path><svg:path d="M17.343 10.874a1.874 1.874 0 1 0-3.747.004l.001.623a.5.5 0 1 0 1-.002l-.001-.624a.874.874 0 1 1 1.747-.001V13a.5.5 0 0 0 1 0z"></svg:path><svg:path d="M20.093 12.875c0-1.036-.84-1.875-1.875-1.875h-.375a1.5 1.5 0 0 0-1.5 1.5h1a.5.5 0 0 1 .5-.5h.375c.483 0 .875.392.875.875V16.5a.5.5 0 0 0 1 0z"></svg:path><svg:path d="M19.597 16a.5.5 0 0 1 .5.5c0 2.14-.81 3.667-2.068 4.645c-1.238.963-2.858 1.355-4.432 1.355c-1.589 0-2.935-.399-4.084-1.143c-1.144-.74-2.068-1.805-2.845-3.1a.5.5 0 1 1 .858-.514c.723 1.205 1.55 2.14 2.53 2.775c.976.631 2.13.982 3.541.982c1.426 0 2.806-.358 3.818-1.145c.993-.772 1.682-1.995 1.682-3.855a.5.5 0 0 1 .5-.5"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilHandPointOpenCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilHandPointOpenCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandPointOpenCircleOffIcon],svg[pepicons-pencil-hand-point-open-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.097 5.375a1.875 1.875 0 1 1 3.75 0V9.5a.5.5 0 0 1-1 0V5.375a.875.875 0 1 0-1.75 0V15a.5.5 0 0 1-1 0z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.018 12.759a.813.813 0 0 0-1.283.995l2.772 3.96a.5.5 0 0 1-.82.573l-2.771-3.96a1.813 1.813 0 0 1 2.86-2.219l2.2 2.566a.5.5 0 1 1-.759.651zm4.825-2.884a1.875 1.875 0 0 1 3.75 0V12.1a.5.5 0 0 1-1 0V9.875a.875.875 0 0 0-1.75 0V12.5a.5.5 0 0 1-1 0z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17.343 10.874a1.874 1.874 0 1 0-3.747.004l.001.623a.5.5 0 1 0 1-.002l-.001-.624a.874.874 0 1 1 1.747-.001V13a.5.5 0 0 0 1 0z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M20.093 12.875c0-1.036-.84-1.875-1.875-1.875h-.375a1.5 1.5 0 0 0-1.5 1.5h1a.5.5 0 0 1 .5-.5h.375c.483 0 .875.392.875.875V16.5a.5.5 0 0 0 1 0z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M19.597 16a.5.5 0 0 1 .5.5c0 2.14-.81 3.667-2.068 4.645c-1.238.963-2.858 1.355-4.432 1.355c-1.589 0-2.935-.399-4.084-1.143c-1.144-.74-2.068-1.805-2.845-3.1a.5.5 0 1 1 .858-.514c.723 1.205 1.55 2.14 2.53 2.775c.976.631 2.13.982 3.541.982c1.426 0 2.806-.358 3.818-1.145c.993-.772 1.682-1.995 1.682-3.855a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilHandPointOpenCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandPointOpenOffIcon],svg[pepicons-pencil-hand-point-open-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.097 2.375a1.875 1.875 0 1 1 3.75 0V6.5a.5.5 0 0 1-1 0V2.375a.875.875 0 1 0-1.75 0V12a.5.5 0 0 1-1 0z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3.018 9.759a.813.813 0 0 0-1.283.995l2.772 3.96a.5.5 0 0 1-.82.573l-2.771-3.96a1.813 1.813 0 0 1 2.86-2.219l2.2 2.566a.5.5 0 1 1-.759.651zm4.825-2.884a1.875 1.875 0 0 1 3.75 0V9.1a.5.5 0 0 1-1 0V6.875a.875.875 0 0 0-1.75 0V9.5a.5.5 0 0 1-1 0z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14.343 7.874a1.874 1.874 0 1 0-3.747.004l.001.623a.5.5 0 1 0 1-.002l-.001-.624a.874.874 0 1 1 1.747-.001V10a.5.5 0 0 0 1 0z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17.093 9.875c0-1.036-.84-1.875-1.875-1.875h-.375a1.5 1.5 0 0 0-1.5 1.5h1a.5.5 0 0 1 .5-.5h.375c.483 0 .875.392.875.875V13.5a.5.5 0 0 0 1 0z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M16.597 13a.5.5 0 0 1 .5.5c0 2.14-.81 3.667-2.068 4.645c-1.238.963-2.858 1.355-4.432 1.355c-1.589 0-2.935-.399-4.084-1.143c-1.144-.74-2.068-1.805-2.845-3.1a.5.5 0 1 1 .858-.514c.723 1.205 1.55 2.14 2.53 2.775c.976.631 2.13.982 3.541.982c1.426 0 2.806-.358 3.818-1.145c.993-.772 1.682-1.995 1.682-3.855a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilHandPointOpenOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandsClappingIcon],svg[pepicons-pencil-hands-clapping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3.268 10.422a1.5 1.5 0 1 1 2.166-2.076L8.2 11.234a.5.5 0 1 1-.722.692L4.712 9.038a.5.5 0 0 0-.722.692l2.767 2.888a.5.5 0 0 1-.722.692z"></svg:path><svg:path d="M4.02 8.316a1.5 1.5 0 1 1 2.166-2.075l2.767 2.888a.5.5 0 1 1-.722.692L5.464 6.932a.5.5 0 1 0-.722.692l2.767 2.888a.5.5 0 0 1-.722.692z"></svg:path><svg:path d="M6.156 7.654A1.5 1.5 0 1 1 8.322 5.58l3.116 3.251a.5.5 0 1 1-.723.692L7.6 6.271a.5.5 0 1 0-.722.692L9.645 9.85a.5.5 0 1 1-.722.691z"></svg:path><svg:path d="M10.24 7.452a1.595 1.595 0 0 1 3.01-.992L14 8.09a.5.5 0 1 1-.91.417l-.748-1.631a.595.595 0 0 0-1.124.37l.396 1.892a.5.5 0 1 1-.979.204z"></svg:path><svg:path d="M4.695 14.08a.5.5 0 0 1 .707.015l2.411 2.516c.358.373.788.67 1.264.873l.034.015a3.7 3.7 0 0 0 3-.043l.139-.064c.5-.23.957-.54 1.353-.92l.127-.123a3.705 3.705 0 0 0 .878-4.05l-1.523-3.81a.5.5 0 1 1 .929-.372l1.522 3.81a4.71 4.71 0 0 1-1.114 5.144l-.127.122a6 6 0 0 1-1.627 1.108l-.139.064a4.7 4.7 0 0 1-3.81.054l-.034-.015a4.8 4.8 0 0 1-1.594-1.101l-2.41-2.516a.5.5 0 0 1 .014-.707"></svg:path><svg:path d="M3.207 13.25a1.5 1.5 0 0 1 2.166-2.076l1.384 1.444a.5.5 0 1 1-.722.692l-1.384-1.444a.5.5 0 1 0-.722.692l2.768 2.888a.5.5 0 1 1-.722.692zm5.087-6.26a1.5 1.5 0 1 1 2.166-2.075l.484.506a.5.5 0 1 1-.722.691l-.484-.505a.5.5 0 0 0-.722.692l1.383 1.444a.5.5 0 0 1-.722.692zm4.235-.097a1.531 1.531 0 0 1 2.83-1.162l.779 1.697a.5.5 0 0 1-.91.417l-.778-1.697a.531.531 0 0 0-.981.403l.612 1.683a.5.5 0 0 1-.94.342z"></svg:path><svg:path d="M15.502 7.175a.5.5 0 0 1 .65.278l1.522 3.81a4.71 4.71 0 0 1-1.114 5.145l-.101.097a6.2 6.2 0 0 1-1.685 1.147l-.122.056l-.209-.454l.21.454a7 7 0 0 1-1.017.374l-1.154.326a.5.5 0 1 1-.271-.963l1.153-.325q.449-.126.87-.32l.122-.057a5.2 5.2 0 0 0 1.411-.96l.102-.097a3.71 3.71 0 0 0 .877-4.051l-1.523-3.81a.5.5 0 0 1 .279-.65M4.22 1.086a.5.5 0 0 1 .694.133L6.12 2.997a.5.5 0 0 1-.827.561L4.086 1.781a.5.5 0 0 1 .133-.695m8.008-.031a.5.5 0 0 0-.672.218l-.907 1.777a.5.5 0 1 0 .89.455l.907-1.778a.5.5 0 0 0-.218-.672M8.31.5a.5.5 0 0 1 .5.5v1.777a.5.5 0 1 1-1 0V1a.5.5 0 0 1 .5-.5"></svg:path></svg:g>`,
})
export class PepiconsPencilHandsClappingIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandsClappingCheckmarkIcon],svg[pepicons-pencil-hands-clapping-checkmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M2.268 10.422a1.5 1.5 0 1 1 2.166-2.076L7.2 11.234a.5.5 0 1 1-.722.692L3.712 9.038a.5.5 0 0 0-.722.692l2.767 2.888a.5.5 0 0 1-.722.692z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3.02 8.316a1.5 1.5 0 1 1 2.166-2.075l2.767 2.888a.5.5 0 1 1-.722.692L4.464 6.932a.5.5 0 1 0-.722.692l2.767 2.888a.5.5 0 0 1-.722.692z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.156 7.654A1.5 1.5 0 1 1 7.322 5.58l3.116 3.251a.5.5 0 1 1-.722.692L6.6 6.271a.5.5 0 1 0-.722.692L8.645 9.85a.5.5 0 1 1-.722.691z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.24 7.452a1.595 1.595 0 0 1 3.01-.992L13 8.09a.5.5 0 1 1-.91.417l-.748-1.631a.595.595 0 0 0-1.124.37l.396 1.892a.5.5 0 1 1-.979.204z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3.695 14.08a.5.5 0 0 1 .707.015l2.411 2.516c.358.373.788.67 1.264.873l.034.015a3.7 3.7 0 0 0 3-.043l.139-.064c.5-.23.957-.54 1.353-.92l.127-.123a3.705 3.705 0 0 0 .878-4.05l-1.523-3.81a.5.5 0 1 1 .929-.372l1.522 3.81a4.71 4.71 0 0 1-1.114 5.144l-.127.122a6 6 0 0 1-1.627 1.108l-.139.064a4.7 4.7 0 0 1-3.81.054l-.034-.015a4.8 4.8 0 0 1-1.594-1.101l-2.41-2.516a.5.5 0 0 1 .014-.707" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M2.207 13.25a1.5 1.5 0 0 1 2.166-2.076l1.384 1.444a.5.5 0 1 1-.722.692l-1.384-1.444a.5.5 0 1 0-.722.692l2.768 2.888a.5.5 0 1 1-.722.692zm5.087-6.26A1.5 1.5 0 0 1 9.46 4.916l.484.506a.5.5 0 0 1-.722.691l-.484-.505a.5.5 0 0 0-.722.692l1.383 1.444a.5.5 0 0 1-.722.692zm4.235-.097a1.531 1.531 0 0 1 2.83-1.162l.779 1.697a.5.5 0 0 1-.91.417l-.778-1.697a.531.531 0 0 0-.981.403l.612 1.683a.5.5 0 0 1-.94.342z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14.502 7.175a.5.5 0 0 1 .65.278l1.522 3.81a4.71 4.71 0 0 1-1.114 5.145l-.101.097a6.2 6.2 0 0 1-1.685 1.147l-.122.056l-.209-.454l.21.454a7 7 0 0 1-1.017.374l-1.154.326a.5.5 0 1 1-.271-.963l1.153-.325q.449-.126.87-.32l.122-.057a5.2 5.2 0 0 0 1.411-.96l.102-.097a3.71 3.71 0 0 0 .877-4.051l-1.523-3.81a.5.5 0 0 1 .279-.65M3.22 1.086a.5.5 0 0 1 .694.133L5.12 2.997a.5.5 0 0 1-.827.561L3.086 1.781a.5.5 0 0 1 .133-.695m8.008-.031a.5.5 0 0 0-.672.218L9.648 3.05a.5.5 0 1 0 .89.455l.907-1.778a.5.5 0 0 0-.218-.672M7.31.5a.5.5 0 0 1 .5.5v1.777a.5.5 0 1 1-1 0V1a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path d="M18 15a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path><svg:path fill-rule="evenodd" d="M14 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 1a4 4 0 1 0 0-8a4 4 0 0 0 0 8" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15.75 13.367a.5.5 0 0 1 .183.683l-1.5 2.6a.5.5 0 1 1-.866-.5l1.5-2.6a.5.5 0 0 1 .683-.183" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.097 15.004a.5.5 0 0 1 .699-.107l1.5 1.1a.5.5 0 1 1-.592.806l-1.5-1.1a.5.5 0 0 1-.107-.699" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilHandsClappingCheckmarkIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandsClappingCheckmarkCircleIcon],svg[pepicons-pencil-hands-clapping-checkmark-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.268 13.422a1.5 1.5 0 1 1 2.166-2.076l2.767 2.888a.5.5 0 1 1-.722.692l-2.767-2.888a.5.5 0 0 0-.722.692l2.767 2.888a.5.5 0 0 1-.722.692z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.02 11.316a1.5 1.5 0 1 1 2.166-2.075l2.767 2.888a.5.5 0 1 1-.722.692L7.464 9.932a.5.5 0 1 0-.722.692l2.767 2.888a.5.5 0 0 1-.722.692z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.156 10.654a1.5 1.5 0 1 1 2.166-2.075l3.116 3.251a.5.5 0 1 1-.722.692L9.6 9.271a.5.5 0 1 0-.722.692l2.767 2.888a.5.5 0 1 1-.722.691z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.24 10.452a1.595 1.595 0 0 1 3.01-.992l.75 1.63a.5.5 0 1 1-.91.417l-.748-1.631a.595.595 0 0 0-1.124.37l.396 1.892a.5.5 0 1 1-.979.204z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.695 17.08a.5.5 0 0 1 .707.015l2.411 2.516c.358.373.788.67 1.264.873l.034.015a3.7 3.7 0 0 0 3-.043l.139-.064c.5-.23.957-.54 1.353-.92l.127-.123a3.705 3.705 0 0 0 .878-4.05l-1.523-3.81a.5.5 0 1 1 .929-.372l1.522 3.81a4.71 4.71 0 0 1-1.114 5.144l-.127.122a6 6 0 0 1-1.627 1.108l-.139.064a4.7 4.7 0 0 1-3.81.054l-.034-.015a4.8 4.8 0 0 1-1.594-1.101l-2.41-2.516a.5.5 0 0 1 .014-.707" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.207 16.25a1.5 1.5 0 0 1 2.166-2.076l1.384 1.444a.5.5 0 1 1-.722.692l-1.384-1.444a.5.5 0 1 0-.722.692l2.768 2.888a.5.5 0 1 1-.722.692zm5.087-6.26a1.5 1.5 0 0 1 2.166-2.075l.484.506a.5.5 0 0 1-.722.691l-.484-.505a.5.5 0 0 0-.722.692l1.383 1.444a.5.5 0 0 1-.722.692zm4.235-.097a1.531 1.531 0 0 1 2.83-1.162l.779 1.697a.5.5 0 0 1-.91.417l-.778-1.697a.531.531 0 0 0-.981.403l.612 1.683a.5.5 0 0 1-.94.342z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17.502 10.175a.5.5 0 0 1 .65.278l1.522 3.81a4.71 4.71 0 0 1-1.114 5.145l-.101.097a6.2 6.2 0 0 1-1.685 1.147l-.122.056l-.209-.454l.21.454a7 7 0 0 1-1.017.374l-1.154.326a.5.5 0 1 1-.271-.963l1.153-.325q.448-.126.87-.32l.122-.057a5.2 5.2 0 0 0 1.411-.96l.102-.097a3.71 3.71 0 0 0 .877-4.051l-1.523-3.81a.5.5 0 0 1 .279-.65M6.22 4.086a.5.5 0 0 1 .694.133L8.12 5.997a.5.5 0 0 1-.827.561L6.086 4.781a.5.5 0 0 1 .133-.695m8.008-.031a.5.5 0 0 0-.672.218l-.907 1.777a.5.5 0 1 0 .89.455l.907-1.778a.5.5 0 0 0-.218-.672M10.31 3.5a.5.5 0 0 1 .5.5v1.777a.5.5 0 1 1-1 0V4a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path d="M21 18a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path><svg:path fill-rule="evenodd" d="M17 21a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 1a4 4 0 1 0 0-8a4 4 0 0 0 0 8" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M18.75 16.367a.5.5 0 0 1 .183.683l-1.5 2.6a.5.5 0 1 1-.866-.5l1.5-2.6a.5.5 0 0 1 .683-.183" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15.097 18.004a.5.5 0 0 1 .699-.107l1.5 1.1a.5.5 0 1 1-.592.806l-1.5-1.1a.5.5 0 0 1-.107-.699" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilHandsClappingCheckmarkCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandsClappingCheckmarkCircleFilledIcon],svg[pepicons-pencil-hands-clapping-checkmark-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilHandsClappingCheckmarkCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M5.268 13.422a1.5 1.5 0 1 1 2.166-2.076l2.767 2.888a.5.5 0 1 1-.722.692l-2.767-2.888a.5.5 0 0 0-.722.692l2.767 2.888a.5.5 0 0 1-.722.692z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.02 11.316a1.5 1.5 0 1 1 2.166-2.075l2.767 2.888a.5.5 0 1 1-.722.692L7.464 9.932a.5.5 0 1 0-.722.692l2.767 2.888a.5.5 0 0 1-.722.692z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.156 10.654a1.5 1.5 0 1 1 2.166-2.075l3.116 3.251a.5.5 0 1 1-.722.692L9.6 9.271a.5.5 0 1 0-.722.692l2.767 2.888a.5.5 0 1 1-.722.691z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.24 10.452a1.595 1.595 0 0 1 3.01-.992l.75 1.63a.5.5 0 1 1-.91.417l-.748-1.631a.595.595 0 0 0-1.124.37l.396 1.892a.5.5 0 1 1-.979.204z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.695 17.08a.5.5 0 0 1 .707.015l2.411 2.516c.358.373.788.67 1.264.873l.034.015a3.7 3.7 0 0 0 3-.043l.139-.064c.5-.23.957-.54 1.353-.92l.127-.123a3.705 3.705 0 0 0 .878-4.05l-1.523-3.81a.5.5 0 1 1 .929-.372l1.522 3.81a4.71 4.71 0 0 1-1.114 5.144l-.127.122a6 6 0 0 1-1.627 1.108l-.139.064a4.7 4.7 0 0 1-3.81.054l-.034-.015a4.8 4.8 0 0 1-1.594-1.101l-2.41-2.516a.5.5 0 0 1 .014-.707" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.207 16.25a1.5 1.5 0 0 1 2.166-2.076l1.384 1.444a.5.5 0 1 1-.722.692l-1.384-1.444a.5.5 0 1 0-.722.692l2.768 2.888a.5.5 0 1 1-.722.692zm5.087-6.26a1.5 1.5 0 0 1 2.166-2.075l.484.506a.5.5 0 0 1-.722.691l-.484-.505a.5.5 0 0 0-.722.692l1.383 1.444a.5.5 0 0 1-.722.692zm4.235-.097a1.531 1.531 0 0 1 2.83-1.162l.779 1.697a.5.5 0 0 1-.91.417l-.778-1.697a.531.531 0 0 0-.981.403l.612 1.683a.5.5 0 0 1-.94.342z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17.502 10.175a.5.5 0 0 1 .65.278l1.522 3.81a4.71 4.71 0 0 1-1.114 5.145l-.101.097a6.2 6.2 0 0 1-1.685 1.147l-.122.056l-.209-.454l.21.454a7 7 0 0 1-1.017.374l-1.154.326a.5.5 0 1 1-.271-.963l1.153-.325q.448-.126.87-.32l.122-.057a5.2 5.2 0 0 0 1.411-.96l.102-.097a3.71 3.71 0 0 0 .877-4.051l-1.523-3.81a.5.5 0 0 1 .279-.65M6.22 4.086a.5.5 0 0 1 .694.133L8.12 5.997a.5.5 0 0 1-.827.561L6.086 4.781a.5.5 0 0 1 .133-.695m8.008-.031a.5.5 0 0 0-.672.218l-.907 1.777a.5.5 0 1 0 .89.455l.907-1.778a.5.5 0 0 0-.218-.672M10.31 3.5a.5.5 0 0 1 .5.5v1.777a.5.5 0 1 1-1 0V4a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path d="M21 18a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path><svg:path fill-rule="evenodd" d="M17 21a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 1a4 4 0 1 0 0-8a4 4 0 0 0 0 8" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M18.75 16.367a.5.5 0 0 1 .183.683l-1.5 2.6a.5.5 0 1 1-.866-.5l1.5-2.6a.5.5 0 0 1 .683-.183" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15.097 18.004a.5.5 0 0 1 .699-.107l1.5 1.1a.5.5 0 1 1-.592.806l-1.5-1.1a.5.5 0 0 1-.107-.699" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilHandsClappingCheckmarkCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilHandsClappingCheckmarkCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandsClappingCheckmarkCircleOffIcon],svg[pepicons-pencil-hands-clapping-checkmark-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.268 13.422a1.5 1.5 0 1 1 2.166-2.076l2.767 2.888a.5.5 0 1 1-.722.692l-2.767-2.888a.5.5 0 0 0-.722.692l2.767 2.888a.5.5 0 0 1-.722.692z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.02 11.316a1.5 1.5 0 1 1 2.166-2.075l2.767 2.888a.5.5 0 1 1-.722.692L7.464 9.932a.5.5 0 1 0-.722.692l2.767 2.888a.5.5 0 0 1-.722.692z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.156 10.654a1.5 1.5 0 1 1 2.166-2.075l3.116 3.251a.5.5 0 1 1-.722.692L9.6 9.271a.5.5 0 1 0-.722.692l2.767 2.888a.5.5 0 1 1-.722.691z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.24 10.452a1.595 1.595 0 0 1 3.01-.992l.75 1.63a.5.5 0 1 1-.91.417l-.748-1.631a.595.595 0 0 0-1.124.37l.396 1.892a.5.5 0 1 1-.979.204z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.695 17.08a.5.5 0 0 1 .707.015l2.411 2.516c.358.373.788.67 1.264.873l.034.015a3.7 3.7 0 0 0 3-.043l.139-.064c.5-.23.957-.54 1.353-.92l.127-.123a3.705 3.705 0 0 0 .878-4.05l-1.523-3.81a.5.5 0 1 1 .929-.372l1.522 3.81a4.71 4.71 0 0 1-1.114 5.144l-.127.122a6 6 0 0 1-1.627 1.108l-.139.064a4.7 4.7 0 0 1-3.81.054l-.034-.015a4.8 4.8 0 0 1-1.594-1.101l-2.41-2.516a.5.5 0 0 1 .014-.707" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.207 16.25a1.5 1.5 0 0 1 2.166-2.076l1.384 1.444a.5.5 0 1 1-.722.692l-1.384-1.444a.5.5 0 1 0-.722.692l2.768 2.888a.5.5 0 1 1-.722.692zm5.087-6.26a1.5 1.5 0 0 1 2.166-2.075l.484.506a.5.5 0 0 1-.722.691l-.484-.505a.5.5 0 0 0-.722.692l1.383 1.444a.5.5 0 0 1-.722.692zm4.235-.097a1.531 1.531 0 0 1 2.83-1.162l.779 1.697a.5.5 0 0 1-.91.417l-.778-1.697a.531.531 0 0 0-.981.403l.612 1.683a.5.5 0 0 1-.94.342z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17.502 10.175a.5.5 0 0 1 .65.278l1.522 3.81a4.71 4.71 0 0 1-1.114 5.145l-.101.097a6.2 6.2 0 0 1-1.685 1.147l-.122.056l-.209-.454l.21.454a7 7 0 0 1-1.017.374l-1.154.326a.5.5 0 1 1-.271-.963l1.153-.325q.448-.126.87-.32l.122-.057a5.2 5.2 0 0 0 1.411-.96l.102-.097a3.71 3.71 0 0 0 .877-4.051l-1.523-3.81a.5.5 0 0 1 .279-.65M6.22 4.086a.5.5 0 0 1 .694.133L8.12 5.997a.5.5 0 0 1-.827.561L6.086 4.781a.5.5 0 0 1 .133-.695m8.008-.031a.5.5 0 0 0-.672.218l-.907 1.777a.5.5 0 1 0 .89.455l.907-1.778a.5.5 0 0 0-.218-.672M10.31 3.5a.5.5 0 0 1 .5.5v1.777a.5.5 0 1 1-1 0V4a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path d="M21 18a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path><svg:path fill-rule="evenodd" d="M17 21a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 1a4 4 0 1 0 0-8a4 4 0 0 0 0 8" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M18.75 16.367a.5.5 0 0 1 .183.683l-1.5 2.6a.5.5 0 1 1-.866-.5l1.5-2.6a.5.5 0 0 1 .683-.183" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15.097 18.004a.5.5 0 0 1 .699-.107l1.5 1.1a.5.5 0 1 1-.592.806l-1.5-1.1a.5.5 0 0 1-.107-.699" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilHandsClappingCheckmarkCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandsClappingCheckmarkOffIcon],svg[pepicons-pencil-hands-clapping-checkmark-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M2.268 10.422a1.5 1.5 0 1 1 2.166-2.076L7.2 11.234a.5.5 0 1 1-.722.692L3.712 9.038a.5.5 0 0 0-.722.692l2.767 2.888a.5.5 0 0 1-.722.692z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3.02 8.316a1.5 1.5 0 1 1 2.166-2.075l2.767 2.888a.5.5 0 1 1-.722.692L4.464 6.932a.5.5 0 1 0-.722.692l2.767 2.888a.5.5 0 0 1-.722.692z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.156 7.654A1.5 1.5 0 1 1 7.322 5.58l3.116 3.251a.5.5 0 1 1-.722.692L6.6 6.271a.5.5 0 1 0-.722.692L8.645 9.85a.5.5 0 1 1-.722.691z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.24 7.452a1.595 1.595 0 0 1 3.01-.992L13 8.09a.5.5 0 1 1-.91.417l-.748-1.631a.595.595 0 0 0-1.124.37l.396 1.892a.5.5 0 1 1-.979.204z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3.695 14.08a.5.5 0 0 1 .707.015l2.411 2.516c.358.373.788.67 1.264.873l.034.015a3.7 3.7 0 0 0 3-.043l.139-.064c.5-.23.957-.54 1.353-.92l.127-.123a3.705 3.705 0 0 0 .878-4.05l-1.523-3.81a.5.5 0 1 1 .929-.372l1.522 3.81a4.71 4.71 0 0 1-1.114 5.144l-.127.122a6 6 0 0 1-1.627 1.108l-.139.064a4.7 4.7 0 0 1-3.81.054l-.034-.015a4.8 4.8 0 0 1-1.594-1.101l-2.41-2.516a.5.5 0 0 1 .014-.707" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M2.207 13.25a1.5 1.5 0 0 1 2.166-2.076l1.384 1.444a.5.5 0 1 1-.722.692l-1.384-1.444a.5.5 0 1 0-.722.692l2.768 2.888a.5.5 0 1 1-.722.692zm5.087-6.26A1.5 1.5 0 0 1 9.46 4.916l.484.506a.5.5 0 0 1-.722.691l-.484-.505a.5.5 0 0 0-.722.692l1.383 1.444a.5.5 0 0 1-.722.692zm4.235-.097a1.531 1.531 0 0 1 2.83-1.162l.779 1.697a.5.5 0 0 1-.91.417l-.778-1.697a.531.531 0 0 0-.981.403l.612 1.683a.5.5 0 0 1-.94.342z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14.502 7.175a.5.5 0 0 1 .65.278l1.522 3.81a4.71 4.71 0 0 1-1.114 5.145l-.101.097a6.2 6.2 0 0 1-1.685 1.147l-.122.056l-.209-.454l.21.454a7 7 0 0 1-1.017.374l-1.154.326a.5.5 0 1 1-.271-.963l1.153-.325q.449-.126.87-.32l.122-.057a5.2 5.2 0 0 0 1.411-.96l.102-.097a3.71 3.71 0 0 0 .877-4.051l-1.523-3.81a.5.5 0 0 1 .279-.65M3.22 1.086a.5.5 0 0 1 .694.133L5.12 2.997a.5.5 0 0 1-.827.561L3.086 1.781a.5.5 0 0 1 .133-.695m8.008-.031a.5.5 0 0 0-.672.218L9.648 3.05a.5.5 0 1 0 .89.455l.907-1.778a.5.5 0 0 0-.218-.672M7.31.5a.5.5 0 0 1 .5.5v1.777a.5.5 0 1 1-1 0V1a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path d="M18 15a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path><svg:path fill-rule="evenodd" d="M14 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 1a4 4 0 1 0 0-8a4 4 0 0 0 0 8" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15.75 13.367a.5.5 0 0 1 .183.683l-1.5 2.6a.5.5 0 1 1-.866-.5l1.5-2.6a.5.5 0 0 1 .683-.183" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.097 15.004a.5.5 0 0 1 .699-.107l1.5 1.1a.5.5 0 1 1-.592.806l-1.5-1.1a.5.5 0 0 1-.107-.699" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilHandsClappingCheckmarkOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandsClappingCircleIcon],svg[pepicons-pencil-hands-clapping-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.268 13.422a1.5 1.5 0 1 1 2.166-2.076l2.767 2.888a.5.5 0 1 1-.722.692l-2.767-2.888a.5.5 0 0 0-.722.692l2.767 2.888a.5.5 0 0 1-.722.692z"></svg:path><svg:path d="M7.02 11.316a1.5 1.5 0 1 1 2.166-2.075l2.767 2.888a.5.5 0 1 1-.722.692L8.464 9.932a.5.5 0 1 0-.722.692l2.767 2.888a.5.5 0 0 1-.722.692z"></svg:path><svg:path d="M9.156 10.654a1.5 1.5 0 1 1 2.166-2.075l3.116 3.251a.5.5 0 1 1-.723.692L10.6 9.271a.5.5 0 1 0-.722.692l2.767 2.888a.5.5 0 1 1-.722.691z"></svg:path><svg:path d="M13.24 10.452a1.595 1.595 0 0 1 3.01-.992l.75 1.63a.5.5 0 1 1-.91.417l-.748-1.631a.595.595 0 0 0-1.124.37l.396 1.892a.5.5 0 1 1-.979.204z"></svg:path><svg:path d="M7.695 17.08a.5.5 0 0 1 .707.015l2.411 2.516c.358.373.788.67 1.264.873l.034.015a3.7 3.7 0 0 0 3-.043l.139-.064c.5-.23.957-.54 1.353-.92l.127-.123a3.705 3.705 0 0 0 .878-4.05l-1.523-3.81a.5.5 0 1 1 .929-.372l1.522 3.81a4.71 4.71 0 0 1-1.114 5.144l-.127.122a6 6 0 0 1-1.627 1.108l-.139.064a4.7 4.7 0 0 1-3.81.054l-.034-.015a4.8 4.8 0 0 1-1.594-1.101l-2.41-2.516a.5.5 0 0 1 .014-.707"></svg:path><svg:path d="M6.207 16.25a1.5 1.5 0 0 1 2.166-2.076l1.384 1.444a.5.5 0 1 1-.722.692l-1.384-1.444a.5.5 0 1 0-.722.692l2.768 2.888a.5.5 0 1 1-.722.692zm5.087-6.26a1.5 1.5 0 1 1 2.166-2.075l.484.506a.5.5 0 1 1-.722.691l-.484-.505a.5.5 0 0 0-.722.692l1.383 1.444a.5.5 0 0 1-.722.692zm4.235-.097a1.531 1.531 0 0 1 2.83-1.162l.779 1.697a.5.5 0 0 1-.91.417l-.778-1.697a.531.531 0 0 0-.981.403l.611 1.683a.5.5 0 0 1-.94.342z"></svg:path><svg:path d="M18.502 10.175a.5.5 0 0 1 .65.278l1.522 3.81a4.71 4.71 0 0 1-1.114 5.145l-.101.097a6.2 6.2 0 0 1-1.685 1.147l-.122.056l-.209-.454l.21.454a7 7 0 0 1-1.017.374l-1.154.326a.5.5 0 1 1-.271-.963l1.153-.325q.449-.126.87-.32l.122-.057a5.2 5.2 0 0 0 1.411-.96l.102-.097a3.71 3.71 0 0 0 .877-4.051l-1.523-3.81a.5.5 0 0 1 .279-.65M7.22 4.086a.5.5 0 0 1 .694.133L9.12 5.997a.5.5 0 0 1-.827.561L7.086 4.781a.5.5 0 0 1 .133-.695m8.008-.031a.5.5 0 0 0-.672.218l-.907 1.777a.5.5 0 1 0 .89.455l.907-1.778a.5.5 0 0 0-.218-.672M11.31 3.5a.5.5 0 0 1 .5.5v1.777a.5.5 0 1 1-1 0V4a.5.5 0 0 1 .5-.5"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilHandsClappingCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandsClappingCircleFilledIcon],svg[pepicons-pencil-hands-clapping-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilHandsClappingCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.268 13.422a1.5 1.5 0 1 1 2.166-2.076l2.767 2.888a.5.5 0 1 1-.722.692l-2.767-2.888a.5.5 0 0 0-.722.692l2.767 2.888a.5.5 0 0 1-.722.692z"></svg:path><svg:path d="M7.02 11.316a1.5 1.5 0 1 1 2.166-2.075l2.767 2.888a.5.5 0 1 1-.722.692L8.464 9.932a.5.5 0 1 0-.722.692l2.767 2.888a.5.5 0 0 1-.722.692z"></svg:path><svg:path d="M9.156 10.654a1.5 1.5 0 1 1 2.166-2.075l3.116 3.251a.5.5 0 1 1-.723.692L10.6 9.271a.5.5 0 1 0-.722.692l2.767 2.888a.5.5 0 1 1-.722.691z"></svg:path><svg:path d="M13.24 10.452a1.595 1.595 0 0 1 3.01-.992l.75 1.63a.5.5 0 1 1-.91.417l-.748-1.631a.595.595 0 0 0-1.124.37l.396 1.892a.5.5 0 1 1-.979.204z"></svg:path><svg:path d="M7.695 17.08a.5.5 0 0 1 .707.015l2.411 2.516c.358.373.788.67 1.264.873l.034.015a3.7 3.7 0 0 0 3-.043l.139-.064c.5-.23.957-.54 1.353-.92l.127-.123a3.705 3.705 0 0 0 .878-4.05l-1.523-3.81a.5.5 0 1 1 .929-.372l1.522 3.81a4.71 4.71 0 0 1-1.114 5.144l-.127.122a6 6 0 0 1-1.627 1.108l-.139.064a4.7 4.7 0 0 1-3.81.054l-.034-.015a4.8 4.8 0 0 1-1.594-1.101l-2.41-2.516a.5.5 0 0 1 .014-.707"></svg:path><svg:path d="M6.207 16.25a1.5 1.5 0 0 1 2.166-2.076l1.384 1.444a.5.5 0 1 1-.722.692l-1.384-1.444a.5.5 0 1 0-.722.692l2.768 2.888a.5.5 0 1 1-.722.692zm5.087-6.26a1.5 1.5 0 1 1 2.166-2.075l.484.506a.5.5 0 1 1-.722.691l-.484-.505a.5.5 0 0 0-.722.692l1.383 1.444a.5.5 0 0 1-.722.692zm4.235-.097a1.531 1.531 0 0 1 2.83-1.162l.779 1.697a.5.5 0 0 1-.91.417l-.778-1.697a.531.531 0 0 0-.981.403l.611 1.683a.5.5 0 0 1-.94.342z"></svg:path><svg:path d="M18.502 10.175a.5.5 0 0 1 .65.278l1.522 3.81a4.71 4.71 0 0 1-1.114 5.145l-.101.097a6.2 6.2 0 0 1-1.685 1.147l-.122.056l-.209-.454l.21.454a7 7 0 0 1-1.017.374l-1.154.326a.5.5 0 1 1-.271-.963l1.153-.325q.449-.126.87-.32l.122-.057a5.2 5.2 0 0 0 1.411-.96l.102-.097a3.71 3.71 0 0 0 .877-4.051l-1.523-3.81a.5.5 0 0 1 .279-.65M7.22 4.086a.5.5 0 0 1 .694.133L9.12 5.997a.5.5 0 0 1-.827.561L7.086 4.781a.5.5 0 0 1 .133-.695m8.008-.031a.5.5 0 0 0-.672.218l-.907 1.777a.5.5 0 1 0 .89.455l.907-1.778a.5.5 0 0 0-.218-.672M11.31 3.5a.5.5 0 0 1 .5.5v1.777a.5.5 0 1 1-1 0V4a.5.5 0 0 1 .5-.5"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilHandsClappingCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilHandsClappingCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandsClappingCircleOffIcon],svg[pepicons-pencil-hands-clapping-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.268 13.422a1.5 1.5 0 1 1 2.166-2.076l2.767 2.888a.5.5 0 1 1-.722.692l-2.767-2.888a.5.5 0 0 0-.722.692l2.767 2.888a.5.5 0 0 1-.722.692z"></svg:path><svg:path d="M7.02 11.316a1.5 1.5 0 1 1 2.166-2.075l2.767 2.888a.5.5 0 1 1-.722.692L8.464 9.932a.5.5 0 1 0-.722.692l2.767 2.888a.5.5 0 0 1-.722.692z"></svg:path><svg:path d="M9.156 10.654a1.5 1.5 0 1 1 2.166-2.075l3.116 3.251a.5.5 0 1 1-.723.692L10.6 9.271a.5.5 0 1 0-.722.692l2.767 2.888a.5.5 0 1 1-.722.691z"></svg:path><svg:path d="M13.24 10.452a1.595 1.595 0 0 1 3.01-.992l.75 1.63a.5.5 0 1 1-.91.417l-.748-1.631a.595.595 0 0 0-1.124.37l.396 1.892a.5.5 0 1 1-.979.204z"></svg:path><svg:path d="M7.695 17.08a.5.5 0 0 1 .707.015l2.411 2.516c.358.373.788.67 1.264.873l.034.015a3.7 3.7 0 0 0 3-.043l.139-.064c.5-.23.957-.54 1.353-.92l.127-.123a3.705 3.705 0 0 0 .878-4.05l-1.523-3.81a.5.5 0 1 1 .929-.372l1.522 3.81a4.71 4.71 0 0 1-1.114 5.144l-.127.122a6 6 0 0 1-1.627 1.108l-.139.064a4.7 4.7 0 0 1-3.81.054l-.034-.015a4.8 4.8 0 0 1-1.594-1.101l-2.41-2.516a.5.5 0 0 1 .014-.707"></svg:path><svg:path d="M6.207 16.25a1.5 1.5 0 0 1 2.166-2.076l1.384 1.444a.5.5 0 1 1-.722.692l-1.384-1.444a.5.5 0 1 0-.722.692l2.768 2.888a.5.5 0 1 1-.722.692zm5.087-6.26a1.5 1.5 0 1 1 2.166-2.075l.484.506a.5.5 0 1 1-.722.691l-.484-.505a.5.5 0 0 0-.722.692l1.383 1.444a.5.5 0 0 1-.722.692zm4.235-.097a1.531 1.531 0 0 1 2.83-1.162l.779 1.697a.5.5 0 0 1-.91.417l-.778-1.697a.531.531 0 0 0-.981.403l.611 1.683a.5.5 0 0 1-.94.342z"></svg:path><svg:path d="M18.502 10.175a.5.5 0 0 1 .65.278l1.522 3.81a4.71 4.71 0 0 1-1.114 5.145l-.101.097a6.2 6.2 0 0 1-1.685 1.147l-.122.056l-.209-.454l.21.454a7 7 0 0 1-1.017.374l-1.154.326a.5.5 0 1 1-.271-.963l1.153-.325q.449-.126.87-.32l.122-.057a5.2 5.2 0 0 0 1.411-.96l.102-.097a3.71 3.71 0 0 0 .877-4.051l-1.523-3.81a.5.5 0 0 1 .279-.65M7.22 4.086a.5.5 0 0 1 .694.133L9.12 5.997a.5.5 0 0 1-.827.561L7.086 4.781a.5.5 0 0 1 .133-.695m8.008-.031a.5.5 0 0 0-.672.218l-.907 1.777a.5.5 0 1 0 .89.455l.907-1.778a.5.5 0 0 0-.218-.672M11.31 3.5a.5.5 0 0 1 .5.5v1.777a.5.5 0 1 1-1 0V4a.5.5 0 0 1 .5-.5"></svg:path></svg:g><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilHandsClappingCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandsClappingOffIcon],svg[pepicons-pencil-hands-clapping-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3.268 10.422a1.5 1.5 0 1 1 2.166-2.076L8.2 11.234a.5.5 0 1 1-.722.692L4.712 9.038a.5.5 0 0 0-.722.692l2.767 2.888a.5.5 0 0 1-.722.692z"></svg:path><svg:path d="M4.02 8.316a1.5 1.5 0 1 1 2.166-2.075l2.767 2.888a.5.5 0 1 1-.722.692L5.464 6.932a.5.5 0 1 0-.722.692l2.767 2.888a.5.5 0 0 1-.722.692z"></svg:path><svg:path d="M6.156 7.654A1.5 1.5 0 1 1 8.322 5.58l3.116 3.251a.5.5 0 1 1-.723.692L7.6 6.271a.5.5 0 1 0-.722.692L9.645 9.85a.5.5 0 1 1-.722.691z"></svg:path><svg:path d="M10.24 7.452a1.595 1.595 0 0 1 3.01-.992L14 8.09a.5.5 0 1 1-.91.417l-.748-1.631a.595.595 0 0 0-1.124.37l.396 1.892a.5.5 0 1 1-.979.204z"></svg:path><svg:path d="M4.695 14.08a.5.5 0 0 1 .707.015l2.411 2.516c.358.373.788.67 1.264.873l.034.015a3.7 3.7 0 0 0 3-.043l.139-.064c.5-.23.957-.54 1.353-.92l.127-.123a3.705 3.705 0 0 0 .878-4.05l-1.523-3.81a.5.5 0 1 1 .929-.372l1.522 3.81a4.71 4.71 0 0 1-1.114 5.144l-.127.122a6 6 0 0 1-1.627 1.108l-.139.064a4.7 4.7 0 0 1-3.81.054l-.034-.015a4.8 4.8 0 0 1-1.594-1.101l-2.41-2.516a.5.5 0 0 1 .014-.707"></svg:path><svg:path d="M3.207 13.25a1.5 1.5 0 0 1 2.166-2.076l1.384 1.444a.5.5 0 1 1-.722.692l-1.384-1.444a.5.5 0 1 0-.722.692l2.768 2.888a.5.5 0 1 1-.722.692zm5.087-6.26a1.5 1.5 0 1 1 2.166-2.075l.484.506a.5.5 0 1 1-.722.691l-.484-.505a.5.5 0 0 0-.722.692l1.383 1.444a.5.5 0 0 1-.722.692zm4.235-.097a1.531 1.531 0 0 1 2.83-1.162l.779 1.697a.5.5 0 0 1-.91.417l-.778-1.697a.531.531 0 0 0-.981.403l.612 1.683a.5.5 0 0 1-.94.342z"></svg:path><svg:path d="M15.502 7.175a.5.5 0 0 1 .65.278l1.522 3.81a4.71 4.71 0 0 1-1.114 5.145l-.101.097a6.2 6.2 0 0 1-1.685 1.147l-.122.056l-.209-.454l.21.454a7 7 0 0 1-1.017.374l-1.154.326a.5.5 0 1 1-.271-.963l1.153-.325q.449-.126.87-.32l.122-.057a5.2 5.2 0 0 0 1.411-.96l.102-.097a3.71 3.71 0 0 0 .877-4.051l-1.523-3.81a.5.5 0 0 1 .279-.65M4.22 1.086a.5.5 0 0 1 .694.133L6.12 2.997a.5.5 0 0 1-.827.561L4.086 1.781a.5.5 0 0 1 .133-.695m8.008-.031a.5.5 0 0 0-.672.218l-.907 1.777a.5.5 0 1 0 .89.455l.907-1.778a.5.5 0 0 0-.218-.672M8.31.5a.5.5 0 0 1 .5.5v1.777a.5.5 0 1 1-1 0V1a.5.5 0 0 1 .5-.5"></svg:path></svg:g><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilHandsClappingOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandshakeIcon],svg[pepicons-pencil-handshake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3.646 2.49a1 1 0 0 0-1.322.502L.161 7.795a1 1 0 0 0 .5 1.322l1.49.671a1 1 0 0 0 1.323-.5l2.163-4.804a1 1 0 0 0-.5-1.322zM1.873 8.418a.681.681 0 1 0 .56-1.242a.681.681 0 0 0-.56 1.242m17.142.83a1 1 0 0 0 .58-1.29L17.73 3.034a1 1 0 0 0-1.29-.581l-1.527.579a1 1 0 0 0-.58 1.29l1.866 4.925a1 1 0 0 0 1.289.581zm-2.937-5.445a.681.681 0 1 0 .483 1.274a.681.681 0 0 0-.483-1.274" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14.885 4.107h.008a.5.5 0 1 0-.087-.997h-.008l-.026.003l-.097.01l-.353.034c-.297.03-.708.077-1.162.137c-.895.118-2.004.298-2.73.54c-.352.117-.724.344-1.08.604c-.361.264-.735.585-1.093.918A28 28 0 0 0 6.438 7.24c-.419.474-.516 1.23-.024 1.766c.32.346.82.784 1.468.98c.677.203 1.457.124 2.254-.468l.999-.645l.018-.011c.143.087.342.237.58.436c.26.218.542.475.805.722a34 34 0 0 1 .88.86l.055.057l.014.014l.005.005l.059.06l.075.039c.403.2.846.128 1.19.012c.358-.12.714-.324 1.017-.525a9 9 0 0 0 1.075-.849l.018-.016l.005-.005l.001-.001s-.088-.31-.432-.672l-.271.34L16 10l-2.508.957L14 10.5l-.268-.717a34 34 0 0 0-.508-.49c-.27-.254-.568-.525-.85-.76c-.273-.23-.557-.448-.794-.578c-.394-.216-.78-.056-.988.079l-1.028.664l-.014.01c-.555.416-1.011.432-1.38.321c-.4-.12-.755-.412-1.02-.7c-.083-.09-.107-.263.037-.426a27 27 0 0 1 1.751-1.815c.341-.317.683-.61 1.002-.843c.326-.238.6-.393.807-.462c.624-.208 1.645-.379 2.544-.498a41 41 0 0 1 1.478-.167l.093-.009z" clip-rule="evenodd"></svg:path><svg:path d="M14.127 10.177a35 35 0 0 0-.395-.394L14 10.5l-.508.457L16 10l.229-.66L16.5 9l-.255-.054l-.003.002l-.014.013l-.054.05a8 8 0 0 1-.895.699c-.27.18-.543.33-.783.41c-.186.063-.302.068-.369.057"></svg:path><svg:path fill-rule="evenodd" d="m5.047 5.068l-.197-.46l-.197-.46l.04-.016l.113-.048a93 93 0 0 1 1.67-.69a38 38 0 0 1 1.372-.523c.203-.072.392-.134.55-.179c.136-.04.31-.084.452-.084c.13 0 .267.03.38.06c.122.033.256.077.392.127c.274.1.583.23.869.356a29 29 0 0 1 .992.466l.066.032l.018.009l.006.003a.5.5 0 0 1-.447.895l-.005-.003l-.016-.008l-.062-.03a29 29 0 0 0-.959-.45a13 13 0 0 0-.803-.33a4 4 0 0 0-.309-.1a1 1 0 0 0-.119-.026l-.009.002c-.02.003-.073.014-.172.042a9 9 0 0 0-.492.161c-.388.137-.865.322-1.332.509a87 87 0 0 0-1.651.681l-.111.047zm-.657-.263a.5.5 0 0 1 .263-.656l.197.46l.197.459a.5.5 0 0 1-.657-.263m-1.903 3.96a.5.5 0 0 1 .707-.02l-.344.363l-.343.364a.5.5 0 0 1-.02-.707m4.57 3.387l2.763 1.036a1.5 1.5 0 0 0 1.587-.344l2.09-2.09a.5.5 0 0 1 .707.708l-2.09 2.09a2.5 2.5 0 0 1-2.645.572l-2.82-1.057l-.023-.011a3 3 0 0 1-.434-.292c-.162-.125-.352-.28-.557-.455a57 57 0 0 1-1.358-1.199a128 128 0 0 1-1.623-1.5l-.109-.102l-.038-.036l.343-.364l.344-.363l.037.035l.107.101a132 132 0 0 0 1.61 1.488c.46.417.935.84 1.333 1.178c.2.169.377.313.52.424c.132.101.215.157.256.18M3.67 14.288a.5.5 0 0 1 .703-.063l.959.8a1.5 1.5 0 0 0 .753.334l1.236.174a.5.5 0 1 1-.138.99l-1.237-.173a2.5 2.5 0 0 1-1.255-.557l-.959-.8a.5.5 0 0 1-.063-.705" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilHandshakeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandshakeCircleIcon],svg[pepicons-pencil-handshake-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.646 5.49a1 1 0 0 0-1.322.502l-2.163 4.803a1 1 0 0 0 .5 1.322l1.49.671a1 1 0 0 0 1.323-.5l2.163-4.804a1 1 0 0 0-.5-1.322zm-1.773 5.927a.681.681 0 1 0 .56-1.242a.681.681 0 0 0-.56 1.242m17.142.831a1 1 0 0 0 .58-1.29L20.73 6.034a1 1 0 0 0-1.29-.581l-1.527.579a1 1 0 0 0-.58 1.29l1.866 4.925a1 1 0 0 0 1.289.581zm-2.937-5.445a.681.681 0 1 0 .483 1.274a.681.681 0 0 0-.483-1.274" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17.885 7.107h.008a.5.5 0 1 0-.087-.997h-.008l-.026.003l-.096.01l-.354.034c-.297.03-.708.077-1.162.137c-.895.118-2.004.298-2.73.54c-.352.117-.724.344-1.08.604c-.361.264-.735.585-1.093.918a28 28 0 0 0-1.819 1.885c-.419.474-.516 1.23-.024 1.766c.32.346.82.784 1.468.98c.677.203 1.457.124 2.254-.468l.999-.645l.018-.011c.143.087.342.237.58.436c.26.218.542.475.805.722a34 34 0 0 1 .88.86l.055.057l.014.014l.005.005l.059.06l.075.039c.403.2.846.128 1.19.012c.358-.12.714-.324 1.017-.525a9 9 0 0 0 1.075-.849l.018-.016l.005-.005l.001-.001s-.088-.31-.432-.672l-.271.34L19 13l-2.508.957L17 13.5l-.268-.717a34 34 0 0 0-.508-.49c-.27-.254-.568-.525-.85-.76c-.273-.23-.557-.448-.794-.578c-.394-.216-.78-.056-.988.079l-1.028.664l-.014.01c-.555.416-1.011.432-1.38.321c-.4-.12-.755-.412-1.02-.7c-.083-.09-.107-.263.037-.426a27 27 0 0 1 1.752-1.815c.34-.317.682-.61 1.001-.843c.326-.238.6-.393.807-.462c.624-.208 1.645-.379 2.544-.498a41 41 0 0 1 1.478-.167l.093-.009z" clip-rule="evenodd"></svg:path><svg:path d="M17.127 13.177a35 35 0 0 0-.395-.394L17 13.5l-.508.457L19 13l.229-.66l.271-.34l-.255-.054l-.003.002l-.014.013l-.054.05a8 8 0 0 1-.895.699c-.27.18-.543.33-.783.41c-.186.063-.302.068-.369.057"></svg:path><svg:path fill-rule="evenodd" d="m8.047 8.068l-.197-.46l-.197-.46l.04-.016l.113-.048a93 93 0 0 1 1.67-.69a38 38 0 0 1 1.372-.523c.203-.072.392-.134.55-.179c.136-.039.31-.084.452-.084c.13 0 .267.03.38.06c.122.033.256.077.392.127c.274.1.583.23.869.356a29 29 0 0 1 .992.466l.066.032l.018.009l.006.003a.5.5 0 0 1-.447.895l-.005-.003l-.016-.008l-.062-.03a29 29 0 0 0-.959-.45a13 13 0 0 0-.803-.33a4 4 0 0 0-.309-.1a1 1 0 0 0-.119-.026l-.009.002c-.02.003-.073.014-.172.042a9 9 0 0 0-.492.161c-.388.137-.865.322-1.332.509a87 87 0 0 0-1.651.681l-.111.047zm-.657-.263a.5.5 0 0 1 .263-.656l.197.46l.197.459a.5.5 0 0 1-.657-.263m-1.903 3.96a.5.5 0 0 1 .707-.02l-.344.363l-.343.364a.5.5 0 0 1-.02-.707m4.57 3.387l2.763 1.036a1.5 1.5 0 0 0 1.587-.344l2.09-2.09a.5.5 0 0 1 .707.708l-2.09 2.09a2.5 2.5 0 0 1-2.645.572l-2.82-1.057l-.023-.011a3 3 0 0 1-.434-.293c-.162-.124-.352-.28-.557-.454a57 57 0 0 1-1.358-1.199a128 128 0 0 1-1.623-1.5l-.109-.102l-.038-.036l.343-.364l.344-.363l.037.035l.107.101a132 132 0 0 0 1.61 1.488c.46.417.935.84 1.333 1.178c.2.169.377.313.52.424c.132.101.215.157.256.18M6.67 17.288a.5.5 0 0 1 .703-.063l.959.8a1.5 1.5 0 0 0 .753.334l1.236.174a.5.5 0 1 1-.138.99l-1.237-.173a2.5 2.5 0 0 1-1.255-.557l-.959-.8a.5.5 0 0 1-.063-.705" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilHandshakeCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandshakeCircleFilledIcon],svg[pepicons-pencil-handshake-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilHandshakeCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M6.646 5.49a1 1 0 0 0-1.322.502l-2.163 4.803a1 1 0 0 0 .5 1.322l1.49.671a1 1 0 0 0 1.323-.5l2.163-4.804a1 1 0 0 0-.5-1.322zm-1.773 5.927a.681.681 0 1 0 .56-1.242a.681.681 0 0 0-.56 1.242m17.142.831a1 1 0 0 0 .58-1.29L20.73 6.034a1 1 0 0 0-1.29-.581l-1.527.579a1 1 0 0 0-.58 1.29l1.866 4.925a1 1 0 0 0 1.289.581zm-2.937-5.445a.681.681 0 1 0 .483 1.274a.681.681 0 0 0-.483-1.274" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17.885 7.107h.008a.5.5 0 1 0-.087-.997h-.008l-.026.003l-.096.01l-.354.034c-.297.03-.708.077-1.162.137c-.895.118-2.004.298-2.73.54c-.352.117-.724.344-1.08.604c-.361.264-.735.585-1.093.918a28 28 0 0 0-1.819 1.885c-.419.474-.516 1.23-.024 1.766c.32.346.82.784 1.468.98c.677.203 1.457.124 2.254-.468l.999-.645l.018-.011c.143.087.342.237.58.436c.26.218.542.475.805.722a34 34 0 0 1 .88.86l.055.057l.014.014l.005.005l.059.06l.075.039c.403.2.846.128 1.19.012c.358-.12.714-.324 1.017-.525a9 9 0 0 0 1.075-.849l.018-.016l.005-.005l.001-.001s-.088-.31-.432-.672l-.271.34L19 13l-2.508.957L17 13.5l-.268-.717a34 34 0 0 0-.508-.49c-.27-.254-.568-.525-.85-.76c-.273-.23-.557-.448-.794-.578c-.394-.216-.78-.056-.988.079l-1.028.664l-.014.01c-.555.416-1.011.432-1.38.321c-.4-.12-.755-.412-1.02-.7c-.083-.09-.107-.263.037-.426a27 27 0 0 1 1.752-1.815c.34-.317.682-.61 1.001-.843c.326-.238.6-.393.807-.462c.624-.208 1.645-.379 2.544-.498a41 41 0 0 1 1.478-.167l.093-.009z" clip-rule="evenodd"></svg:path><svg:path d="M17.127 13.177a35 35 0 0 0-.395-.394L17 13.5l-.508.457L19 13l.229-.66l.271-.34l-.255-.054l-.003.002l-.014.013l-.054.05a8 8 0 0 1-.895.699c-.27.18-.543.33-.783.41c-.186.063-.302.068-.369.057"></svg:path><svg:path fill-rule="evenodd" d="m8.047 8.068l-.197-.46l-.197-.46l.04-.016l.113-.048a93 93 0 0 1 1.67-.69a38 38 0 0 1 1.372-.523c.203-.072.392-.134.55-.179c.136-.039.31-.084.452-.084c.13 0 .267.03.38.06c.122.033.256.077.392.127c.274.1.583.23.869.356a29 29 0 0 1 .992.466l.066.032l.018.009l.006.003a.5.5 0 0 1-.447.895l-.005-.003l-.016-.008l-.062-.03a29 29 0 0 0-.959-.45a13 13 0 0 0-.803-.33a4 4 0 0 0-.309-.1a1 1 0 0 0-.119-.026l-.009.002c-.02.003-.073.014-.172.042a9 9 0 0 0-.492.161c-.388.137-.865.322-1.332.509a87 87 0 0 0-1.651.681l-.111.047zm-.657-.263a.5.5 0 0 1 .263-.656l.197.46l.197.459a.5.5 0 0 1-.657-.263m-1.903 3.96a.5.5 0 0 1 .707-.02l-.344.363l-.343.364a.5.5 0 0 1-.02-.707m4.57 3.387l2.763 1.036a1.5 1.5 0 0 0 1.587-.344l2.09-2.09a.5.5 0 0 1 .707.708l-2.09 2.09a2.5 2.5 0 0 1-2.645.572l-2.82-1.057l-.023-.011a3 3 0 0 1-.434-.293c-.162-.124-.352-.28-.557-.454a57 57 0 0 1-1.358-1.199a128 128 0 0 1-1.623-1.5l-.109-.102l-.038-.036l.343-.364l.344-.363l.037.035l.107.101a132 132 0 0 0 1.61 1.488c.46.417.935.84 1.333 1.178c.2.169.377.313.52.424c.132.101.215.157.256.18M6.67 17.288a.5.5 0 0 1 .703-.063l.959.8a1.5 1.5 0 0 0 .753.334l1.236.174a.5.5 0 1 1-.138.99l-1.237-.173a2.5 2.5 0 0 1-1.255-.557l-.959-.8a.5.5 0 0 1-.063-.705" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilHandshakeCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilHandshakeCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandshakeCircleOffIcon],svg[pepicons-pencil-handshake-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.646 5.49a1 1 0 0 0-1.322.502l-2.163 4.803a1 1 0 0 0 .5 1.322l1.49.671a1 1 0 0 0 1.323-.5l2.163-4.804a1 1 0 0 0-.5-1.322zm-1.773 5.927a.681.681 0 1 0 .56-1.242a.681.681 0 0 0-.56 1.242m17.142.831a1 1 0 0 0 .58-1.29L20.73 6.034a1 1 0 0 0-1.29-.581l-1.527.579a1 1 0 0 0-.58 1.29l1.866 4.925a1 1 0 0 0 1.289.581zm-2.937-5.445a.681.681 0 1 0 .483 1.274a.681.681 0 0 0-.483-1.274" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17.885 7.107h.008a.5.5 0 1 0-.087-.997h-.008l-.026.003l-.096.01l-.354.034c-.297.03-.708.077-1.162.137c-.895.118-2.004.298-2.73.54c-.352.117-.724.344-1.08.604c-.361.264-.735.585-1.093.918a28 28 0 0 0-1.819 1.885c-.419.474-.516 1.23-.024 1.766c.32.346.82.784 1.468.98c.677.203 1.457.124 2.254-.468l.999-.645l.018-.011c.143.087.342.237.58.436c.26.218.542.475.805.722a34 34 0 0 1 .88.86l.055.057l.014.014l.005.005l.059.06l.075.039c.403.2.846.128 1.19.012c.358-.12.714-.324 1.017-.525a9 9 0 0 0 1.075-.849l.018-.016l.005-.005l.001-.001s-.088-.31-.432-.672l-.271.34L19 13l-2.508.957L17 13.5l-.268-.717a34 34 0 0 0-.508-.49c-.27-.254-.568-.525-.85-.76c-.273-.23-.557-.448-.794-.578c-.394-.216-.78-.056-.988.079l-1.028.664l-.014.01c-.555.416-1.011.432-1.38.321c-.4-.12-.755-.412-1.02-.7c-.083-.09-.107-.263.037-.426a27 27 0 0 1 1.752-1.815c.34-.317.682-.61 1.001-.843c.326-.238.6-.393.807-.462c.624-.208 1.645-.379 2.544-.498a41 41 0 0 1 1.478-.167l.093-.009z" clip-rule="evenodd"></svg:path><svg:path d="M17.127 13.177a35 35 0 0 0-.395-.394L17 13.5l-.508.457L19 13l.229-.66l.271-.34l-.255-.054l-.003.002l-.014.013l-.054.05a8 8 0 0 1-.895.699c-.27.18-.543.33-.783.41c-.186.063-.302.068-.369.057"></svg:path><svg:path fill-rule="evenodd" d="m8.047 8.068l-.197-.46l-.197-.46l.04-.016l.113-.048a93 93 0 0 1 1.67-.69a38 38 0 0 1 1.372-.523c.203-.072.392-.134.55-.179c.136-.039.31-.084.452-.084c.13 0 .267.03.38.06c.122.033.256.077.392.127c.274.1.583.23.869.356a29 29 0 0 1 .992.466l.066.032l.018.009l.006.003a.5.5 0 0 1-.447.895l-.005-.003l-.016-.008l-.062-.03a29 29 0 0 0-.959-.45a13 13 0 0 0-.803-.33a4 4 0 0 0-.309-.1a1 1 0 0 0-.119-.026l-.009.002c-.02.003-.073.014-.172.042a9 9 0 0 0-.492.161c-.388.137-.865.322-1.332.509a87 87 0 0 0-1.651.681l-.111.047zm-.657-.263a.5.5 0 0 1 .263-.656l.197.46l.197.459a.5.5 0 0 1-.657-.263m-1.903 3.96a.5.5 0 0 1 .707-.02l-.344.363l-.343.364a.5.5 0 0 1-.02-.707m4.57 3.387l2.763 1.036a1.5 1.5 0 0 0 1.587-.344l2.09-2.09a.5.5 0 0 1 .707.708l-2.09 2.09a2.5 2.5 0 0 1-2.645.572l-2.82-1.057l-.023-.011a3 3 0 0 1-.434-.293c-.162-.124-.352-.28-.557-.454a57 57 0 0 1-1.358-1.199a128 128 0 0 1-1.623-1.5l-.109-.102l-.038-.036l.343-.364l.344-.363l.037.035l.107.101a132 132 0 0 0 1.61 1.488c.46.417.935.84 1.333 1.178c.2.169.377.313.52.424c.132.101.215.157.256.18M6.67 17.288a.5.5 0 0 1 .703-.063l.959.8a1.5 1.5 0 0 0 .753.334l1.236.174a.5.5 0 1 1-.138.99l-1.237-.173a2.5 2.5 0 0 1-1.255-.557l-.959-.8a.5.5 0 0 1-.063-.705" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilHandshakeCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHandshakeOffIcon],svg[pepicons-pencil-handshake-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3.646 2.49a1 1 0 0 0-1.322.502L.161 7.795a1 1 0 0 0 .5 1.322l1.49.671a1 1 0 0 0 1.323-.5l2.163-4.804a1 1 0 0 0-.5-1.322zM1.873 8.418a.681.681 0 1 0 .56-1.242a.681.681 0 0 0-.56 1.242m17.142.83a1 1 0 0 0 .58-1.29L17.73 3.034a1 1 0 0 0-1.29-.581l-1.527.579a1 1 0 0 0-.58 1.29l1.866 4.925a1 1 0 0 0 1.289.581zm-2.937-5.445a.681.681 0 1 0 .483 1.274a.681.681 0 0 0-.483-1.274" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14.885 4.107h.008a.5.5 0 1 0-.087-.997h-.008l-.026.003l-.097.01l-.353.034c-.297.03-.708.077-1.162.137c-.895.118-2.004.298-2.73.54c-.352.117-.724.344-1.08.604c-.361.264-.735.585-1.093.918A28 28 0 0 0 6.438 7.24c-.419.474-.516 1.23-.024 1.766c.32.346.82.784 1.468.98c.677.203 1.457.124 2.254-.468l.999-.645l.018-.011c.143.087.342.237.58.436c.26.218.542.475.805.722a34 34 0 0 1 .88.86l.055.057l.014.014l.005.005l.059.06l.075.039c.403.2.846.128 1.19.012c.358-.12.714-.324 1.017-.525a9 9 0 0 0 1.075-.849l.018-.016l.005-.005l.001-.001s-.088-.31-.432-.672l-.271.34L16 10l-2.508.957L14 10.5l-.268-.717a34 34 0 0 0-.508-.49c-.27-.254-.568-.525-.85-.76c-.273-.23-.557-.448-.794-.578c-.394-.216-.78-.056-.988.079l-1.028.664l-.014.01c-.555.416-1.011.432-1.38.321c-.4-.12-.755-.412-1.02-.7c-.083-.09-.107-.263.037-.426a27 27 0 0 1 1.751-1.815c.341-.317.683-.61 1.002-.843c.326-.238.6-.393.807-.462c.624-.208 1.645-.379 2.544-.498a41 41 0 0 1 1.478-.167l.093-.009z" clip-rule="evenodd"></svg:path><svg:path d="M14.127 10.177a35 35 0 0 0-.395-.394L14 10.5l-.508.457L16 10l.229-.66L16.5 9l-.255-.054l-.003.002l-.014.013l-.054.05a8 8 0 0 1-.895.699c-.27.18-.543.33-.783.41c-.186.063-.302.068-.369.057"></svg:path><svg:path fill-rule="evenodd" d="m5.047 5.068l-.197-.46l-.197-.46l.04-.016l.113-.048a93 93 0 0 1 1.67-.69a38 38 0 0 1 1.372-.523c.203-.072.392-.134.55-.179c.136-.04.31-.084.452-.084c.13 0 .267.03.38.06c.122.033.256.077.392.127c.274.1.583.23.869.356a29 29 0 0 1 .992.466l.066.032l.018.009l.006.003a.5.5 0 0 1-.447.895l-.005-.003l-.016-.008l-.062-.03a29 29 0 0 0-.959-.45a13 13 0 0 0-.803-.33a4 4 0 0 0-.309-.1a1 1 0 0 0-.119-.026l-.009.002c-.02.003-.073.014-.172.042a9 9 0 0 0-.492.161c-.388.137-.865.322-1.332.509a87 87 0 0 0-1.651.681l-.111.047zm-.657-.263a.5.5 0 0 1 .263-.656l.197.46l.197.459a.5.5 0 0 1-.657-.263m-1.903 3.96a.5.5 0 0 1 .707-.02l-.344.363l-.343.364a.5.5 0 0 1-.02-.707m4.57 3.387l2.763 1.036a1.5 1.5 0 0 0 1.587-.344l2.09-2.09a.5.5 0 0 1 .707.708l-2.09 2.09a2.5 2.5 0 0 1-2.645.572l-2.82-1.057l-.023-.011a3 3 0 0 1-.434-.292c-.162-.125-.352-.28-.557-.455a57 57 0 0 1-1.358-1.199a128 128 0 0 1-1.623-1.5l-.109-.102l-.038-.036l.343-.364l.344-.363l.037.035l.107.101a132 132 0 0 0 1.61 1.488c.46.417.935.84 1.333 1.178c.2.169.377.313.52.424c.132.101.215.157.256.18M3.67 14.288a.5.5 0 0 1 .703-.063l.959.8a1.5 1.5 0 0 0 .753.334l1.236.174a.5.5 0 1 1-.138.99l-1.237-.173a2.5 2.5 0 0 1-1.255-.557l-.959-.8a.5.5 0 0 1-.063-.705" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilHandshakeOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHashIcon],svg[pepicons-pencil-hash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3 7.75a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m0 5.5a.5.5 0 0 1 .5-.5h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M7.791 3.502a.5.5 0 0 1 .457.54l-1 12a.5.5 0 0 1-.996-.084l1-12a.5.5 0 0 1 .54-.456m5.5 0a.5.5 0 0 1 .456.54l-1 12a.5.5 0 0 1-.996-.084l1-12a.5.5 0 0 1 .54-.456"></svg:path></svg:g>`,
})
export class PepiconsPencilHashIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHashCircleIcon],svg[pepicons-pencil-hash-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6 10.75a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m0 5.5a.5.5 0 0 1 .5-.5h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M10.791 6.502a.5.5 0 0 1 .457.54l-1 12a.5.5 0 0 1-.996-.084l1-12a.5.5 0 0 1 .54-.456m5.5 0a.5.5 0 0 1 .456.54l-1 12a.5.5 0 0 1-.996-.084l1-12a.5.5 0 0 1 .54-.456"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilHashCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHashCircleFilledIcon],svg[pepicons-pencil-hash-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilHashCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6 10.75a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m0 5.5a.5.5 0 0 1 .5-.5h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M10.791 6.502a.5.5 0 0 1 .457.54l-1 12a.5.5 0 0 1-.996-.084l1-12a.5.5 0 0 1 .54-.456m5.5 0a.5.5 0 0 1 .456.54l-1 12a.5.5 0 0 1-.996-.084l1-12a.5.5 0 0 1 .54-.456"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilHashCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilHashCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHashCircleOffIcon],svg[pepicons-pencil-hash-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6 10.75a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m0 5.5a.5.5 0 0 1 .5-.5h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10.791 6.502a.5.5 0 0 1 .457.54l-1 12a.5.5 0 0 1-.996-.084l1-12a.5.5 0 0 1 .54-.456m5.5 0a.5.5 0 0 1 .456.54l-1 12a.5.5 0 0 1-.996-.084l1-12a.5.5 0 0 1 .54-.456" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilHashCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHashOffIcon],svg[pepicons-pencil-hash-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3 7.75a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m0 5.5a.5.5 0 0 1 .5-.5h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7.791 3.502a.5.5 0 0 1 .457.54l-1 12a.5.5 0 0 1-.996-.084l1-12a.5.5 0 0 1 .54-.456m5.5 0a.5.5 0 0 1 .456.54l-1 12a.5.5 0 0 1-.996-.084l1-12a.5.5 0 0 1 .54-.456" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilHashOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHeadphoneIcon],svg[pepicons-pencil-headphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17.406 14.911a.5.5 0 1 1-.95-.315c.358-1.076.544-2.236.544-3.43c0-4.725-2.972-7.912-7-7.912S3 6.44 3 11.166a10.9 10.9 0 0 0 .544 3.43a.5.5 0 1 1-.95.315A11.9 11.9 0 0 1 2 11.166c0-5.262 3.403-8.912 8-8.912s8 3.65 8 8.912a11.9 11.9 0 0 1-.594 3.745"></svg:path><svg:path d="M5.977 17.034a3 3 0 0 1-2.942-3.04v-.022a2.98 2.98 0 0 1 3.035-2.937a1 1 0 0 1 .98 1.013l-.054 4a1 1 0 0 1-1.019.986M14.089 11a3 3 0 0 1 2.942 3.04v.022A2.98 2.98 0 0 1 14.013 17h-.016a1 1 0 0 1-.981-1.014l.054-4A1 1 0 0 1 14.089 11"></svg:path></svg:g>`,
})
export class PepiconsPencilHeadphoneIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHeadphoneCircleIcon],svg[pepicons-pencil-headphone-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20.406 17.911a.5.5 0 1 1-.95-.315c.358-1.076.544-2.236.544-3.43c0-4.725-2.971-7.912-7-7.912S6 9.44 6 14.166a10.9 10.9 0 0 0 .544 3.43a.5.5 0 1 1-.95.315A11.9 11.9 0 0 1 5 14.166c0-5.262 3.403-8.912 8-8.912s8 3.65 8 8.912a11.9 11.9 0 0 1-.594 3.745"></svg:path><svg:path d="M8.977 20.034a3 3 0 0 1-2.942-3.04v-.022a2.98 2.98 0 0 1 3.018-2.938h.017a1 1 0 0 1 .98 1.014l-.054 4a1 1 0 0 1-1.019.986M17.089 14a3 3 0 0 1 2.942 3.04v.022A2.98 2.98 0 0 1 17.013 20h-.016a1 1 0 0 1-.981-1.014l.054-4A1 1 0 0 1 17.089 14"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilHeadphoneCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHeadphoneCircleFilledIcon],svg[pepicons-pencil-headphone-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilHeadphoneCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M20.406 17.911a.5.5 0 1 1-.95-.315c.358-1.076.544-2.236.544-3.43c0-4.725-2.971-7.912-7-7.912S6 9.44 6 14.166a10.9 10.9 0 0 0 .544 3.43a.5.5 0 1 1-.95.315A11.9 11.9 0 0 1 5 14.166c0-5.262 3.403-8.912 8-8.912s8 3.65 8 8.912a11.9 11.9 0 0 1-.594 3.745"></svg:path><svg:path d="M8.977 20.034a3 3 0 0 1-2.942-3.04v-.022a2.98 2.98 0 0 1 3.018-2.938h.017a1 1 0 0 1 .98 1.014l-.054 4a1 1 0 0 1-1.019.986M17.089 14a3 3 0 0 1 2.942 3.04v.022A2.98 2.98 0 0 1 17.013 20h-.016a1 1 0 0 1-.981-1.014l.054-4A1 1 0 0 1 17.089 14"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilHeadphoneCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilHeadphoneCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHeadphoneCircleOffIcon],svg[pepicons-pencil-headphone-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20.406 17.911a.5.5 0 1 1-.95-.315c.358-1.076.544-2.236.544-3.43c0-4.725-2.971-7.912-7-7.912S6 9.44 6 14.166a10.9 10.9 0 0 0 .544 3.43a.5.5 0 1 1-.95.315A11.9 11.9 0 0 1 5 14.166c0-5.262 3.403-8.912 8-8.912s8 3.65 8 8.912a11.9 11.9 0 0 1-.594 3.745"></svg:path><svg:path d="M8.977 20.034a3 3 0 0 1-2.942-3.04v-.022a2.98 2.98 0 0 1 3.018-2.938h.017a1 1 0 0 1 .98 1.014l-.054 4a1 1 0 0 1-1.019.986M17.089 14a3 3 0 0 1 2.942 3.04v.022A2.98 2.98 0 0 1 17.013 20h-.016a1 1 0 0 1-.981-1.014l.054-4A1 1 0 0 1 17.089 14"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilHeadphoneCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHeadphoneOffIcon],svg[pepicons-pencil-headphone-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17.406 14.911a.5.5 0 1 1-.95-.315c.358-1.076.544-2.236.544-3.43c0-4.725-2.972-7.912-7-7.912S3 6.44 3 11.166a10.9 10.9 0 0 0 .544 3.43a.5.5 0 1 1-.95.315A11.9 11.9 0 0 1 2 11.166c0-5.262 3.403-8.912 8-8.912s8 3.65 8 8.912a11.9 11.9 0 0 1-.594 3.745"></svg:path><svg:path d="M5.977 17.034a3 3 0 0 1-2.942-3.04v-.022a2.98 2.98 0 0 1 3.035-2.937a1 1 0 0 1 .98 1.013l-.054 4a1 1 0 0 1-1.019.986M14.089 11a3 3 0 0 1 2.942 3.04v.022A2.98 2.98 0 0 1 14.013 17h-.016a1 1 0 0 1-.981-1.014l.054-4A1 1 0 0 1 14.089 11"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilHeadphoneOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHeartIcon],svg[pepicons-pencil-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.618 4.618C4.185 4.966 3 6.07 3 7.996c0 2.564 2.169 5.073 7 7.448c4.831-2.375 7-4.884 7-7.448c0-1.925-1.185-3.03-2.618-3.378c-1.471-.358-3.122.103-3.979 1.27a.5.5 0 0 1-.806 0C8.74 4.721 7.089 4.26 5.618 4.618m4.382.21C8.81 3.635 6.968 3.26 5.382 3.645C3.565 4.088 2 5.546 2 7.996c0 3.24 2.766 6.032 7.783 8.454a.5.5 0 0 0 .434 0C15.234 14.028 18 11.237 18 7.996c0-2.45-1.565-3.908-3.382-4.35c-1.586-.385-3.427-.01-4.618 1.181" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPencilHeartIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHeartCircleIcon],svg[pepicons-pencil-heart-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.618 7.618C7.185 7.966 6 9.07 6 10.996c0 2.564 2.169 5.073 7 7.448c4.831-2.375 7-4.884 7-7.448c0-1.925-1.185-3.03-2.618-3.378c-1.471-.358-3.122.103-3.979 1.27a.5.5 0 0 1-.806 0c-.857-1.167-2.508-1.628-3.979-1.27m4.382.21C11.81 6.635 9.968 6.26 8.382 6.645C6.565 7.088 5 8.546 5 10.996c0 3.24 2.766 6.032 7.783 8.454a.5.5 0 0 0 .434 0C18.234 17.028 21 14.237 21 10.996c0-2.45-1.565-3.908-3.382-4.35c-1.586-.385-3.427-.01-4.618 1.181"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilHeartCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHeartCircleFilledIcon],svg[pepicons-pencil-heart-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilHeartCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M8.618 7.618C7.185 7.966 6 9.07 6 10.996c0 2.564 2.169 5.073 7 7.448c4.831-2.375 7-4.884 7-7.448c0-1.925-1.185-3.03-2.618-3.378c-1.471-.358-3.122.103-3.979 1.27a.5.5 0 0 1-.806 0c-.857-1.167-2.508-1.628-3.979-1.27m4.382.21C11.81 6.635 9.968 6.26 8.382 6.645C6.565 7.088 5 8.546 5 10.996c0 3.24 2.766 6.032 7.783 8.454a.5.5 0 0 0 .434 0C18.234 17.028 21 14.237 21 10.996c0-2.45-1.565-3.908-3.382-4.35c-1.586-.385-3.427-.01-4.618 1.181" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilHeartCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilHeartCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHeartCircleOffIcon],svg[pepicons-pencil-heart-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.618 7.618C7.185 7.966 6 9.07 6 10.996c0 2.564 2.169 5.073 7 7.448c4.831-2.375 7-4.884 7-7.448c0-1.925-1.185-3.03-2.618-3.378c-1.471-.358-3.122.103-3.979 1.27a.5.5 0 0 1-.806 0c-.857-1.167-2.508-1.628-3.979-1.27m4.382.21C11.81 6.635 9.968 6.26 8.382 6.645C6.565 7.088 5 8.546 5 10.996c0 3.24 2.766 6.032 7.783 8.454a.5.5 0 0 0 .434 0C18.234 17.028 21 14.237 21 10.996c0-2.45-1.565-3.908-3.382-4.35c-1.586-.385-3.427-.01-4.618 1.181" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilHeartCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHeartFilledIcon],svg[pepicons-pencil-heart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 4.543c-1.25-.98-2.965-1.245-4.432-.895C3.678 4.1 2 5.621 2 8.163c0 3.326 2.88 6.016 7.571 8.24a1 1 0 0 0 .857 0C15.12 14.18 18 11.49 18 8.164c0-2.542-1.678-4.064-3.568-4.515c-1.467-.35-3.183-.084-4.432.895" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPencilHeartFilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHeartFilledCircleIcon],svg[pepicons-pencil-heart-filled-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 7.543c-1.25-.98-2.965-1.245-4.432-.895C6.678 7.1 5 8.621 5 11.163c0 3.326 2.88 6.016 7.571 8.24a1 1 0 0 0 .857 0C18.12 17.18 21 14.49 21 11.164c0-2.542-1.678-4.064-3.568-4.515c-1.467-.35-3.183-.084-4.432.895"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilHeartFilledCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHeartFilledCircleFilledIcon],svg[pepicons-pencil-heart-filled-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilHeartFilledCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M13 7.543c-1.25-.98-2.965-1.245-4.432-.895C6.678 7.1 5 8.621 5 11.163c0 3.326 2.88 6.016 7.571 8.24a1 1 0 0 0 .857 0C18.12 17.18 21 14.49 21 11.164c0-2.542-1.678-4.064-3.568-4.515c-1.467-.35-3.183-.084-4.432.895" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilHeartFilledCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilHeartFilledCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHeartFilledCircleOffIcon],svg[pepicons-pencil-heart-filled-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 7.543c-1.25-.98-2.965-1.245-4.432-.895C6.678 7.1 5 8.621 5 11.163c0 3.326 2.88 6.016 7.571 8.24a1 1 0 0 0 .857 0C18.12 17.18 21 14.49 21 11.164c0-2.542-1.678-4.064-3.568-4.515c-1.467-.35-3.183-.084-4.432.895" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilHeartFilledCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHeartFilledOffIcon],svg[pepicons-pencil-heart-filled-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 4.543c-1.25-.98-2.965-1.245-4.432-.895C3.678 4.1 2 5.621 2 8.163c0 3.326 2.88 6.016 7.571 8.24a1 1 0 0 0 .857 0C15.12 14.18 18 11.49 18 8.164c0-2.542-1.678-4.064-3.568-4.515c-1.467-.35-3.183-.084-4.432.895" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilHeartFilledOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHeartOffIcon],svg[pepicons-pencil-heart-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.618 4.618C4.185 4.966 3 6.07 3 7.996c0 2.564 2.169 5.073 7 7.448c4.831-2.375 7-4.884 7-7.448c0-1.925-1.185-3.03-2.618-3.378c-1.471-.358-3.122.103-3.979 1.27a.5.5 0 0 1-.806 0C8.74 4.721 7.089 4.26 5.618 4.618m4.382.21C8.81 3.635 6.968 3.26 5.382 3.645C3.565 4.088 2 5.546 2 7.996c0 3.24 2.766 6.032 7.783 8.454a.5.5 0 0 0 .434 0C15.234 14.028 18 11.237 18 7.996c0-2.45-1.565-3.908-3.382-4.35c-1.586-.385-3.427-.01-4.618 1.181" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilHeartOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHospitalIcon],svg[pepicons-pencil-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.25 5.25a1 1 0 0 1 1-1h3.5a1 1 0 1 1 0 2h-3.5a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10 8a1 1 0 0 1-1-1V3.5a1 1 0 0 1 2 0V7a1 1 0 0 1-1 1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6 1.5a.5.5 0 0 0-.5.5v4.824a1 1 0 0 1-1 1H2a.5.5 0 0 0-.5.5V18a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5V8.324a.5.5 0 0 0-.5-.5h-2.5a1 1 0 0 1-1-1V2a.5.5 0 0 0-.5-.5zM4.5 2A1.5 1.5 0 0 1 6 .5h8A1.5 1.5 0 0 1 15.5 2v4.824H18a1.5 1.5 0 0 1 1.5 1.5V18a1.5 1.5 0 0 1-1.5 1.5H2A1.5 1.5 0 0 1 .5 18V8.324a1.5 1.5 0 0 1 1.5-1.5h2.5z" clip-rule="evenodd"></svg:path><svg:path d="M3.5 10.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M3.25 10.5c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path d="M8.5 10.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M8.25 10.5c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path d="M13.5 10.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M13.25 10.5c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path d="M3.5 15a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M3.25 15c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path d="M8.5 15a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M8.25 15c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path d="M13.5 15a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M13.25 15c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilHospitalIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHospitalCircleIcon],svg[pepicons-pencil-hospital-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10.25 8.25a1 1 0 0 1 1-1h3.5a1 1 0 1 1 0 2h-3.5a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 11a1 1 0 0 1-1-1V6.5a1 1 0 0 1 2 0V10a1 1 0 0 1-1 1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9 4.5a.5.5 0 0 0-.5.5v4.824a1 1 0 0 1-1 1H5a.5.5 0 0 0-.5.5V21a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5v-9.676a.5.5 0 0 0-.5-.5h-2.5a1 1 0 0 1-1-1V5a.5.5 0 0 0-.5-.5zM7.5 5A1.5 1.5 0 0 1 9 3.5h8A1.5 1.5 0 0 1 18.5 5v4.824H21a1.5 1.5 0 0 1 1.5 1.5V21a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 21v-9.676a1.5 1.5 0 0 1 1.5-1.5h2.5z" clip-rule="evenodd"></svg:path><svg:path d="M6.5 13.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M6.25 13.5c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path d="M11.5 13.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M11.25 13.5c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path d="M16.5 13.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M16.25 13.5c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path d="M6.5 18a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M6.25 18c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path d="M11.5 18a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M11.25 18c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path d="M16.5 18a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M16.25 18c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilHospitalCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHospitalCircleFilledIcon],svg[pepicons-pencil-hospital-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilHospitalCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M10.25 8.25a1 1 0 0 1 1-1h3.5a1 1 0 1 1 0 2h-3.5a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 11a1 1 0 0 1-1-1V6.5a1 1 0 0 1 2 0V10a1 1 0 0 1-1 1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9 4.5a.5.5 0 0 0-.5.5v4.824a1 1 0 0 1-1 1H5a.5.5 0 0 0-.5.5V21a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5v-9.676a.5.5 0 0 0-.5-.5h-2.5a1 1 0 0 1-1-1V5a.5.5 0 0 0-.5-.5zM7.5 5A1.5 1.5 0 0 1 9 3.5h8A1.5 1.5 0 0 1 18.5 5v4.824H21a1.5 1.5 0 0 1 1.5 1.5V21a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 21v-9.676a1.5 1.5 0 0 1 1.5-1.5h2.5z" clip-rule="evenodd"></svg:path><svg:path d="M6.5 13.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M6.25 13.5c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path d="M11.5 13.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M11.25 13.5c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path d="M16.5 13.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M16.25 13.5c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path d="M6.5 18a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M6.25 18c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path d="M11.5 18a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M11.25 18c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path d="M16.5 18a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M16.25 18c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilHospitalCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilHospitalCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHospitalCircleOffIcon],svg[pepicons-pencil-hospital-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10.25 8.25a1 1 0 0 1 1-1h3.5a1 1 0 1 1 0 2h-3.5a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 11a1 1 0 0 1-1-1V6.5a1 1 0 0 1 2 0V10a1 1 0 0 1-1 1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9 4.5a.5.5 0 0 0-.5.5v4.824a1 1 0 0 1-1 1H5a.5.5 0 0 0-.5.5V21a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5v-9.676a.5.5 0 0 0-.5-.5h-2.5a1 1 0 0 1-1-1V5a.5.5 0 0 0-.5-.5zM7.5 5A1.5 1.5 0 0 1 9 3.5h8A1.5 1.5 0 0 1 18.5 5v4.824H21a1.5 1.5 0 0 1 1.5 1.5V21a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 21v-9.676a1.5 1.5 0 0 1 1.5-1.5h2.5z" clip-rule="evenodd"></svg:path><svg:path d="M6.5 13.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M6.25 13.5c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path d="M11.5 13.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M11.25 13.5c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path d="M16.5 13.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M16.25 13.5c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path d="M6.5 18a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M6.25 18c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path d="M11.5 18a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M11.25 18c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path d="M16.5 18a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M16.25 18c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilHospitalCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHospitalOffIcon],svg[pepicons-pencil-hospital-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.25 5.25a1 1 0 0 1 1-1h3.5a1 1 0 1 1 0 2h-3.5a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10 8a1 1 0 0 1-1-1V3.5a1 1 0 0 1 2 0V7a1 1 0 0 1-1 1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6 1.5a.5.5 0 0 0-.5.5v4.824a1 1 0 0 1-1 1H2a.5.5 0 0 0-.5.5V18a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5V8.324a.5.5 0 0 0-.5-.5h-2.5a1 1 0 0 1-1-1V2a.5.5 0 0 0-.5-.5zM4.5 2A1.5 1.5 0 0 1 6 .5h8A1.5 1.5 0 0 1 15.5 2v4.824H18a1.5 1.5 0 0 1 1.5 1.5V18a1.5 1.5 0 0 1-1.5 1.5H2A1.5 1.5 0 0 1 .5 18V8.324a1.5 1.5 0 0 1 1.5-1.5h2.5z" clip-rule="evenodd"></svg:path><svg:path d="M3.5 10.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M3.25 10.5c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path d="M8.5 10.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M8.25 10.5c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path d="M13.5 10.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M13.25 10.5c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path d="M3.5 15a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M3.25 15c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path d="M8.5 15a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M8.25 15c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path d="M13.5 15a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M13.25 15c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilHospitalOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHourglassIcon],svg[pepicons-pencil-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.96 3H7.04c-.3 0-.45.227-.428.42c.114.993.328 2.133.686 2.862c.477.973 1.628 2.066 2.497 2.789a.31.31 0 0 0 .41 0c.87-.723 2.02-1.816 2.497-2.79c.358-.728.572-1.868.687-2.861c.022-.193-.129-.42-.428-.42M7.04 2c-.844 0-1.519.696-1.422 1.534c.116 1.005.343 2.294.782 3.188c.581 1.184 1.888 2.396 2.756 3.118c.494.41 1.194.41 1.688 0c.868-.722 2.175-1.934 2.756-3.118c.439-.894.666-2.183.782-3.188C14.479 2.696 13.804 2 12.96 2z"></svg:path><svg:path d="M7.04 17h5.92c.3 0 .45-.227.428-.42c-.114-.993-.328-2.133-.686-2.861c-.477-.974-1.628-2.067-2.497-2.79a.31.31 0 0 0-.41 0c-.87.723-2.02 1.816-2.497 2.79c-.358.728-.572 1.868-.687 2.862c-.022.192.129.419.428.419m5.92 1c.844 0 1.519-.696 1.422-1.534c-.116-1.006-.343-2.294-.782-3.188c-.581-1.184-1.888-2.396-2.756-3.118a1.31 1.31 0 0 0-1.688 0c-.868.722-2.175 1.934-2.756 3.118c-.439.894-.666 2.182-.782 3.188C5.521 17.304 6.196 18 7.04 18zM4 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M4 17.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"></svg:path></svg:g>`,
})
export class PepiconsPencilHourglassIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHourglassCircleIcon],svg[pepicons-pencil-hourglass-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M15.96 6h-5.92c-.3 0-.45.227-.428.42c.114.993.328 2.133.686 2.862c.477.973 1.628 2.066 2.497 2.789a.31.31 0 0 0 .41 0c.87-.723 2.02-1.816 2.497-2.79c.358-.728.572-1.868.687-2.861c.022-.193-.129-.42-.428-.42m-5.92-1c-.844 0-1.519.696-1.422 1.534c.116 1.005.343 2.294.782 3.188c.581 1.184 1.888 2.396 2.756 3.118c.494.41 1.194.41 1.688 0c.868-.722 2.175-1.934 2.756-3.118c.439-.894.666-2.183.782-3.188C17.479 5.696 16.804 5 15.96 5z"></svg:path><svg:path d="M10.04 20h5.92c.3 0 .45-.227.428-.42c-.114-.993-.328-2.133-.686-2.861c-.477-.974-1.628-2.068-2.497-2.79a.31.31 0 0 0-.41 0c-.87.723-2.02 1.816-2.497 2.79c-.358.728-.572 1.868-.687 2.861c-.022.193.129.42.428.42m5.92 1c.844 0 1.519-.696 1.422-1.534c-.116-1.006-.343-2.294-.782-3.188c-.581-1.184-1.888-2.396-2.756-3.118a1.31 1.31 0 0 0-1.688 0c-.868.722-2.175 1.934-2.756 3.118c-.439.894-.666 2.183-.782 3.188c-.097.838.578 1.534 1.421 1.534zM7 5.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M7 20.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilHourglassCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHourglassCircleFilledIcon],svg[pepicons-pencil-hourglass-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilHourglassCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M15.96 6h-5.92c-.3 0-.45.227-.428.42c.114.993.328 2.133.686 2.862c.477.973 1.628 2.066 2.497 2.789a.31.31 0 0 0 .41 0c.87-.723 2.02-1.816 2.497-2.79c.358-.728.572-1.868.687-2.861c.022-.193-.129-.42-.428-.42m-5.92-1c-.844 0-1.519.696-1.422 1.534c.116 1.005.343 2.294.782 3.188c.581 1.184 1.888 2.396 2.756 3.118c.494.41 1.194.41 1.688 0c.868-.722 2.175-1.934 2.756-3.118c.439-.894.666-2.183.782-3.188C17.479 5.696 16.804 5 15.96 5z"></svg:path><svg:path d="M10.04 20h5.92c.3 0 .45-.227.428-.42c-.114-.993-.328-2.133-.686-2.861c-.477-.974-1.628-2.068-2.497-2.79a.31.31 0 0 0-.41 0c-.87.723-2.02 1.816-2.497 2.79c-.358.728-.572 1.868-.687 2.861c-.022.193.129.42.428.42m5.92 1c.844 0 1.519-.696 1.422-1.534c-.116-1.006-.343-2.294-.782-3.188c-.581-1.184-1.888-2.396-2.756-3.118a1.31 1.31 0 0 0-1.688 0c-.868.722-2.175 1.934-2.756 3.118c-.439.894-.666 2.183-.782 3.188c-.097.838.578 1.534 1.421 1.534zM7 5.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M7 20.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilHourglassCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilHourglassCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHourglassCircleOffIcon],svg[pepicons-pencil-hourglass-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M15.96 6h-5.92c-.3 0-.45.227-.428.42c.114.993.328 2.133.686 2.862c.477.973 1.628 2.066 2.497 2.789a.31.31 0 0 0 .41 0c.87-.723 2.02-1.816 2.497-2.79c.358-.728.572-1.868.687-2.861c.022-.193-.129-.42-.428-.42m-5.92-1c-.844 0-1.519.696-1.422 1.534c.116 1.005.343 2.294.782 3.188c.581 1.184 1.888 2.396 2.756 3.118c.494.41 1.194.41 1.688 0c.868-.722 2.175-1.934 2.756-3.118c.439-.894.666-2.183.782-3.188C17.479 5.696 16.804 5 15.96 5z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10.04 20h5.92c.3 0 .45-.227.428-.42c-.114-.993-.328-2.133-.686-2.861c-.477-.974-1.628-2.068-2.497-2.79a.31.31 0 0 0-.41 0c-.87.723-2.02 1.816-2.497 2.79c-.358.728-.572 1.868-.687 2.861c-.022.193.129.42.428.42m5.92 1c.844 0 1.519-.696 1.422-1.534c-.116-1.006-.343-2.294-.782-3.188c-.581-1.184-1.888-2.396-2.756-3.118a1.31 1.31 0 0 0-1.688 0c-.868.722-2.175 1.934-2.756 3.118c-.439.894-.666 2.183-.782 3.188c-.097.838.578 1.534 1.421 1.534zM7 5.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7 20.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilHourglassCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHourglassOffIcon],svg[pepicons-pencil-hourglass-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12.96 3H7.04c-.3 0-.45.227-.428.42c.114.993.328 2.133.686 2.862c.477.973 1.628 2.066 2.497 2.789a.31.31 0 0 0 .41 0c.87-.723 2.02-1.816 2.497-2.79c.358-.728.572-1.868.687-2.861c.022-.193-.129-.42-.428-.42M7.04 2c-.844 0-1.519.696-1.422 1.534c.116 1.005.343 2.294.782 3.188c.581 1.184 1.888 2.396 2.756 3.118c.494.41 1.194.41 1.688 0c.868-.722 2.175-1.934 2.756-3.118c.439-.894.666-2.183.782-3.188C14.479 2.696 13.804 2 12.96 2z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7.04 17h5.92c.3 0 .45-.227.428-.42c-.114-.993-.328-2.133-.686-2.861c-.477-.974-1.628-2.067-2.497-2.79a.31.31 0 0 0-.41 0c-.87.723-2.02 1.816-2.497 2.79c-.358.728-.572 1.868-.687 2.862c-.022.192.129.419.428.419m5.92 1c.844 0 1.519-.696 1.422-1.534c-.116-1.006-.343-2.294-.782-3.188c-.581-1.184-1.888-2.396-2.756-3.118a1.31 1.31 0 0 0-1.688 0c-.868.722-2.175 1.934-2.756 3.118c-.439.894-.666 2.182-.782 3.188C5.521 17.304 6.196 18 7.04 18zM4 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4 17.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilHourglassOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHouseIcon],svg[pepicons-pencil-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M1 10h1.389v7a.5.5 0 0 0 .5.5H16.11a.5.5 0 0 0 .5-.5v-7H18a.5.5 0 0 0 .33-.875l-8.5-7.5a.5.5 0 0 0-.66 0l-8.5 7.5A.5.5 0 0 0 1 10m1.889-1h-.567L9.5 2.667L16.678 9h-.567a.5.5 0 0 0-.5.5v7H3.39v-7a.5.5 0 0 0-.5-.5"></svg:path><svg:path d="M10.708 11.5h-2.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1m-2.5 5v-4h2.5v4z"></svg:path></svg:g>`,
})
export class PepiconsPencilHouseIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHouseCircleIcon],svg[pepicons-pencil-house-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4 13h1.389v7a.5.5 0 0 0 .5.5H19.11a.5.5 0 0 0 .5-.5v-7H21a.5.5 0 0 0 .33-.875l-8.5-7.5a.5.5 0 0 0-.66 0l-8.5 7.5A.5.5 0 0 0 4 13m1.889-1h-.567L12.5 5.667L19.678 12h-.567a.5.5 0 0 0-.5.5v7H6.39v-7a.5.5 0 0 0-.5-.5"></svg:path><svg:path d="M13.708 14.5h-2.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1m-2.5 5v-4h2.5v4z"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilHouseCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHouseCircleFilledIcon],svg[pepicons-pencil-house-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilHouseCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4 13h1.389v7a.5.5 0 0 0 .5.5H19.11a.5.5 0 0 0 .5-.5v-7H21a.5.5 0 0 0 .33-.875l-8.5-7.5a.5.5 0 0 0-.66 0l-8.5 7.5A.5.5 0 0 0 4 13m1.889-1h-.567L12.5 5.667L19.678 12h-.567a.5.5 0 0 0-.5.5v7H6.39v-7a.5.5 0 0 0-.5-.5"></svg:path><svg:path d="M13.708 14.5h-2.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1m-2.5 5v-4h2.5v4z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilHouseCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilHouseCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHouseCircleOffIcon],svg[pepicons-pencil-house-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4 13h1.389v7a.5.5 0 0 0 .5.5H19.11a.5.5 0 0 0 .5-.5v-7H21a.5.5 0 0 0 .33-.875l-8.5-7.5a.5.5 0 0 0-.66 0l-8.5 7.5A.5.5 0 0 0 4 13m1.889-1h-.567L12.5 5.667L19.678 12h-.567a.5.5 0 0 0-.5.5v7H6.39v-7a.5.5 0 0 0-.5-.5"></svg:path><svg:path d="M13.708 14.5h-2.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1m-2.5 5v-4h2.5v4z"></svg:path></svg:g><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilHouseCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHouseOffIcon],svg[pepicons-pencil-house-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M1 10h1.389v7a.5.5 0 0 0 .5.5H16.11a.5.5 0 0 0 .5-.5v-7H18a.5.5 0 0 0 .33-.875l-8.5-7.5a.5.5 0 0 0-.66 0l-8.5 7.5A.5.5 0 0 0 1 10m1.889-1h-.567L9.5 2.667L16.678 9h-.567a.5.5 0 0 0-.5.5v7H3.39v-7a.5.5 0 0 0-.5-.5"></svg:path><svg:path d="M10.708 11.5h-2.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1m-2.5 5v-4h2.5v4z"></svg:path></svg:g><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilHouseOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilIdentificationIcon],svg[pepicons-pencil-identification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M4 5a1.5 1.5 0 0 0-1.5 1.5v7A1.5 1.5 0 0 0 4 15h12a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 16 5zM1.5 6.5A2.5 2.5 0 0 1 4 4h12a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 16 16H4a2.5 2.5 0 0 1-2.5-2.5z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.182 7.818a.5.5 0 0 1 .5-.5h2.727a.5.5 0 0 1 0 1H9.682a.5.5 0 0 1-.5-.5m0 4.092a.5.5 0 0 1 .5-.5h5.454a.5.5 0 1 1 0 1H9.682a.5.5 0 0 1-.5-.5m0-2.728a.5.5 0 0 1 .5-.5h5.454a.5.5 0 0 1 0 1H9.682a.5.5 0 0 1-.5-.5m0 1.364a.5.5 0 0 1 .5-.5h5.454a.5.5 0 1 1 0 1H9.682a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path d="M7.773 9.182a1.364 1.364 0 1 1-2.728 0a1.364 1.364 0 0 1 2.728 0"></svg:path><svg:path d="M8.045 11.776c0 .688-.732.622-1.636.622s-1.636.066-1.636-.623c0-.688.732-1.557 1.636-1.557s1.636.87 1.636 1.557"></svg:path></svg:g>`,
})
export class PepiconsPencilIdentificationIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilIdentificationCircleIcon],svg[pepicons-pencil-identification-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7 8a1.5 1.5 0 0 0-1.5 1.5v7A1.5 1.5 0 0 0 7 18h12a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 19 8zM4.5 9.5A2.5 2.5 0 0 1 7 7h12a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 19 19H7a2.5 2.5 0 0 1-2.5-2.5z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.182 10.818a.5.5 0 0 1 .5-.5h2.727a.5.5 0 0 1 0 1h-2.727a.5.5 0 0 1-.5-.5m0 4.092a.5.5 0 0 1 .5-.5h5.454a.5.5 0 1 1 0 1h-5.454a.5.5 0 0 1-.5-.5m0-2.728a.5.5 0 0 1 .5-.5h5.454a.5.5 0 0 1 0 1h-5.454a.5.5 0 0 1-.5-.5m0 1.364a.5.5 0 0 1 .5-.5h5.454a.5.5 0 1 1 0 1h-5.454a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path d="M10.773 12.182a1.364 1.364 0 1 1-2.728 0a1.364 1.364 0 0 1 2.728 0"></svg:path><svg:path d="M11.045 14.776c0 .688-.732.622-1.636.622s-1.636.066-1.636-.623c0-.688.732-1.557 1.636-1.557s1.636.87 1.636 1.557"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilIdentificationCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilIdentificationCircleFilledIcon],svg[pepicons-pencil-identification-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilIdentificationCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M7 8a1.5 1.5 0 0 0-1.5 1.5v7A1.5 1.5 0 0 0 7 18h12a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 19 8zM4.5 9.5A2.5 2.5 0 0 1 7 7h12a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 19 19H7a2.5 2.5 0 0 1-2.5-2.5z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.182 10.818a.5.5 0 0 1 .5-.5h2.727a.5.5 0 0 1 0 1h-2.727a.5.5 0 0 1-.5-.5m0 4.092a.5.5 0 0 1 .5-.5h5.454a.5.5 0 1 1 0 1h-5.454a.5.5 0 0 1-.5-.5m0-2.728a.5.5 0 0 1 .5-.5h5.454a.5.5 0 0 1 0 1h-5.454a.5.5 0 0 1-.5-.5m0 1.364a.5.5 0 0 1 .5-.5h5.454a.5.5 0 1 1 0 1h-5.454a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path d="M10.773 12.182a1.364 1.364 0 1 1-2.728 0a1.364 1.364 0 0 1 2.728 0"></svg:path><svg:path d="M11.045 14.776c0 .688-.732.622-1.636.622s-1.636.066-1.636-.623c0-.688.732-1.557 1.636-1.557s1.636.87 1.636 1.557"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilIdentificationCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilIdentificationCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilIdentificationCircleOffIcon],svg[pepicons-pencil-identification-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7 8a1.5 1.5 0 0 0-1.5 1.5v7A1.5 1.5 0 0 0 7 18h12a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 19 8zM4.5 9.5A2.5 2.5 0 0 1 7 7h12a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 19 19H7a2.5 2.5 0 0 1-2.5-2.5z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.182 10.818a.5.5 0 0 1 .5-.5h2.727a.5.5 0 0 1 0 1h-2.727a.5.5 0 0 1-.5-.5m0 4.092a.5.5 0 0 1 .5-.5h5.454a.5.5 0 1 1 0 1h-5.454a.5.5 0 0 1-.5-.5m0-2.728a.5.5 0 0 1 .5-.5h5.454a.5.5 0 0 1 0 1h-5.454a.5.5 0 0 1-.5-.5m0 1.364a.5.5 0 0 1 .5-.5h5.454a.5.5 0 1 1 0 1h-5.454a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path d="M10.773 12.182a1.364 1.364 0 1 1-2.728 0a1.364 1.364 0 0 1 2.728 0"></svg:path><svg:path d="M11.045 14.776c0 .688-.732.622-1.636.622s-1.636.066-1.636-.623c0-.688.732-1.557 1.636-1.557s1.636.87 1.636 1.557M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilIdentificationCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilIdentificationOffIcon],svg[pepicons-pencil-identification-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M4 5a1.5 1.5 0 0 0-1.5 1.5v7A1.5 1.5 0 0 0 4 15h12a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 16 5zM1.5 6.5A2.5 2.5 0 0 1 4 4h12a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 16 16H4a2.5 2.5 0 0 1-2.5-2.5z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.182 7.818a.5.5 0 0 1 .5-.5h2.727a.5.5 0 0 1 0 1H9.682a.5.5 0 0 1-.5-.5m0 4.092a.5.5 0 0 1 .5-.5h5.454a.5.5 0 1 1 0 1H9.682a.5.5 0 0 1-.5-.5m0-2.728a.5.5 0 0 1 .5-.5h5.454a.5.5 0 0 1 0 1H9.682a.5.5 0 0 1-.5-.5m0 1.364a.5.5 0 0 1 .5-.5h5.454a.5.5 0 1 1 0 1H9.682a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path d="M7.773 9.182a1.364 1.364 0 1 1-2.728 0a1.364 1.364 0 0 1 2.728 0"></svg:path><svg:path d="M8.045 11.776c0 .688-.732.622-1.636.622s-1.636.066-1.636-.623c0-.688.732-1.557 1.636-1.557s1.636.87 1.636 1.557M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilIdentificationOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilInfoIcon],svg[pepicons-pencil-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10.25 7.75a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path d="M11.5 4.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path></svg:g>`,
})
export class PepiconsPencilInfoIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilInfoCircleIcon],svg[pepicons-pencil-info-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13.25 10.75a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path d="M14.5 7.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilInfoCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilInfoCircleFilledIcon],svg[pepicons-pencil-info-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilInfoCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M13.25 10.75a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path d="M14.5 7.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilInfoCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilInfoCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilInfoCircleOffIcon],svg[pepicons-pencil-info-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13.25 10.75a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path d="M14.5 7.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilInfoCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilInfoOffIcon],svg[pepicons-pencil-info-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10.25 7.75a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path d="M11.5 4.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilInfoOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilInternetIcon],svg[pepicons-pencil-internet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M1.5 10a8.5 8.5 0 1 0 17 0a8.5 8.5 0 0 0-17 0m16 0a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.5 10c0 4.396 1.442 8 3.5 8s3.5-3.604 3.5-8s-1.442-8-3.5-8s-3.5 3.604-3.5 8m6 0c0 3.889-1.245 7-2.5 7s-2.5-3.111-2.5-7S8.745 3 10 3s2.5 3.111 2.5 7" clip-rule="evenodd"></svg:path><svg:path d="m3.735 5.312l.67-.742q.16.144.343.281c1.318.988 3.398 1.59 5.665 1.59c1.933 0 3.737-.437 5.055-1.19a5.6 5.6 0 0 0 .857-.597l.65.76q-.448.383-1.01.704c-1.477.845-3.452 1.323-5.552 1.323c-2.47 0-4.762-.663-6.265-1.79a6 6 0 0 1-.413-.34m0 9.389l.67.74q.16-.145.343-.28c1.318-.988 3.398-1.59 5.665-1.59c1.933 0 3.737.436 5.055 1.19q.482.277.857.596l.65-.76a6.6 6.6 0 0 0-1.01-.704c-1.477-.844-3.452-1.322-5.552-1.322c-2.47 0-4.762.663-6.265 1.789q-.22.165-.413.34M2 10.5v-1h16v1z"></svg:path></svg:g>`,
})
export class PepiconsPencilInternetIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilInternetCircleIcon],svg[pepicons-pencil-internet-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M4.5 13a8.5 8.5 0 1 0 17 0a8.5 8.5 0 0 0-17 0m16 0a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.5 13c0 4.395 1.442 8 3.5 8s3.5-3.605 3.5-8c0-4.396-1.442-8-3.5-8s-3.5 3.604-3.5 8m6 0c0 3.889-1.245 7-2.5 7s-2.5-3.111-2.5-7s1.245-7 2.5-7s2.5 3.111 2.5 7" clip-rule="evenodd"></svg:path><svg:path d="m6.735 8.312l.67-.742q.16.144.343.281c1.318.988 3.398 1.59 5.665 1.59c1.933 0 3.737-.437 5.055-1.19a5.6 5.6 0 0 0 .857-.597l.65.76q-.448.383-1.01.704c-1.477.845-3.452 1.323-5.552 1.323c-2.47 0-4.762-.663-6.265-1.79a6 6 0 0 1-.413-.34m0 9.389l.67.74q.16-.145.343-.28c1.318-.988 3.398-1.59 5.665-1.59c1.933 0 3.737.436 5.055 1.19q.483.277.857.596l.65-.76a6.6 6.6 0 0 0-1.01-.704c-1.477-.844-3.452-1.322-5.552-1.322c-2.47 0-4.762.663-6.265 1.789q-.22.165-.413.34M5 13.5v-1h16v1z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilInternetCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilInternetCircleFilledIcon],svg[pepicons-pencil-internet-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilInternetCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M4.5 13a8.5 8.5 0 1 0 17 0a8.5 8.5 0 0 0-17 0m16 0a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.5 13c0 4.395 1.442 8 3.5 8s3.5-3.605 3.5-8c0-4.396-1.442-8-3.5-8s-3.5 3.604-3.5 8m6 0c0 3.889-1.245 7-2.5 7s-2.5-3.111-2.5-7s1.245-7 2.5-7s2.5 3.111 2.5 7" clip-rule="evenodd"></svg:path><svg:path d="m6.735 8.312l.67-.742q.16.144.343.281c1.318.988 3.398 1.59 5.665 1.59c1.933 0 3.737-.437 5.055-1.19a5.6 5.6 0 0 0 .857-.597l.65.76q-.448.383-1.01.704c-1.477.845-3.452 1.323-5.552 1.323c-2.47 0-4.762-.663-6.265-1.79a6 6 0 0 1-.413-.34m0 9.389l.67.74q.16-.145.343-.28c1.318-.988 3.398-1.59 5.665-1.59c1.933 0 3.737.436 5.055 1.19q.483.277.857.596l.65-.76a6.6 6.6 0 0 0-1.01-.704c-1.477-.844-3.452-1.322-5.552-1.322c-2.47 0-4.762.663-6.265 1.789q-.22.165-.413.34M5 13.5v-1h16v1z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilInternetCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilInternetCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilInternetCircleOffIcon],svg[pepicons-pencil-internet-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M4.5 13a8.5 8.5 0 1 0 17 0a8.5 8.5 0 0 0-17 0m16 0a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.5 13c0 4.395 1.442 8 3.5 8s3.5-3.605 3.5-8c0-4.396-1.442-8-3.5-8s-3.5 3.604-3.5 8m6 0c0 3.889-1.245 7-2.5 7s-2.5-3.111-2.5-7s1.245-7 2.5-7s2.5 3.111 2.5 7" clip-rule="evenodd"></svg:path><svg:path d="m6.735 8.312l.67-.742q.16.144.343.281c1.318.988 3.398 1.59 5.665 1.59c1.933 0 3.737-.437 5.055-1.19a5.6 5.6 0 0 0 .857-.597l.65.76q-.448.383-1.01.704c-1.477.845-3.452 1.323-5.552 1.323c-2.47 0-4.762-.663-6.265-1.79a6 6 0 0 1-.413-.34m0 9.389l.67.74q.16-.145.343-.28c1.318-.988 3.398-1.59 5.665-1.59c1.933 0 3.737.436 5.055 1.19q.483.277.857.596l.65-.76a6.6 6.6 0 0 0-1.01-.704c-1.477-.844-3.452-1.322-5.552-1.322c-2.47 0-4.762.663-6.265 1.789q-.22.165-.413.34M5 13.5v-1h16v1z"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilInternetCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilInternetOffIcon],svg[pepicons-pencil-internet-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M1.5 10a8.5 8.5 0 1 0 17 0a8.5 8.5 0 0 0-17 0m16 0a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.5 10c0 4.396 1.442 8 3.5 8s3.5-3.604 3.5-8s-1.442-8-3.5-8s-3.5 3.604-3.5 8m6 0c0 3.889-1.245 7-2.5 7s-2.5-3.111-2.5-7S8.745 3 10 3s2.5 3.111 2.5 7" clip-rule="evenodd"></svg:path><svg:path d="m3.735 5.312l.67-.742q.16.144.343.281c1.318.988 3.398 1.59 5.665 1.59c1.933 0 3.737-.437 5.055-1.19a5.6 5.6 0 0 0 .857-.597l.65.76q-.448.383-1.01.704c-1.477.845-3.452 1.323-5.552 1.323c-2.47 0-4.762-.663-6.265-1.79a6 6 0 0 1-.413-.34m0 9.389l.67.74q.16-.145.343-.28c1.318-.988 3.398-1.59 5.665-1.59c1.933 0 3.737.436 5.055 1.19q.482.277.857.596l.65-.76a6.6 6.6 0 0 0-1.01-.704c-1.477-.844-3.452-1.322-5.552-1.322c-2.47 0-4.762.663-6.265 1.789q-.22.165-.413.34M2 10.5v-1h16v1z"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilInternetOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilKeyIcon],svg[pepicons-pencil-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.5 11.611V9q0-.126-.012-.25a4.5 4.5 0 1 0-4.975 0A3 3 0 0 0 7.5 9v8a2.5 2.5 0 0 0 5 0a.5.5 0 0 0-.182-.386l-.786-.646l.716-.41a.5.5 0 0 0 .252-.434v-.775a.5.5 0 0 0-.146-.353l-.998-1.001l1.003-1.036a.5.5 0 0 0 .141-.348m-1.047-2.986q.047.182.047.375v2.409l-1.204 1.243a.5.5 0 0 0 .005.701l1.199 1.203v.278l-1.093.626a.5.5 0 0 0-.07.82l1.147.943A1.5 1.5 0 0 1 8.5 17V9q0-.193.047-.375a.5.5 0 0 0-.242-.562a3.5 3.5 0 1 1 3.39 0a.5.5 0 0 0-.242.562"></svg:path><svg:path d="M10 5.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1"></svg:path></svg:g>`,
})
export class PepiconsPencilKeyIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilKeyCircleIcon],svg[pepicons-pencil-key-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M15.5 14.611V12q0-.126-.012-.25a4.5 4.5 0 1 0-4.975 0a3 3 0 0 0-.013.25v8a2.5 2.5 0 0 0 5 0a.5.5 0 0 0-.182-.386l-.786-.646l.716-.41a.5.5 0 0 0 .252-.434v-.775a.5.5 0 0 0-.146-.353l-.998-1.001l1.003-1.036a.5.5 0 0 0 .141-.348m-1.047-2.986q.047.182.047.375v2.409l-1.204 1.243a.5.5 0 0 0 .005.701l1.199 1.203v.278l-1.093.625a.5.5 0 0 0-.07.82l1.147.944A1.5 1.5 0 0 1 11.5 20v-8q0-.193.047-.375a.5.5 0 0 0-.242-.562a3.5 3.5 0 1 1 3.39 0a.5.5 0 0 0-.242.562"></svg:path><svg:path d="M13 8.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilKeyCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilKeyCircleFilledIcon],svg[pepicons-pencil-key-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilKeyCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M15.5 14.611V12q0-.126-.012-.25a4.5 4.5 0 1 0-4.975 0a3 3 0 0 0-.013.25v8a2.5 2.5 0 0 0 5 0a.5.5 0 0 0-.182-.386l-.786-.646l.716-.41a.5.5 0 0 0 .252-.434v-.775a.5.5 0 0 0-.146-.353l-.998-1.001l1.003-1.036a.5.5 0 0 0 .141-.348m-1.047-2.986q.047.182.047.375v2.409l-1.204 1.243a.5.5 0 0 0 .005.701l1.199 1.203v.278l-1.093.625a.5.5 0 0 0-.07.82l1.147.944A1.5 1.5 0 0 1 11.5 20v-8q0-.193.047-.375a.5.5 0 0 0-.242-.562a3.5 3.5 0 1 1 3.39 0a.5.5 0 0 0-.242.562"></svg:path><svg:path d="M13 8.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilKeyCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilKeyCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilKeyCircleOffIcon],svg[pepicons-pencil-key-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M15.5 14.611V12q0-.126-.012-.25a4.5 4.5 0 1 0-4.975 0a3 3 0 0 0-.013.25v8a2.5 2.5 0 0 0 5 0a.5.5 0 0 0-.182-.386l-.786-.646l.716-.41a.5.5 0 0 0 .252-.434v-.775a.5.5 0 0 0-.146-.353l-.998-1.001l1.003-1.036a.5.5 0 0 0 .141-.348m-1.047-2.986q.047.182.047.375v2.409l-1.204 1.243a.5.5 0 0 0 .005.701l1.199 1.203v.278l-1.093.625a.5.5 0 0 0-.07.82l1.147.944A1.5 1.5 0 0 1 11.5 20v-8q0-.193.047-.375a.5.5 0 0 0-.242-.562a3.5 3.5 0 1 1 3.39 0a.5.5 0 0 0-.242.562" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 8.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilKeyCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilKeyOffIcon],svg[pepicons-pencil-key-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12.5 11.611V9q0-.126-.012-.25a4.5 4.5 0 1 0-4.975 0A3 3 0 0 0 7.5 9v8a2.5 2.5 0 0 0 5 0a.5.5 0 0 0-.182-.386l-.786-.646l.716-.41a.5.5 0 0 0 .252-.434v-.775a.5.5 0 0 0-.146-.353l-.998-1.001l1.003-1.036a.5.5 0 0 0 .141-.348m-1.047-2.986q.047.182.047.375v2.409l-1.204 1.243a.5.5 0 0 0 .005.701l1.199 1.203v.278l-1.093.626a.5.5 0 0 0-.07.82l1.147.943A1.5 1.5 0 0 1 8.5 17V9q0-.193.047-.375a.5.5 0 0 0-.242-.562a3.5 3.5 0 1 1 3.39 0a.5.5 0 0 0-.242.562" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10 5.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilKeyOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilKeyboardIcon],svg[pepicons-pencil-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M.25 8a2.5 2.5 0 0 1 2.5-2.5h14a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-14A2.5 2.5 0 0 1 .25 16zm2.5-1.5A1.5 1.5 0 0 0 1.25 8v8a1.5 1.5 0 0 0 1.5 1.5h14a1.5 1.5 0 0 0 1.5-1.5V8a1.5 1.5 0 0 0-1.5-1.5z" clip-rule="evenodd"></svg:path><svg:path d="M3.25 8.75a.25.25 0 0 1 .25-.25H4a.25.25 0 0 1 .25.25v.5A.25.25 0 0 1 4 9.5h-.5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M2.5 8.75a1 1 0 0 1 1-1H4a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zm1.25.433A.5.5 0 0 0 3.933 9a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M6.25 8.75a.25.25 0 0 1 .25-.25H7a.25.25 0 0 1 .25.25v.5A.25.25 0 0 1 7 9.5h-.5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M5.5 8.75a1 1 0 0 1 1-1H7a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zm1.25.433A.5.5 0 0 0 6.933 9a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M9.25 8.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M8.5 8.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zm1.25.433A.5.5 0 0 0 9.933 9a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M12.25 8.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M11.5 8.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zm1.25.433A.5.5 0 0 0 12.933 9a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M15.25 8.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M14.5 8.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zm1.25.433A.5.5 0 0 0 15.933 9a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M4.75 11.75A.25.25 0 0 1 5 11.5h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25H5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M4 11.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm1.25.433A.5.5 0 0 0 5.433 12a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M7.75 11.75A.25.25 0 0 1 8 11.5h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25H8a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M7 11.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1zm1.25.433A.5.5 0 0 0 8.433 12a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M10.75 11.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25H11a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M10 11.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1zm1.25.433a.5.5 0 0 0 .183-.183a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M13.75 11.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25H14a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M13 11.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H14a1 1 0 0 1-1-1zm1.25.433a.5.5 0 0 0 .183-.183a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183m-8.5 2.567A.75.75 0 0 1 6.5 14H13a.75.75 0 0 1 .75.75v.5A.75.75 0 0 1 13 16H6.5a.75.75 0 0 1-.75-.75zm5-14.25a.5.5 0 0 1 .5.5v1.095a3.5 3.5 0 0 1-1.26 2.689l-1.92 1.6a.5.5 0 0 1-.64-.768l1.92-1.6a2.5 2.5 0 0 0 .9-1.921V1a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilKeyboardIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilKeyboardCircleIcon],svg[pepicons-pencil-keyboard-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3.25 11a2.5 2.5 0 0 1 2.5-2.5h14a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-14a2.5 2.5 0 0 1-2.5-2.5zm2.5-1.5a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 1.5 1.5h14a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5z" clip-rule="evenodd"></svg:path><svg:path d="M6.25 11.75a.25.25 0 0 1 .25-.25H7a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M5.5 11.75a1 1 0 0 1 1-1H7a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zm1.25.433A.5.5 0 0 0 6.933 12a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M9.25 11.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M8.5 11.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zm1.25.433A.5.5 0 0 0 9.933 12a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M12.25 11.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M11.5 11.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zm1.25.433a.5.5 0 0 0 .183-.183a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M15.25 11.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M14.5 11.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zm1.25.433a.5.5 0 0 0 .183-.183a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M18.25 11.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M17.5 11.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zm1.25.433a.5.5 0 0 0 .183-.183a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M7.75 14.75A.25.25 0 0 1 8 14.5h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25H8a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M7 14.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1zm1.25.433A.5.5 0 0 0 8.433 15a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M10.75 14.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25H11a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M10 14.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1zm1.25.433a.5.5 0 0 0 .183-.183a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M13.75 14.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25H14a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M13 14.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H14a1 1 0 0 1-1-1zm1.25.433a.5.5 0 0 0 .183-.183a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M16.75 14.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25H17a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M16 14.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1zm1.25.433a.5.5 0 0 0 .183-.183a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183m-8.5 2.567A.75.75 0 0 1 9.5 17H16a.75.75 0 0 1 .75.75v.5A.75.75 0 0 1 16 19H9.5a.75.75 0 0 1-.75-.75zm5-14.25a.5.5 0 0 1 .5.5v1.095a3.5 3.5 0 0 1-1.26 2.689l-1.92 1.6a.5.5 0 0 1-.64-.768l1.92-1.6a2.5 2.5 0 0 0 .9-1.921V4a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilKeyboardCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilKeyboardCircleFilledIcon],svg[pepicons-pencil-keyboard-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilKeyboardCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M3.25 11a2.5 2.5 0 0 1 2.5-2.5h14a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-14a2.5 2.5 0 0 1-2.5-2.5zm2.5-1.5a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 1.5 1.5h14a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5z" clip-rule="evenodd"></svg:path><svg:path fill="#000" d="M6.25 11.75a.25.25 0 0 1 .25-.25H7a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M5.5 11.75a1 1 0 0 1 1-1H7a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zm1.25.433A.5.5 0 0 0 6.933 12a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path fill="#000" d="M9.25 11.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M8.5 11.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zm1.25.433A.5.5 0 0 0 9.933 12a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path fill="#000" d="M12.25 11.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M11.5 11.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zm1.25.433a.5.5 0 0 0 .183-.183a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path fill="#000" d="M15.25 11.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M14.5 11.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zm1.25.433a.5.5 0 0 0 .183-.183a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path fill="#000" d="M18.25 11.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M17.5 11.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zm1.25.433a.5.5 0 0 0 .183-.183a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path fill="#000" d="M7.75 14.75A.25.25 0 0 1 8 14.5h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25H8a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M7 14.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1zm1.25.433A.5.5 0 0 0 8.433 15a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path fill="#000" d="M10.75 14.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25H11a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M10 14.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1zm1.25.433a.5.5 0 0 0 .183-.183a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path fill="#000" d="M13.75 14.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25H14a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M13 14.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H14a1 1 0 0 1-1-1zm1.25.433a.5.5 0 0 0 .183-.183a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path fill="#000" d="M16.75 14.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25H17a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M16 14.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1zm1.25.433a.5.5 0 0 0 .183-.183a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path fill="#D9D9D9" d="M9.25 17.75a.25.25 0 0 1 .25-.25H16a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25H9.5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M8.75 17.75A.75.75 0 0 1 9.5 17H16a.75.75 0 0 1 .75.75v.5A.75.75 0 0 1 16 19H9.5a.75.75 0 0 1-.75-.75zm5-14.25a.5.5 0 0 1 .5.5v1.095a3.5 3.5 0 0 1-1.26 2.689l-1.92 1.6a.5.5 0 0 1-.64-.768l1.92-1.6a2.5 2.5 0 0 0 .9-1.921V4a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilKeyboardCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilKeyboardCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilKeyboardCircleOffIcon],svg[pepicons-pencil-keyboard-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3.25 11a2.5 2.5 0 0 1 2.5-2.5h14a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-14a2.5 2.5 0 0 1-2.5-2.5zm2.5-1.5a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 1.5 1.5h14a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5z" clip-rule="evenodd"></svg:path><svg:path d="M6.25 11.75a.25.25 0 0 1 .25-.25H7a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M5.5 11.75a1 1 0 0 1 1-1H7a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zm1.25.433A.5.5 0 0 0 6.933 12a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M9.25 11.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M8.5 11.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zm1.25.433A.5.5 0 0 0 9.933 12a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M12.25 11.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M11.5 11.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zm1.25.433a.5.5 0 0 0 .183-.183a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M15.25 11.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M14.5 11.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zm1.25.433a.5.5 0 0 0 .183-.183a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M18.25 11.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M17.5 11.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zm1.25.433a.5.5 0 0 0 .183-.183a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M7.75 14.75A.25.25 0 0 1 8 14.5h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25H8a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M7 14.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1zm1.25.433A.5.5 0 0 0 8.433 15a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M10.75 14.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25H11a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M10 14.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1zm1.25.433a.5.5 0 0 0 .183-.183a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M13.75 14.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25H14a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M13 14.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H14a1 1 0 0 1-1-1zm1.25.433a.5.5 0 0 0 .183-.183a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M16.75 14.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25H17a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M16 14.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1zm1.25.433a.5.5 0 0 0 .183-.183a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183m-8.5 2.567A.75.75 0 0 1 9.5 17H16a.75.75 0 0 1 .75.75v.5A.75.75 0 0 1 16 19H9.5a.75.75 0 0 1-.75-.75zm5-14.25a.5.5 0 0 1 .5.5v1.095a3.5 3.5 0 0 1-1.26 2.689l-1.92 1.6a.5.5 0 0 1-.64-.768l1.92-1.6a2.5 2.5 0 0 0 .9-1.921V4a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilKeyboardCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilKeyboardOffIcon],svg[pepicons-pencil-keyboard-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M.25 8a2.5 2.5 0 0 1 2.5-2.5h14a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-14A2.5 2.5 0 0 1 .25 16zm2.5-1.5A1.5 1.5 0 0 0 1.25 8v8a1.5 1.5 0 0 0 1.5 1.5h14a1.5 1.5 0 0 0 1.5-1.5V8a1.5 1.5 0 0 0-1.5-1.5z" clip-rule="evenodd"></svg:path><svg:path d="M3.25 8.75a.25.25 0 0 1 .25-.25H4a.25.25 0 0 1 .25.25v.5A.25.25 0 0 1 4 9.5h-.5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M2.5 8.75a1 1 0 0 1 1-1H4a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zm1.25.433A.5.5 0 0 0 3.933 9a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M6.25 8.75a.25.25 0 0 1 .25-.25H7a.25.25 0 0 1 .25.25v.5A.25.25 0 0 1 7 9.5h-.5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M5.5 8.75a1 1 0 0 1 1-1H7a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zm1.25.433A.5.5 0 0 0 6.933 9a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M9.25 8.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M8.5 8.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zm1.25.433A.5.5 0 0 0 9.933 9a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M12.25 8.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M11.5 8.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zm1.25.433A.5.5 0 0 0 12.933 9a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M15.25 8.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M14.5 8.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zm1.25.433A.5.5 0 0 0 15.933 9a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M4.75 11.75A.25.25 0 0 1 5 11.5h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25H5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M4 11.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm1.25.433A.5.5 0 0 0 5.433 12a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M7.75 11.75A.25.25 0 0 1 8 11.5h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25H8a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M7 11.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1zm1.25.433A.5.5 0 0 0 8.433 12a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M10.75 11.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25H11a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M10 11.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1zm1.25.433a.5.5 0 0 0 .183-.183a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183" clip-rule="evenodd"></svg:path><svg:path d="M13.75 11.75a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25H14a.25.25 0 0 1-.25-.25z"></svg:path><svg:path fill-rule="evenodd" d="M13 11.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H14a1 1 0 0 1-1-1zm1.25.433a.5.5 0 0 0 .183-.183a.5.5 0 0 0-.183-.183a.5.5 0 0 0-.183.183c.044.076.107.14.183.183m-8.5 2.567A.75.75 0 0 1 6.5 14H13a.75.75 0 0 1 .75.75v.5A.75.75 0 0 1 13 16H6.5a.75.75 0 0 1-.75-.75zm5-14.25a.5.5 0 0 1 .5.5v1.095a3.5 3.5 0 0 1-1.26 2.689l-1.92 1.6a.5.5 0 0 1-.64-.768l1.92-1.6a2.5 2.5 0 0 0 .9-1.921V1a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilKeyboardOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilKniveForkIcon],svg[pepicons-pencil-knive-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14.28 1.051C12.12 2.115 11 3.611 11 5.506c0 1.82 1.037 3.051 3 3.631V11a.5.5 0 0 0 1 0V1.5a.5.5 0 0 0-.72-.449M12 5.506c0-1.268.65-2.314 2-3.158v5.74c-1.364-.477-2-1.321-2-2.582" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 12.5v5a1.5 1.5 0 0 0 3 0v-5a1.5 1.5 0 0 0-3 0m1.5 5.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.5.5" clip-rule="evenodd"></svg:path><svg:path d="M4.532 2.475a.5.5 0 1 1 1 .05c-.084 1.672.003 2.81.237 3.374c.183.442.544.634 1.202.597a.5.5 0 0 1 .058.998c-1.058.06-1.826-.349-2.184-1.211c-.307-.74-.403-1.996-.313-3.808"></svg:path><svg:path d="M9.467 2.475a.5.5 0 1 0-.998.05c.083 1.672-.004 2.81-.238 3.374c-.183.442-.544.634-1.202.597a.5.5 0 0 0-.058.998c1.058.06 1.826-.349 2.184-1.211c.307-.74.403-1.996.312-3.808"></svg:path><svg:path d="M6.5 2.5a.5.5 0 0 1 1 0v9a.5.5 0 0 1-1 0z"></svg:path><svg:path fill-rule="evenodd" d="M5.5 12.5v5a1.5 1.5 0 0 0 3 0v-5a1.5 1.5 0 0 0-3 0M7 18a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.5.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilKniveForkIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilKniveForkCircleIcon],svg[pepicons-pencil-knive-fork-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M17.28 4.051C15.12 5.115 14 6.611 14 8.506c0 1.82 1.037 3.051 3 3.631V14a.5.5 0 0 0 1 0V4.5a.5.5 0 0 0-.72-.449M15 8.506c0-1.268.65-2.314 2-3.158v5.74c-1.364-.477-2-1.321-2-2.582" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M16 15.5v5a1.5 1.5 0 0 0 3 0v-5a1.5 1.5 0 0 0-3 0m1.5 5.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.5.5" clip-rule="evenodd"></svg:path><svg:path d="M7.532 5.475a.5.5 0 1 1 1 .05c-.084 1.672.003 2.81.237 3.374c.183.442.544.634 1.202.597a.5.5 0 0 1 .058.998c-1.058.06-1.826-.349-2.184-1.211c-.307-.74-.403-1.996-.313-3.808"></svg:path><svg:path d="M12.467 5.475a.5.5 0 1 0-.998.05c.083 1.672-.004 2.81-.238 3.374c-.183.442-.544.634-1.202.597a.5.5 0 0 0-.058.998c1.058.06 1.826-.349 2.184-1.211c.307-.74.403-1.996.312-3.808"></svg:path><svg:path d="M9.5 5.5a.5.5 0 0 1 1 0v9a.5.5 0 0 1-1 0z"></svg:path><svg:path fill-rule="evenodd" d="M8.5 15.5v5a1.5 1.5 0 0 0 3 0v-5a1.5 1.5 0 0 0-3 0M10 21a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.5.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilKniveForkCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilKniveForkCircleFilledIcon],svg[pepicons-pencil-knive-fork-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilKniveForkCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M17.28 4.051C15.12 5.115 14 6.611 14 8.506c0 1.82 1.037 3.051 3 3.631V14a.5.5 0 0 0 1 0V4.5a.5.5 0 0 0-.72-.449M15 8.506c0-1.268.65-2.314 2-3.158v5.74c-1.364-.477-2-1.321-2-2.582" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M16 15.5v5a1.5 1.5 0 0 0 3 0v-5a1.5 1.5 0 0 0-3 0m1.5 5.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.5.5" clip-rule="evenodd"></svg:path><svg:path d="M7.532 5.475a.5.5 0 1 1 1 .05c-.084 1.672.003 2.81.237 3.374c.183.442.544.634 1.202.597a.5.5 0 0 1 .058.998c-1.058.06-1.826-.349-2.184-1.211c-.307-.74-.403-1.996-.313-3.808"></svg:path><svg:path d="M12.467 5.475a.5.5 0 1 0-.998.05c.083 1.672-.004 2.81-.238 3.374c-.183.442-.544.634-1.202.597a.5.5 0 0 0-.058.998c1.058.06 1.826-.349 2.184-1.211c.307-.74.403-1.996.312-3.808"></svg:path><svg:path d="M9.5 5.5a.5.5 0 0 1 1 0v9a.5.5 0 0 1-1 0z"></svg:path><svg:path fill-rule="evenodd" d="M8.5 15.5v5a1.5 1.5 0 0 0 3 0v-5a1.5 1.5 0 0 0-3 0M10 21a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.5.5" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilKniveForkCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilKniveForkCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilKniveForkCircleOffIcon],svg[pepicons-pencil-knive-fork-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M17.28 4.051C15.12 5.115 14 6.611 14 8.506c0 1.82 1.037 3.051 3 3.631V14a.5.5 0 0 0 1 0V4.5a.5.5 0 0 0-.72-.449M15 8.506c0-1.268.65-2.314 2-3.158v5.74c-1.364-.477-2-1.321-2-2.582" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M16 15.5v5a1.5 1.5 0 0 0 3 0v-5a1.5 1.5 0 0 0-3 0m1.5 5.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.5.5" clip-rule="evenodd"></svg:path><svg:path d="M7.532 5.475a.5.5 0 1 1 1 .05c-.084 1.672.003 2.81.237 3.374c.183.442.544.634 1.202.597a.5.5 0 0 1 .058.998c-1.058.06-1.826-.349-2.184-1.211c-.307-.74-.403-1.996-.313-3.808"></svg:path><svg:path d="M12.467 5.475a.5.5 0 1 0-.998.05c.083 1.672-.004 2.81-.238 3.374c-.183.442-.544.634-1.202.597a.5.5 0 0 0-.058.998c1.058.06 1.826-.349 2.184-1.211c.307-.74.403-1.996.312-3.808"></svg:path><svg:path d="M9.5 5.5a.5.5 0 0 1 1 0v9a.5.5 0 0 1-1 0z"></svg:path><svg:path fill-rule="evenodd" d="M8.5 15.5v5a1.5 1.5 0 0 0 3 0v-5a1.5 1.5 0 0 0-3 0M10 21a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.5.5" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilKniveForkCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilKniveForkOffIcon],svg[pepicons-pencil-knive-fork-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14.28 1.051C12.12 2.115 11 3.611 11 5.506c0 1.82 1.037 3.051 3 3.631V11a.5.5 0 0 0 1 0V1.5a.5.5 0 0 0-.72-.449M12 5.506c0-1.268.65-2.314 2-3.158v5.74c-1.364-.477-2-1.321-2-2.582" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 12.5v5a1.5 1.5 0 0 0 3 0v-5a1.5 1.5 0 0 0-3 0m1.5 5.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.5.5" clip-rule="evenodd"></svg:path><svg:path d="M4.532 2.475a.5.5 0 1 1 1 .05c-.084 1.672.003 2.81.237 3.374c.183.442.544.634 1.202.597a.5.5 0 0 1 .058.998c-1.058.06-1.826-.349-2.184-1.211c-.307-.74-.403-1.996-.313-3.808"></svg:path><svg:path d="M9.467 2.475a.5.5 0 1 0-.998.05c.083 1.672-.004 2.81-.238 3.374c-.183.442-.544.634-1.202.597a.5.5 0 0 0-.058.998c1.058.06 1.826-.349 2.184-1.211c.307-.74.403-1.996.312-3.808"></svg:path><svg:path d="M6.5 2.5a.5.5 0 0 1 1 0v9a.5.5 0 0 1-1 0z"></svg:path><svg:path fill-rule="evenodd" d="M5.5 12.5v5a1.5 1.5 0 0 0 3 0v-5a1.5 1.5 0 0 0-3 0M7 18a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.5.5" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilKniveForkOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLabelIcon],svg[pepicons-pencil-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3.474 3.474v.003a36 36 0 0 0-.115 1.815c-.058 1.46-.05 3.193.142 4.48a.4.4 0 0 0 .117.21l7.754 7.754a.5.5 0 0 0 .707 0l5.657-5.657a.5.5 0 0 0 0-.707L9.982 3.618a.4.4 0 0 0-.21-.117c-1.287-.192-3.02-.2-4.48-.142a36 36 0 0 0-1.815.115zM2.59 2.59c-.097.092-.489 4.567-.077 7.33c.044.294.19.56.4.77l7.753 7.754a1.5 1.5 0 0 0 2.121 0l5.657-5.657a1.5 1.5 0 0 0 0-2.121L10.689 2.91a1.4 1.4 0 0 0-.77-.4c-2.763-.411-7.238-.02-7.33.078"></svg:path><svg:path d="M7.576 7.661a.5.5 0 1 0 .707.707a.5.5 0 0 0-.707-.707M6.87 9.075a1.5 1.5 0 1 1 2.12-2.121a1.5 1.5 0 0 1-2.12 2.121"></svg:path></svg:g>`,
})
export class PepiconsPencilLabelIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLabelCircleIcon],svg[pepicons-pencil-label-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.474 6.474v.003a36 36 0 0 0-.115 1.815c-.058 1.46-.05 3.193.142 4.48a.4.4 0 0 0 .117.21l7.754 7.754a.5.5 0 0 0 .707 0l5.657-5.657a.5.5 0 0 0 0-.707l-7.754-7.754a.4.4 0 0 0-.21-.117c-1.287-.192-3.02-.2-4.48-.142a36 36 0 0 0-1.815.115zM5.59 5.59c-.097.092-.489 4.567-.077 7.33c.044.294.19.56.4.77l7.753 7.754a1.5 1.5 0 0 0 2.121 0l5.657-5.657a1.5 1.5 0 0 0 0-2.121L13.689 5.91a1.4 1.4 0 0 0-.77-.4c-2.763-.411-7.238-.02-7.33.078"></svg:path><svg:path d="M10.576 10.661a.5.5 0 1 0 .707.707a.5.5 0 0 0-.707-.707m-.707 1.414a1.5 1.5 0 1 1 2.121-2.121a1.5 1.5 0 0 1-2.12 2.121"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilLabelCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLabelCircleFilledIcon],svg[pepicons-pencil-label-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilLabelCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.474 6.474v.003a36 36 0 0 0-.115 1.815c-.058 1.46-.05 3.193.142 4.48a.4.4 0 0 0 .117.21l7.754 7.754a.5.5 0 0 0 .707 0l5.657-5.657a.5.5 0 0 0 0-.707l-7.754-7.754a.4.4 0 0 0-.21-.117c-1.287-.192-3.02-.2-4.48-.142a36 36 0 0 0-1.815.115zM5.59 5.59c-.097.092-.489 4.567-.077 7.33c.044.294.19.56.4.77l7.753 7.754a1.5 1.5 0 0 0 2.121 0l5.657-5.657a1.5 1.5 0 0 0 0-2.121L13.689 5.91a1.4 1.4 0 0 0-.77-.4c-2.763-.411-7.238-.02-7.33.078"></svg:path><svg:path d="M10.576 10.661a.5.5 0 1 0 .707.707a.5.5 0 0 0-.707-.707m-.707 1.414a1.5 1.5 0 1 1 2.121-2.121a1.5 1.5 0 0 1-2.12 2.121"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilLabelCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilLabelCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLabelCircleOffIcon],svg[pepicons-pencil-label-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.474 6.474v.003a36 36 0 0 0-.115 1.815c-.058 1.46-.05 3.193.142 4.48a.4.4 0 0 0 .117.21l7.754 7.754a.5.5 0 0 0 .707 0l5.657-5.657a.5.5 0 0 0 0-.707l-7.754-7.754a.4.4 0 0 0-.21-.117c-1.287-.192-3.02-.2-4.48-.142a36 36 0 0 0-1.815.115zM5.59 5.59c-.097.092-.489 4.567-.077 7.33c.044.294.19.56.4.77l7.753 7.754a1.5 1.5 0 0 0 2.121 0l5.657-5.657a1.5 1.5 0 0 0 0-2.121L13.689 5.91a1.4 1.4 0 0 0-.77-.4c-2.763-.411-7.238-.02-7.33.078"></svg:path><svg:path d="M10.576 10.661a.5.5 0 1 0 .707.707a.5.5 0 0 0-.707-.707m-.707 1.414a1.5 1.5 0 1 1 2.121-2.121a1.5 1.5 0 0 1-2.12 2.121"></svg:path></svg:g><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilLabelCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLabelOffIcon],svg[pepicons-pencil-label-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3.474 3.474v.003a36 36 0 0 0-.115 1.815c-.058 1.46-.05 3.193.142 4.48a.4.4 0 0 0 .117.21l7.754 7.754a.5.5 0 0 0 .707 0l5.657-5.657a.5.5 0 0 0 0-.707L9.982 3.618a.4.4 0 0 0-.21-.117c-1.287-.192-3.02-.2-4.48-.142a36 36 0 0 0-1.815.115zM2.59 2.59c-.097.092-.489 4.567-.077 7.33c.044.294.19.56.4.77l7.753 7.754a1.5 1.5 0 0 0 2.121 0l5.657-5.657a1.5 1.5 0 0 0 0-2.121L10.689 2.91a1.4 1.4 0 0 0-.77-.4c-2.763-.411-7.238-.02-7.33.078"></svg:path><svg:path d="M7.576 7.661a.5.5 0 1 0 .707.707a.5.5 0 0 0-.707-.707M6.87 9.075a1.5 1.5 0 1 1 2.12-2.121a1.5 1.5 0 0 1-2.12 2.121"></svg:path></svg:g><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilLabelOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLeafIcon],svg[pepicons-pencil-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M2.624 7.954c.567 2.204 1.763 4.474 3.162 5.873c1.913 1.913 3.77 2.665 5.347 2.726c1.571.06 2.966-.564 3.988-1.588c.46-.462.756-1.13.88-1.96c.125-.827.075-1.78-.118-2.767c-.736-3.775-4.25-6.777-8.588-7.833c-1.924-.468-3.392-.391-4.194.413c-.448.45-.724 1.156-.803 2.07c-.077.908.043 1.967.326 3.066m-1.396-3.11c.086-1.012.4-1.947 1.064-2.614c1.272-1.275 3.37-1.186 5.32-.711c4.67 1.137 8.518 4.38 9.33 8.546c.205 1.05.266 2.095.124 3.035c-.14.936-.488 1.803-1.137 2.454a6.48 6.48 0 0 1-4.87 1.918c-1.955-.074-4.06-1.001-6.095-3.036c-1.538-1.538-2.795-3.956-3.389-6.263c-.298-1.157-.435-2.31-.347-3.33"></svg:path><svg:path d="M11.105 6.912c.293.043.49.28.439.53l-.511 2.538l2.41 2.758l1.517 2.024l2.007 3.01c.147.221.057.502-.201.627c-.258.126-.586.049-.733-.172l-1.993-2.99l-1.362-1.815l-4.002-.528c-.293-.039-.494-.274-.449-.524s.32-.423.613-.384l2.943.389l-1.727-1.978l-3.92-3.36a.414.414 0 0 1 .001-.65a.605.605 0 0 1 .76.002l3.213 2.754l.374-1.856c.05-.25.328-.418.621-.375"></svg:path></svg:g>`,
})
export class PepiconsPencilLeafIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLeafCircleIcon],svg[pepicons-pencil-leaf-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.624 10.954c.567 2.204 1.763 4.474 3.162 5.873c1.913 1.913 3.77 2.665 5.347 2.726c1.571.06 2.966-.564 3.988-1.588c.46-.462.756-1.13.88-1.96c.125-.827.075-1.78-.118-2.767c-.736-3.775-4.25-6.777-8.588-7.833c-1.924-.468-3.392-.391-4.194.413c-.448.45-.724 1.156-.803 2.07c-.077.908.043 1.967.326 3.066m-1.396-3.11c.086-1.012.4-1.947 1.064-2.614c1.272-1.275 3.369-1.186 5.32-.711c4.67 1.137 8.518 4.381 9.33 8.546c.205 1.05.266 2.095.124 3.035c-.14.936-.488 1.803-1.137 2.453a6.48 6.48 0 0 1-4.87 1.92c-1.955-.075-4.06-1.002-6.095-3.037c-1.538-1.538-2.795-3.956-3.389-6.263c-.298-1.157-.435-2.31-.347-3.33"></svg:path><svg:path d="M14.105 9.912c.293.043.49.28.439.53l-.511 2.538l2.41 2.758l1.517 2.024l2.007 3.01c.147.221.057.502-.201.627c-.258.126-.586.049-.733-.172l-1.993-2.99l-1.362-1.815l-4.002-.528c-.293-.039-.494-.274-.449-.524s.32-.423.613-.384l2.943.389l-1.727-1.978l-3.92-3.36a.414.414 0 0 1 .001-.65a.605.605 0 0 1 .76.002l3.213 2.754l.374-1.856c.05-.25.328-.418.621-.375"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilLeafCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLeafCircleFilledIcon],svg[pepicons-pencil-leaf-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilLeafCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.624 10.954c.567 2.204 1.763 4.474 3.162 5.873c1.913 1.913 3.77 2.665 5.347 2.726c1.571.06 2.966-.564 3.988-1.588c.46-.462.756-1.13.88-1.96c.125-.827.075-1.78-.118-2.767c-.736-3.775-4.25-6.777-8.588-7.833c-1.924-.468-3.392-.391-4.194.413c-.448.45-.724 1.156-.803 2.07c-.077.908.043 1.967.326 3.066m-1.396-3.11c.086-1.012.4-1.947 1.064-2.614c1.272-1.275 3.369-1.186 5.32-.711c4.67 1.137 8.518 4.381 9.33 8.546c.205 1.05.266 2.095.124 3.035c-.14.936-.488 1.803-1.137 2.453a6.48 6.48 0 0 1-4.87 1.92c-1.955-.075-4.06-1.002-6.095-3.037c-1.538-1.538-2.795-3.956-3.389-6.263c-.298-1.157-.435-2.31-.347-3.33"></svg:path><svg:path d="M14.105 9.912c.293.043.49.28.439.53l-.511 2.538l2.41 2.758l1.517 2.024l2.007 3.01c.147.221.057.502-.201.627c-.258.126-.586.049-.733-.172l-1.993-2.99l-1.362-1.815l-4.002-.528c-.293-.039-.494-.274-.449-.524s.32-.423.613-.384l2.943.389l-1.727-1.978l-3.92-3.36a.414.414 0 0 1 .001-.65a.605.605 0 0 1 .76.002l3.213 2.754l.374-1.856c.05-.25.328-.418.621-.375"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilLeafCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilLeafCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLeafCircleOffIcon],svg[pepicons-pencil-leaf-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.624 10.954c.567 2.204 1.763 4.474 3.162 5.873c1.913 1.913 3.77 2.665 5.347 2.726c1.571.06 2.966-.564 3.988-1.588c.46-.462.756-1.13.88-1.96c.125-.827.075-1.78-.118-2.767c-.736-3.775-4.25-6.777-8.588-7.833c-1.924-.468-3.392-.391-4.194.413c-.448.45-.724 1.156-.803 2.07c-.077.908.043 1.967.326 3.066m-1.396-3.11c.086-1.012.4-1.947 1.064-2.614c1.272-1.275 3.369-1.186 5.32-.711c4.67 1.137 8.518 4.381 9.33 8.546c.205 1.05.266 2.095.124 3.035c-.14.936-.488 1.803-1.137 2.453a6.48 6.48 0 0 1-4.87 1.92c-1.955-.075-4.06-1.002-6.095-3.037c-1.538-1.538-2.795-3.956-3.389-6.263c-.298-1.157-.435-2.31-.347-3.33"></svg:path><svg:path d="M14.105 9.912c.293.043.49.28.439.53l-.511 2.538l2.41 2.758l1.517 2.024l2.007 3.01c.147.221.057.502-.201.627c-.258.126-.586.049-.733-.172l-1.993-2.99l-1.362-1.815l-4.002-.528c-.293-.039-.494-.274-.449-.524s.32-.423.613-.384l2.943.389l-1.727-1.978l-3.92-3.36a.414.414 0 0 1 .001-.65a.605.605 0 0 1 .76.002l3.213 2.754l.374-1.856c.05-.25.328-.418.621-.375"></svg:path></svg:g><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilLeafCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLeafOffIcon],svg[pepicons-pencil-leaf-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M2.624 7.954c.567 2.204 1.763 4.474 3.162 5.873c1.913 1.913 3.77 2.665 5.347 2.726c1.571.06 2.966-.564 3.988-1.588c.46-.462.756-1.13.88-1.96c.125-.827.075-1.78-.118-2.767c-.736-3.775-4.25-6.777-8.588-7.833c-1.924-.468-3.392-.391-4.194.413c-.448.45-.724 1.156-.803 2.07c-.077.908.043 1.967.326 3.066m-1.396-3.11c.086-1.012.4-1.947 1.064-2.614c1.272-1.275 3.37-1.186 5.32-.711c4.67 1.137 8.518 4.38 9.33 8.546c.205 1.05.266 2.095.124 3.035c-.14.936-.488 1.803-1.137 2.454a6.48 6.48 0 0 1-4.87 1.918c-1.955-.074-4.06-1.001-6.095-3.036c-1.538-1.538-2.795-3.956-3.389-6.263c-.298-1.157-.435-2.31-.347-3.33"></svg:path><svg:path d="M11.105 6.912c.293.043.49.28.439.53l-.511 2.538l2.41 2.758l1.517 2.024l2.007 3.01c.147.221.057.502-.201.627c-.258.126-.586.049-.733-.172l-1.993-2.99l-1.362-1.815l-4.002-.528c-.293-.039-.494-.274-.449-.524s.32-.423.613-.384l2.943.389l-1.727-1.978l-3.92-3.36a.414.414 0 0 1 .001-.65a.605.605 0 0 1 .76.002l3.213 2.754l.374-1.856c.05-.25.328-.418.621-.375"></svg:path></svg:g><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilLeafOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLeaveIcon],svg[pepicons-pencil-leave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M15.347 7.116a.5.5 0 0 1 .704.064l2.083 2.5a.5.5 0 0 1-.768.64l-2.083-2.5a.5.5 0 0 1 .064-.704"></svg:path><svg:path d="M15.347 12.884a.5.5 0 0 1-.064-.704l2.083-2.5a.5.5 0 1 1 .768.64l-2.083 2.5a.5.5 0 0 1-.704.064"></svg:path><svg:path d="M17.5 10a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1 0-1H17a.5.5 0 0 1 .5.5m-14-7a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5m0 14a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M13 2.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5m0 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5m-9-10a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5"></svg:path></svg:g>`,
})
export class PepiconsPencilLeaveIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLeaveCircleIcon],svg[pepicons-pencil-leave-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M18.347 10.116a.5.5 0 0 1 .704.064l2.083 2.5a.5.5 0 0 1-.768.64l-2.084-2.5a.5.5 0 0 1 .064-.704"></svg:path><svg:path d="M18.347 15.884a.5.5 0 0 1-.065-.704l2.084-2.5a.5.5 0 1 1 .768.64l-2.083 2.5a.5.5 0 0 1-.704.064"></svg:path><svg:path d="M20.5 13a.5.5 0 0 1-.5.5h-7.5a.5.5 0 0 1 0-1H20a.5.5 0 0 1 .5.5m-14-7a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5m0 14a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M16 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m0 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5m-9-10a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilLeaveCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLeaveCircleFilledIcon],svg[pepicons-pencil-leave-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilLeaveCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M18.347 10.116a.5.5 0 0 1 .704.064l2.083 2.5a.5.5 0 0 1-.768.64l-2.084-2.5a.5.5 0 0 1 .064-.704"></svg:path><svg:path d="M18.347 15.884a.5.5 0 0 1-.065-.704l2.084-2.5a.5.5 0 1 1 .768.64l-2.083 2.5a.5.5 0 0 1-.704.064"></svg:path><svg:path d="M20.5 13a.5.5 0 0 1-.5.5h-7.5a.5.5 0 0 1 0-1H20a.5.5 0 0 1 .5.5m-14-7a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5m0 14a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M16 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m0 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5m-9-10a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilLeaveCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilLeaveCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLeaveCircleOffIcon],svg[pepicons-pencil-leave-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M18.347 10.116a.5.5 0 0 1 .704.064l2.083 2.5a.5.5 0 0 1-.768.64l-2.084-2.5a.5.5 0 0 1 .064-.704" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M18.347 15.884a.5.5 0 0 1-.065-.704l2.084-2.5a.5.5 0 1 1 .768.64l-2.083 2.5a.5.5 0 0 1-.704.064" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M20.5 13a.5.5 0 0 1-.5.5h-7.5a.5.5 0 0 1 0-1H20a.5.5 0 0 1 .5.5m-14-7a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5m0 14a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M16 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m0 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5m-9-10a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilLeaveCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLeaveOffIcon],svg[pepicons-pencil-leave-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M15.347 7.116a.5.5 0 0 1 .704.064l2.083 2.5a.5.5 0 0 1-.768.64l-2.083-2.5a.5.5 0 0 1 .064-.704" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15.347 12.884a.5.5 0 0 1-.064-.704l2.083-2.5a.5.5 0 1 1 .768.64l-2.083 2.5a.5.5 0 0 1-.704.064" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17.5 10a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1 0-1H17a.5.5 0 0 1 .5.5m-14-7a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5m0 14a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 2.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5m0 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5m-9-10a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilLeaveOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLetterIcon],svg[pepicons-pencil-letter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17 4H3a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-11A.5.5 0 0 0 17 4M3.5 15V5h13v10z"></svg:path><svg:path d="m17.324 4.88l-7.045 6a.5.5 0 0 1-.65-.001l-6.956-6A.5.5 0 0 1 3 4h14a.5.5 0 0 1 .324.88M15.642 5H4.345l5.612 4.841z"></svg:path></svg:g>`,
})
export class PepiconsPencilLetterIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLetterCircleIcon],svg[pepicons-pencil-letter-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M20 7H6a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-11A.5.5 0 0 0 20 7M6.5 18V8h13v10z"></svg:path><svg:path d="m20.324 7.88l-7.045 6a.5.5 0 0 1-.65-.001l-6.956-6A.5.5 0 0 1 6 7h14a.5.5 0 0 1 .324.88M18.642 8H7.345l5.612 4.841z"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilLetterCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLetterCircleFilledIcon],svg[pepicons-pencil-letter-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilLetterCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M20 7H6a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-11A.5.5 0 0 0 20 7M6.5 18V8h13v10z"></svg:path><svg:path d="m20.324 7.88l-7.045 6a.5.5 0 0 1-.65-.001l-6.956-6A.5.5 0 0 1 6 7h14a.5.5 0 0 1 .324.88M18.642 8H7.345l5.612 4.841z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilLetterCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilLetterCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLetterCircleOffIcon],svg[pepicons-pencil-letter-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M20 7H6a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-11A.5.5 0 0 0 20 7M6.5 18V8h13v10z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="m20.324 7.88l-7.045 6a.5.5 0 0 1-.65-.001l-6.956-6A.5.5 0 0 1 6 7h14a.5.5 0 0 1 .324.88M18.642 8H7.345l5.612 4.841z" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilLetterCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLetterOffIcon],svg[pepicons-pencil-letter-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M17 4H3a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-11A.5.5 0 0 0 17 4M3.5 15V5h13v10z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="m17.324 4.88l-7.045 6a.5.5 0 0 1-.65-.001l-6.956-6A.5.5 0 0 1 3 4h14a.5.5 0 0 1 .324.88M15.642 5H4.345l5.612 4.841z" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilLetterOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLetterOpenIcon],svg[pepicons-pencil-letter-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M2.5 8a.5.5 0 0 1 .5.5V17h14V8.5a.5.5 0 0 1 1 0v9a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5"></svg:path><svg:path d="M3 5.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v4.67a.5.5 0 0 1-.223.416l-6.5 4.33a.5.5 0 0 1-.554 0l-6.5-4.33A.5.5 0 0 1 3 10.17zM4 6v3.902l6 3.997l6-3.997V6z"></svg:path><svg:path d="M9.723 2.084a.5.5 0 0 1 .554 0l4.5 3l-.554.832L10 3.101L5.777 5.916l-.554-.832zm7.131 5.062l1 1l-.708.708l-1-1zm-13 .708l-1 1l-.708-.708l1-1zM6.75 8A.25.25 0 0 1 7 7.75h6a.25.25 0 1 1 0 .5H7A.25.25 0 0 1 6.75 8m.5 2a.25.25 0 0 1 .25-.25h5a.25.25 0 1 1 0 .5h-5a.25.25 0 0 1-.25-.25"></svg:path></svg:g>`,
})
export class PepiconsPencilLetterOpenIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLetterOpenCircleIcon],svg[pepicons-pencil-letter-open-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.5 11a.5.5 0 0 1 .5.5V20h14v-8.5a.5.5 0 0 1 1 0v9a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5"></svg:path><svg:path d="M6 8.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v4.67a.5.5 0 0 1-.223.416l-6.5 4.33a.5.5 0 0 1-.554 0l-6.5-4.33A.5.5 0 0 1 6 13.17zM7 9v3.902l6 3.997l6-3.997V9z"></svg:path><svg:path d="M12.723 5.084a.5.5 0 0 1 .554 0l4.5 3l-.554.832L13 6.101L8.777 8.916l-.554-.832zm7.131 5.062l1 1l-.708.708l-1-1zm-13 .708l-1 1l-.708-.708l1-1zM9.75 11a.25.25 0 0 1 .25-.25h6a.25.25 0 1 1 0 .5h-6a.25.25 0 0 1-.25-.25m.5 2a.25.25 0 0 1 .25-.25h5a.25.25 0 1 1 0 .5h-5a.25.25 0 0 1-.25-.25"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilLetterOpenCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLetterOpenCircleFilledIcon],svg[pepicons-pencil-letter-open-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilLetterOpenCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.5 11a.5.5 0 0 1 .5.5V20h14v-8.5a.5.5 0 0 1 1 0v9a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5"></svg:path><svg:path d="M6 8.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v4.67a.5.5 0 0 1-.223.416l-6.5 4.33a.5.5 0 0 1-.554 0l-6.5-4.33A.5.5 0 0 1 6 13.17zM7 9v3.902l6 3.997l6-3.997V9z"></svg:path><svg:path d="M12.723 5.084a.5.5 0 0 1 .554 0l4.5 3l-.554.832L13 6.101L8.777 8.916l-.554-.832zm7.131 5.062l1 1l-.708.708l-1-1zm-13 .708l-1 1l-.708-.708l1-1zM9.75 11a.25.25 0 0 1 .25-.25h6a.25.25 0 1 1 0 .5h-6a.25.25 0 0 1-.25-.25m.5 2a.25.25 0 0 1 .25-.25h5a.25.25 0 1 1 0 .5h-5a.25.25 0 0 1-.25-.25"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilLetterOpenCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilLetterOpenCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLetterOpenCircleOffIcon],svg[pepicons-pencil-letter-open-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.5 11a.5.5 0 0 1 .5.5V20h14v-8.5a.5.5 0 0 1 1 0v9a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6 8.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v4.67a.5.5 0 0 1-.223.416l-6.5 4.33a.5.5 0 0 1-.554 0l-6.5-4.33A.5.5 0 0 1 6 13.17zM7 9v3.902l6 3.997l6-3.997V9z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.723 5.084a.5.5 0 0 1 .554 0l4.5 3l-.554.832L13 6.101L8.777 8.916l-.554-.832zm7.131 5.062l1 1l-.708.708l-1-1zm-13 .708l-1 1l-.708-.708l1-1zM9.75 11a.25.25 0 0 1 .25-.25h6a.25.25 0 1 1 0 .5h-6a.25.25 0 0 1-.25-.25m.5 2a.25.25 0 0 1 .25-.25h5a.25.25 0 1 1 0 .5h-5a.25.25 0 0 1-.25-.25" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilLetterOpenCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLetterOpenOffIcon],svg[pepicons-pencil-letter-open-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M2.5 8a.5.5 0 0 1 .5.5V17h14V8.5a.5.5 0 0 1 1 0v9a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3 5.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v4.67a.5.5 0 0 1-.223.416l-6.5 4.33a.5.5 0 0 1-.554 0l-6.5-4.33A.5.5 0 0 1 3 10.17zM4 6v3.902l6 3.997l6-3.997V6z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.723 2.084a.5.5 0 0 1 .554 0l4.5 3l-.554.832L10 3.101L5.777 5.916l-.554-.832zm7.131 5.062l1 1l-.708.708l-1-1zm-13 .708l-1 1l-.708-.708l1-1zM6.75 8A.25.25 0 0 1 7 7.75h6a.25.25 0 1 1 0 .5H7A.25.25 0 0 1 6.75 8m.5 2a.25.25 0 0 1 .25-.25h5a.25.25 0 1 1 0 .5h-5a.25.25 0 0 1-.25-.25" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilLetterOpenOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLineSlantDownIcon],svg[pepicons-pencil-line-slant-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.454.454a.5.5 0 0 1 .707 0l18.385 18.385a.5.5 0 0 1-.707.707L.454 1.16a.5.5 0 0 1 0-.707" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPencilLineSlantDownIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLineSlantDownCircleIcon],svg[pepicons-pencil-line-slant-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3.454 3.454a.5.5 0 0 1 .707 0l18.385 18.385a.5.5 0 0 1-.707.707L3.454 4.16a.5.5 0 0 1 0-.707"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilLineSlantDownCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLineSlantDownCircleFilledIcon],svg[pepicons-pencil-line-slant-down-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilLineSlantDownCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M3.454 3.454a.5.5 0 0 1 .707 0l18.385 18.385a.5.5 0 0 1-.707.707L3.454 4.16a.5.5 0 0 1 0-.707" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilLineSlantDownCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilLineSlantDownCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLineSlantDownCircleOffIcon],svg[pepicons-pencil-line-slant-down-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3.454 3.454a.5.5 0 0 1 .707 0l18.385 18.385a.5.5 0 0 1-.707.707L3.454 4.16a.5.5 0 0 1 0-.707" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilLineSlantDownCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLineSlantDownOffIcon],svg[pepicons-pencil-line-slant-down-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M.454.454a.5.5 0 0 1 .707 0l18.385 18.385a.5.5 0 0 1-.707.707L.454 1.16a.5.5 0 0 1 0-.707" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilLineSlantDownOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLineSlantUpIcon],svg[pepicons-pencil-line-slant-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.454 19.546a.5.5 0 0 1 0-.707L18.839.454a.5.5 0 1 1 .707.707L1.16 19.546a.5.5 0 0 1-.707 0" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPencilLineSlantUpIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLineSlantUpCircleIcon],svg[pepicons-pencil-line-slant-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3.454 22.546a.5.5 0 0 1 0-.707L21.839 3.454a.5.5 0 1 1 .707.707L4.16 22.546a.5.5 0 0 1-.707 0"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilLineSlantUpCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLineSlantUpCircleFilledIcon],svg[pepicons-pencil-line-slant-up-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilLineSlantUpCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M3.454 22.546a.5.5 0 0 1 0-.707L21.839 3.454a.5.5 0 1 1 .707.707L4.16 22.546a.5.5 0 0 1-.707 0" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilLineSlantUpCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilLineSlantUpCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLineSlantUpCircleOffIcon],svg[pepicons-pencil-line-slant-up-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3.454 22.546a.5.5 0 0 1 0-.707L21.839 3.454a.5.5 0 1 1 .707.707L4.16 22.546a.5.5 0 0 1-.707 0" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilLineSlantUpCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLineSlantUpOffIcon],svg[pepicons-pencil-line-slant-up-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M.454 19.546a.5.5 0 0 1 0-.707L18.839.454a.5.5 0 1 1 .707.707L1.16 19.546a.5.5 0 0 1-.707 0" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilLineSlantUpOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLineXIcon],svg[pepicons-pencil-line-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.5 10a.5.5 0 0 1 .5-.5h18a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPencilLineXIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLineXCircleIcon],svg[pepicons-pencil-line-x-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3.5 13a.5.5 0 0 1 .5-.5h18a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilLineXCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLineXCircleFilledIcon],svg[pepicons-pencil-line-x-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilLineXCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M3.5 13a.5.5 0 0 1 .5-.5h18a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilLineXCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilLineXCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLineXCircleOffIcon],svg[pepicons-pencil-line-x-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3.5 13a.5.5 0 0 1 .5-.5h18a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilLineXCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLineXOffIcon],svg[pepicons-pencil-line-x-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M.5 10a.5.5 0 0 1 .5-.5h18a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilLineXOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLineYIcon],svg[pepicons-pencil-line-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 .5a.5.5 0 0 0-.5.5v18a.5.5 0 0 0 1 0V1a.5.5 0 0 0-.5-.5" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPencilLineYIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLineYCircleIcon],svg[pepicons-pencil-line-y-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 3.5a.5.5 0 0 0-.5.5v18a.5.5 0 0 0 1 0V4a.5.5 0 0 0-.5-.5"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilLineYCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLineYCircleFilledIcon],svg[pepicons-pencil-line-y-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilLineYCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M13 3.5a.5.5 0 0 0-.5.5v18a.5.5 0 0 0 1 0V4a.5.5 0 0 0-.5-.5" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilLineYCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilLineYCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLineYCircleOffIcon],svg[pepicons-pencil-line-y-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 3.5a.5.5 0 0 0-.5.5v18a.5.5 0 0 0 1 0V4a.5.5 0 0 0-.5-.5" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilLineYCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLineYOffIcon],svg[pepicons-pencil-line-y-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 .5a.5.5 0 0 0-.5.5v18a.5.5 0 0 0 1 0V1a.5.5 0 0 0-.5-.5" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilLineYOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilListIcon],svg[pepicons-pencil-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.5 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 4a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 4a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path><svg:path fill-rule="evenodd" d="M7.5 6.5A.5.5 0 0 1 8 6h8a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5m0 4A.5.5 0 0 1 8 10h8a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5m0 4A.5.5 0 0 1 8 14h8a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilListIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilListCircleIcon],svg[pepicons-pencil-list-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.5 9a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 4a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 4a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path><svg:path fill-rule="evenodd" d="M10.5 9.5A.5.5 0 0 1 11 9h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilListCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilListCircleFilledIcon],svg[pepicons-pencil-list-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilListCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M9.5 9a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 4a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 4a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path><svg:path fill-rule="evenodd" d="M10.5 9.5A.5.5 0 0 1 11 9h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilListCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilListCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilListCircleOffIcon],svg[pepicons-pencil-list-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.5 9a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 4a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 4a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path><svg:path fill-rule="evenodd" d="M10.5 9.5A.5.5 0 0 1 11 9h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilListCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilListOffIcon],svg[pepicons-pencil-list-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.5 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 4a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 4a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path><svg:path fill-rule="evenodd" d="M7.5 6.5A.5.5 0 0 1 8 6h8a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5m0 4A.5.5 0 0 1 8 10h8a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5m0 4A.5.5 0 0 1 8 14h8a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilListOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLockClosedIcon],svg[pepicons-pencil-lock-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.5 12.5a2 2 0 1 0 4 0a2 2 0 0 0-4 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12 7.5H7A3.5 3.5 0 0 0 3.5 11v3A3.5 3.5 0 0 0 7 17.5h5a3.5 3.5 0 0 0 3.5-3.5v-3A3.5 3.5 0 0 0 12 7.5M4.5 11A2.5 2.5 0 0 1 7 8.5h5a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 14z" clip-rule="evenodd"></svg:path><svg:path d="M7 8a.5.5 0 0 1-1 0V4.5a3.5 3.5 0 1 1 7 0V8a.5.5 0 0 1-1 0V4.5a2.5 2.5 0 0 0-5 0z"></svg:path></svg:g>`,
})
export class PepiconsPencilLockClosedIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLockClosedCircleIcon],svg[pepicons-pencil-lock-closed-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10.5 15.5a2 2 0 1 0 4 0a2 2 0 0 0-4 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15 10.5h-5A3.5 3.5 0 0 0 6.5 14v3a3.5 3.5 0 0 0 3.5 3.5h5a3.5 3.5 0 0 0 3.5-3.5v-3a3.5 3.5 0 0 0-3.5-3.5M7.5 14a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 7.5 17z" clip-rule="evenodd"></svg:path><svg:path d="M10 11a.5.5 0 0 1-1 0V7.5a3.5 3.5 0 1 1 7 0V11a.5.5 0 0 1-1 0V7.5a2.5 2.5 0 0 0-5 0z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilLockClosedCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLockClosedCircleFilledIcon],svg[pepicons-pencil-lock-closed-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilLockClosedCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M10.5 15.5a2 2 0 1 0 4 0a2 2 0 0 0-4 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15 10.5h-5A3.5 3.5 0 0 0 6.5 14v3a3.5 3.5 0 0 0 3.5 3.5h5a3.5 3.5 0 0 0 3.5-3.5v-3a3.5 3.5 0 0 0-3.5-3.5M7.5 14a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 7.5 17z" clip-rule="evenodd"></svg:path><svg:path d="M10 11a.5.5 0 0 1-1 0V7.5a3.5 3.5 0 1 1 7 0V11a.5.5 0 0 1-1 0V7.5a2.5 2.5 0 0 0-5 0z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilLockClosedCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilLockClosedCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLockClosedCircleOffIcon],svg[pepicons-pencil-lock-closed-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10.5 15.5a2 2 0 1 0 4 0a2 2 0 0 0-4 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15 10.5h-5A3.5 3.5 0 0 0 6.5 14v3a3.5 3.5 0 0 0 3.5 3.5h5a3.5 3.5 0 0 0 3.5-3.5v-3a3.5 3.5 0 0 0-3.5-3.5M7.5 14a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 7.5 17z" clip-rule="evenodd"></svg:path><svg:path d="M10 11a.5.5 0 0 1-1 0V7.5a3.5 3.5 0 1 1 7 0V11a.5.5 0 0 1-1 0V7.5a2.5 2.5 0 0 0-5 0z"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilLockClosedCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLockClosedOffIcon],svg[pepicons-pencil-lock-closed-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.5 12.5a2 2 0 1 0 4 0a2 2 0 0 0-4 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12 7.5H7A3.5 3.5 0 0 0 3.5 11v3A3.5 3.5 0 0 0 7 17.5h5a3.5 3.5 0 0 0 3.5-3.5v-3A3.5 3.5 0 0 0 12 7.5M4.5 11A2.5 2.5 0 0 1 7 8.5h5a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 14z" clip-rule="evenodd"></svg:path><svg:path d="M7 8a.5.5 0 0 1-1 0V4.5a3.5 3.5 0 1 1 7 0V8a.5.5 0 0 1-1 0V4.5a2.5 2.5 0 0 0-5 0z"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilLockClosedOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLockOpenIcon],svg[pepicons-pencil-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.5 12.5a2 2 0 1 0 4 0a2 2 0 0 0-4 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12 7.5H7A3.5 3.5 0 0 0 3.5 11v3A3.5 3.5 0 0 0 7 17.5h5a3.5 3.5 0 0 0 3.5-3.5v-3A3.5 3.5 0 0 0 12 7.5M4.5 11A2.5 2.5 0 0 1 7 8.5h5a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 14z" clip-rule="evenodd"></svg:path><svg:path d="M7 8a.5.5 0 0 1-1 0V4.5a3.5 3.5 0 1 1 7 0v1a.5.5 0 0 1-1 0v-1a2.5 2.5 0 0 0-5 0z"></svg:path></svg:g>`,
})
export class PepiconsPencilLockOpenIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLockOpenCircleIcon],svg[pepicons-pencil-lock-open-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10.5 15.5a2 2 0 1 0 4 0a2 2 0 0 0-4 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15 10.5h-5A3.5 3.5 0 0 0 6.5 14v3a3.5 3.5 0 0 0 3.5 3.5h5a3.5 3.5 0 0 0 3.5-3.5v-3a3.5 3.5 0 0 0-3.5-3.5M7.5 14a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 7.5 17z" clip-rule="evenodd"></svg:path><svg:path d="M10 11a.5.5 0 0 1-1 0V7.5a3.5 3.5 0 1 1 7 0v1a.5.5 0 0 1-1 0v-1a2.5 2.5 0 0 0-5 0z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilLockOpenCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLockOpenCircleFilledIcon],svg[pepicons-pencil-lock-open-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilLockOpenCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M10.5 15.5a2 2 0 1 0 4 0a2 2 0 0 0-4 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15 10.5h-5A3.5 3.5 0 0 0 6.5 14v3a3.5 3.5 0 0 0 3.5 3.5h5a3.5 3.5 0 0 0 3.5-3.5v-3a3.5 3.5 0 0 0-3.5-3.5M7.5 14a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 7.5 17z" clip-rule="evenodd"></svg:path><svg:path d="M10 11a.5.5 0 0 1-1 0V7.5a3.5 3.5 0 1 1 7 0v1a.5.5 0 0 1-1 0v-1a2.5 2.5 0 0 0-5 0z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilLockOpenCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilLockOpenCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLockOpenCircleOffIcon],svg[pepicons-pencil-lock-open-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10.5 15.5a2 2 0 1 0 4 0a2 2 0 0 0-4 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15 10.5h-5A3.5 3.5 0 0 0 6.5 14v3a3.5 3.5 0 0 0 3.5 3.5h5a3.5 3.5 0 0 0 3.5-3.5v-3a3.5 3.5 0 0 0-3.5-3.5M7.5 14a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 7.5 17z" clip-rule="evenodd"></svg:path><svg:path d="M10 11a.5.5 0 0 1-1 0V7.5a3.5 3.5 0 1 1 7 0v1a.5.5 0 0 1-1 0v-1a2.5 2.5 0 0 0-5 0z"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilLockOpenCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLockOpenOffIcon],svg[pepicons-pencil-lock-open-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.5 12.5a2 2 0 1 0 4 0a2 2 0 0 0-4 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12 7.5H7A3.5 3.5 0 0 0 3.5 11v3A3.5 3.5 0 0 0 7 17.5h5a3.5 3.5 0 0 0 3.5-3.5v-3A3.5 3.5 0 0 0 12 7.5M4.5 11A2.5 2.5 0 0 1 7 8.5h5a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 14z" clip-rule="evenodd"></svg:path><svg:path d="M7 8a.5.5 0 0 1-1 0V4.5a3.5 3.5 0 1 1 7 0v1a.5.5 0 0 1-1 0v-1a2.5 2.5 0 0 0-5 0z"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilLockOpenOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLoopIcon],svg[pepicons-pencil-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M4.828 4.828A5 5 0 1 0 11.9 11.9a5 5 0 0 0-7.07-7.07m6.364 6.364a4 4 0 1 1-5.656-5.657a4 4 0 0 1 5.656 5.657" clip-rule="evenodd"></svg:path><svg:path d="M11.192 12.627a1 1 0 0 1 1.415-1.414l2.828 2.829a1 1 0 1 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPencilLoopIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLoopCircleIcon],svg[pepicons-pencil-loop-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.828 7.828A5 5 0 1 0 14.9 14.9a5 5 0 0 0-7.07-7.07m6.364 6.364a4 4 0 1 1-5.656-5.657a4 4 0 0 1 5.656 5.657" clip-rule="evenodd"></svg:path><svg:path d="M14.192 15.627a1 1 0 0 1 1.415-1.414l2.828 2.829a1 1 0 1 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilLoopCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLoopCircleFilledIcon],svg[pepicons-pencil-loop-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilLoopCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M7.828 7.828A5 5 0 1 0 14.9 14.9a5 5 0 0 0-7.07-7.07m6.364 6.364a4 4 0 1 1-5.656-5.657a4 4 0 0 1 5.656 5.657" clip-rule="evenodd"></svg:path><svg:path d="M14.192 15.627a1 1 0 0 1 1.415-1.414l2.828 2.829a1 1 0 1 1-1.414 1.414z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilLoopCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilLoopCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLoopCircleOffIcon],svg[pepicons-pencil-loop-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.828 7.828A5 5 0 1 0 14.9 14.9a5 5 0 0 0-7.07-7.07m6.364 6.364a4 4 0 1 1-5.656-5.657a4 4 0 0 1 5.656 5.657" clip-rule="evenodd"></svg:path><svg:path d="M14.192 15.627a1 1 0 0 1 1.415-1.414l2.828 2.829a1 1 0 1 1-1.414 1.414z"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilLoopCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLoopMinusIcon],svg[pepicons-pencil-loop-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.182 5.182a5.5 5.5 0 1 0 7.778 7.778a5.5 5.5 0 0 0-7.778-7.778m7.071 7.071A4.5 4.5 0 1 1 5.89 5.889a4.5 4.5 0 0 1 6.364 6.364" clip-rule="evenodd"></svg:path><svg:path d="M12 14.121a1 1 0 0 1 1.414-1.414l3.789 3.789a1 1 0 0 1-1.414 1.414zM6.707 9.414a.5.5 0 1 1 0-1h4.485a.5.5 0 0 1 0 1z"></svg:path></svg:g>`,
})
export class PepiconsPencilLoopMinusIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLoopMinusCircleIcon],svg[pepicons-pencil-loop-minus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.182 8.182a5.5 5.5 0 1 0 7.778 7.778a5.5 5.5 0 0 0-7.778-7.778m7.071 7.071A4.5 4.5 0 1 1 8.89 8.889a4.5 4.5 0 0 1 6.364 6.364" clip-rule="evenodd"></svg:path><svg:path d="M15 17.121a1 1 0 0 1 1.414-1.414l3.789 3.789a1 1 0 0 1-1.414 1.414zm-5.293-4.707a.5.5 0 1 1 0-1h4.485a.5.5 0 0 1 0 1z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilLoopMinusCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLoopMinusCircleFilledIcon],svg[pepicons-pencil-loop-minus-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilLoopMinusCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M8.182 8.182a5.5 5.5 0 1 0 7.778 7.778a5.5 5.5 0 0 0-7.778-7.778m7.071 7.071A4.5 4.5 0 1 1 8.89 8.889a4.5 4.5 0 0 1 6.364 6.364" clip-rule="evenodd"></svg:path><svg:path d="M15 17.121a1 1 0 0 1 1.414-1.414l3.789 3.789a1 1 0 0 1-1.414 1.414zm-5.293-4.707a.5.5 0 1 1 0-1h4.485a.5.5 0 0 1 0 1z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilLoopMinusCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilLoopMinusCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLoopMinusCircleOffIcon],svg[pepicons-pencil-loop-minus-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.182 8.182a5.5 5.5 0 1 0 7.778 7.778a5.5 5.5 0 0 0-7.778-7.778m7.071 7.071A4.5 4.5 0 1 1 8.89 8.889a4.5 4.5 0 0 1 6.364 6.364" clip-rule="evenodd"></svg:path><svg:path d="M15 17.121a1 1 0 0 1 1.414-1.414l3.789 3.789a1 1 0 0 1-1.414 1.414zm-5.293-4.707a.5.5 0 1 1 0-1h4.485a.5.5 0 0 1 0 1z"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilLoopMinusCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLoopMinusOffIcon],svg[pepicons-pencil-loop-minus-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.182 5.182a5.5 5.5 0 1 0 7.778 7.778a5.5 5.5 0 0 0-7.778-7.778m7.071 7.071A4.5 4.5 0 1 1 5.89 5.889a4.5 4.5 0 0 1 6.364 6.364" clip-rule="evenodd"></svg:path><svg:path d="M12 14.121a1 1 0 0 1 1.414-1.414l3.789 3.789a1 1 0 0 1-1.414 1.414zM6.707 9.414a.5.5 0 1 1 0-1h4.485a.5.5 0 0 1 0 1z"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilLoopMinusOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLoopOffIcon],svg[pepicons-pencil-loop-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M4.828 4.828A5 5 0 1 0 11.9 11.9a5 5 0 0 0-7.07-7.07m6.364 6.364a4 4 0 1 1-5.656-5.657a4 4 0 0 1 5.656 5.657" clip-rule="evenodd"></svg:path><svg:path d="M11.192 12.627a1 1 0 0 1 1.415-1.414l2.828 2.829a1 1 0 1 1-1.414 1.414z"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilLoopOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLoopPlusIcon],svg[pepicons-pencil-loop-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.182 5.182a5.5 5.5 0 1 0 7.778 7.778a5.5 5.5 0 0 0-7.778-7.778m7.071 7.071A4.5 4.5 0 1 1 5.89 5.889a4.5 4.5 0 0 1 6.364 6.364" clip-rule="evenodd"></svg:path><svg:path d="M12 14.121a1 1 0 0 1 1.414-1.414l3.789 3.789a1 1 0 0 1-1.414 1.414zM7.207 9.664a.5.5 0 1 1 0-1h4a.5.5 0 1 1 0 1z"></svg:path><svg:path d="M8.707 7.164a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0z"></svg:path></svg:g>`,
})
export class PepiconsPencilLoopPlusIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLoopPlusCircleIcon],svg[pepicons-pencil-loop-plus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.182 8.182a5.5 5.5 0 1 0 7.778 7.778a5.5 5.5 0 0 0-7.778-7.778m7.071 7.071A4.5 4.5 0 1 1 8.89 8.889a4.5 4.5 0 0 1 6.364 6.364" clip-rule="evenodd"></svg:path><svg:path d="M15 17.121a1 1 0 0 1 1.414-1.414l3.789 3.789a1 1 0 0 1-1.414 1.414zm-4.793-4.457a.5.5 0 1 1 0-1h4a.5.5 0 1 1 0 1z"></svg:path><svg:path d="M11.707 10.164a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilLoopPlusCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLoopPlusCircleFilledIcon],svg[pepicons-pencil-loop-plus-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilLoopPlusCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M8.182 8.182a5.5 5.5 0 1 0 7.778 7.778a5.5 5.5 0 0 0-7.778-7.778m7.071 7.071A4.5 4.5 0 1 1 8.89 8.889a4.5 4.5 0 0 1 6.364 6.364" clip-rule="evenodd"></svg:path><svg:path d="M15 17.121a1 1 0 0 1 1.414-1.414l3.789 3.789a1 1 0 0 1-1.414 1.414zm-4.793-4.457a.5.5 0 1 1 0-1h4a.5.5 0 1 1 0 1z"></svg:path><svg:path d="M11.707 10.164a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilLoopPlusCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilLoopPlusCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLoopPlusCircleOffIcon],svg[pepicons-pencil-loop-plus-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.182 8.182a5.5 5.5 0 1 0 7.778 7.778a5.5 5.5 0 0 0-7.778-7.778m7.071 7.071A4.5 4.5 0 1 1 8.89 8.889a4.5 4.5 0 0 1 6.364 6.364" clip-rule="evenodd"></svg:path><svg:path d="M15 17.121a1 1 0 0 1 1.414-1.414l3.789 3.789a1 1 0 0 1-1.414 1.414zm-4.793-4.457a.5.5 0 1 1 0-1h4a.5.5 0 1 1 0 1z"></svg:path><svg:path d="M11.707 10.164a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0z"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilLoopPlusCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLoopPlusOffIcon],svg[pepicons-pencil-loop-plus-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.182 5.182a5.5 5.5 0 1 0 7.778 7.778a5.5 5.5 0 0 0-7.778-7.778m7.071 7.071A4.5 4.5 0 1 1 5.89 5.889a4.5 4.5 0 0 1 6.364 6.364" clip-rule="evenodd"></svg:path><svg:path d="M12 14.121a1 1 0 0 1 1.414-1.414l3.789 3.789a1 1 0 0 1-1.414 1.414zM7.207 9.664a.5.5 0 1 1 0-1h4a.5.5 0 1 1 0 1z"></svg:path><svg:path d="M8.707 7.164a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0z"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilLoopPlusOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMagnetIcon],svg[pepicons-pencil-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.132 3.646a.5.5 0 0 1 .707 0l3.03 3.03a.5.5 0 0 1 0 .708l-4.242 4.243a1.214 1.214 0 1 0 1.717 1.717L12.587 9.1a.5.5 0 0 1 .707 0l3.03 3.03a.5.5 0 0 1 0 .708l-4.243 4.242A6.5 6.5 0 0 1 2.89 7.89zm.353 1.061l-3.889 3.89a5.5 5.5 0 1 0 7.778 7.777l3.89-3.889l-2.324-2.323l-3.889 3.889A2.214 2.214 0 1 1 5.92 10.92l3.889-3.89z"></svg:path><svg:path d="m7.485 10.06l-3.03-3.03l.707-.707l3.03 3.03zm5.455 5.456l-3.03-3.03l.707-.708l3.03 3.03zm-.353-8.552a.5.5 0 0 1-.279-.65l1.175-2.937l1.53.51l1.01-2.103a.5.5 0 0 1 .9.432l-1.39 2.898l-1.471-.49l-.825 2.062a.5.5 0 0 1-.65.278"></svg:path></svg:g>`,
})
export class PepiconsPencilMagnetIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMagnetCircleIcon],svg[pepicons-pencil-magnet-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.132 6.646a.5.5 0 0 1 .707 0l3.03 3.03a.5.5 0 0 1 0 .708l-4.242 4.243a1.214 1.214 0 1 0 1.717 1.717l4.243-4.243a.5.5 0 0 1 .707 0l3.03 3.03a.5.5 0 0 1 0 .708l-4.243 4.242A6.5 6.5 0 0 1 5.89 10.89zm.353 1.061l-3.889 3.89a5.5 5.5 0 1 0 7.778 7.777l3.89-3.889l-2.324-2.323l-3.889 3.889A2.214 2.214 0 1 1 8.92 13.92l3.889-3.89z"></svg:path><svg:path d="m10.485 13.06l-3.03-3.03l.707-.707l3.03 3.03zm5.455 5.456l-3.03-3.03l.707-.708l3.03 3.03zm-.353-8.552a.5.5 0 0 1-.279-.65l1.175-2.937l1.53.51l1.01-2.103a.5.5 0 0 1 .9.432l-1.39 2.898l-1.471-.49l-.825 2.062a.5.5 0 0 1-.65.278"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilMagnetCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMagnetCircleFilledIcon],svg[pepicons-pencil-magnet-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilMagnetCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.132 6.646a.5.5 0 0 1 .707 0l3.03 3.03a.5.5 0 0 1 0 .708l-4.242 4.243a1.214 1.214 0 1 0 1.717 1.717l4.243-4.243a.5.5 0 0 1 .707 0l3.03 3.03a.5.5 0 0 1 0 .708l-4.243 4.242A6.5 6.5 0 0 1 5.89 10.89zm.353 1.061l-3.889 3.89a5.5 5.5 0 1 0 7.778 7.777l3.89-3.889l-2.324-2.323l-3.889 3.889A2.214 2.214 0 1 1 8.92 13.92l3.889-3.89z"></svg:path><svg:path d="m10.485 13.06l-3.03-3.03l.707-.707l3.03 3.03zm5.455 5.456l-3.03-3.03l.707-.708l3.03 3.03zm-.353-8.552a.5.5 0 0 1-.279-.65l1.175-2.937l1.53.51l1.01-2.103a.5.5 0 0 1 .9.432l-1.39 2.898l-1.471-.49l-.825 2.062a.5.5 0 0 1-.65.278"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilMagnetCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilMagnetCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMagnetCircleOffIcon],svg[pepicons-pencil-magnet-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.132 6.646a.5.5 0 0 1 .707 0l3.03 3.03a.5.5 0 0 1 0 .708l-4.242 4.243a1.214 1.214 0 1 0 1.717 1.717l4.243-4.243a.5.5 0 0 1 .707 0l3.03 3.03a.5.5 0 0 1 0 .708l-4.243 4.242A6.5 6.5 0 0 1 5.89 10.89zm.353 1.061l-3.889 3.89a5.5 5.5 0 1 0 7.778 7.777l3.89-3.889l-2.324-2.323l-3.889 3.889A2.214 2.214 0 1 1 8.92 13.92l3.889-3.89z"></svg:path><svg:path d="m10.485 13.06l-3.03-3.03l.707-.707l3.03 3.03zm5.455 5.456l-3.03-3.03l.707-.708l3.03 3.03zm-.353-8.552a.5.5 0 0 1-.279-.65l1.175-2.937l1.53.51l1.01-2.103a.5.5 0 0 1 .9.432l-1.39 2.898l-1.471-.49l-.825 2.062a.5.5 0 0 1-.65.278"></svg:path></svg:g><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMagnetCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMagnetOffIcon],svg[pepicons-pencil-magnet-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.132 3.646a.5.5 0 0 1 .707 0l3.03 3.03a.5.5 0 0 1 0 .708l-4.242 4.243a1.214 1.214 0 1 0 1.717 1.717L12.587 9.1a.5.5 0 0 1 .707 0l3.03 3.03a.5.5 0 0 1 0 .708l-4.243 4.242A6.5 6.5 0 0 1 2.89 7.89zm.353 1.061l-3.889 3.89a5.5 5.5 0 1 0 7.778 7.777l3.89-3.889l-2.324-2.323l-3.889 3.889A2.214 2.214 0 1 1 5.92 10.92l3.889-3.89z"></svg:path><svg:path d="m7.485 10.06l-3.03-3.03l.707-.707l3.03 3.03zm5.455 5.456l-3.03-3.03l.707-.708l3.03 3.03zm-.353-8.552a.5.5 0 0 1-.279-.65l1.175-2.937l1.53.51l1.01-2.103a.5.5 0 0 1 .9.432l-1.39 2.898l-1.471-.49l-.825 2.062a.5.5 0 0 1-.65.278"></svg:path></svg:g><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilMagnetOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMapIcon],svg[pepicons-pencil-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 8.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.5 6.286C5.5 8.959 8.153 13.5 10 13.5c1.848 0 4.5-4.541 4.5-7.214C14.5 3.65 12.493 1.5 10 1.5S5.5 3.65 5.5 6.286m8 0c0 2.193-2.348 6.214-3.5 6.214c-1.151 0-3.5-4.02-3.5-6.214C6.5 4.187 8.075 2.5 10 2.5s3.5 1.687 3.5 3.786" clip-rule="evenodd"></svg:path><svg:path d="M13.435 9.14a.5.5 0 0 1 .369-.929a3 3 0 0 1 1.74 1.84l1.334 4A3 3 0 0 1 14.03 18H5.97a3 3 0 0 1-2.846-3.949l1.333-4A3 3 0 0 1 6.24 8.194a.5.5 0 1 1 .355.935a2 2 0 0 0-1.19 1.239l-1.333 4A2 2 0 0 0 5.97 17h8.062a2 2 0 0 0 1.897-2.633l-1.332-4a2 2 0 0 0-1.16-1.226"></svg:path></svg:g>`,
})
export class PepiconsPencilMapIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMapCircleIcon],svg[pepicons-pencil-map-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 11.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.5 9.286c0 2.673 2.653 7.214 4.5 7.214c1.848 0 4.5-4.541 4.5-7.214C17.5 6.65 15.493 4.5 13 4.5S8.5 6.65 8.5 9.286m8 0c0 2.193-2.348 6.214-3.5 6.214c-1.151 0-3.5-4.02-3.5-6.214C9.5 7.187 11.075 5.5 13 5.5s3.5 1.687 3.5 3.786" clip-rule="evenodd"></svg:path><svg:path d="M16.435 12.14a.5.5 0 0 1 .369-.929a3 3 0 0 1 1.74 1.84l1.334 4A3 3 0 0 1 17.03 21H8.97a3 3 0 0 1-2.846-3.949l1.333-4a3 3 0 0 1 1.783-1.857a.5.5 0 1 1 .355.935a2 2 0 0 0-1.19 1.239l-1.333 4A2 2 0 0 0 8.97 20h8.062a2 2 0 0 0 1.897-2.633l-1.332-4a2 2 0 0 0-1.16-1.226"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMapCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMapCircleFilledIcon],svg[pepicons-pencil-map-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilMapCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M13 11.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.5 9.286c0 2.673 2.653 7.214 4.5 7.214c1.848 0 4.5-4.541 4.5-7.214C17.5 6.65 15.493 4.5 13 4.5S8.5 6.65 8.5 9.286m8 0c0 2.193-2.348 6.214-3.5 6.214c-1.151 0-3.5-4.02-3.5-6.214C9.5 7.187 11.075 5.5 13 5.5s3.5 1.687 3.5 3.786" clip-rule="evenodd"></svg:path><svg:path d="M16.435 12.14a.5.5 0 0 1 .369-.929a3 3 0 0 1 1.74 1.84l1.334 4A3 3 0 0 1 17.03 21H8.97a3 3 0 0 1-2.846-3.949l1.333-4a3 3 0 0 1 1.783-1.857a.5.5 0 1 1 .355.935a2 2 0 0 0-1.19 1.239l-1.333 4A2 2 0 0 0 8.97 20h8.062a2 2 0 0 0 1.897-2.633l-1.332-4a2 2 0 0 0-1.16-1.226"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilMapCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilMapCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMapCircleOffIcon],svg[pepicons-pencil-map-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 11.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.5 9.286c0 2.673 2.653 7.214 4.5 7.214c1.848 0 4.5-4.541 4.5-7.214C17.5 6.65 15.493 4.5 13 4.5S8.5 6.65 8.5 9.286m8 0c0 2.193-2.348 6.214-3.5 6.214c-1.151 0-3.5-4.02-3.5-6.214C9.5 7.187 11.075 5.5 13 5.5s3.5 1.687 3.5 3.786" clip-rule="evenodd"></svg:path><svg:path d="M16.435 12.14a.5.5 0 0 1 .369-.929a3 3 0 0 1 1.74 1.84l1.334 4A3 3 0 0 1 17.03 21H8.97a3 3 0 0 1-2.846-3.949l1.333-4a3 3 0 0 1 1.783-1.857a.5.5 0 1 1 .355.935a2 2 0 0 0-1.19 1.239l-1.333 4A2 2 0 0 0 8.97 20h8.062a2 2 0 0 0 1.897-2.633l-1.332-4a2 2 0 0 0-1.16-1.226"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMapCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMapOffIcon],svg[pepicons-pencil-map-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 8.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.5 6.286C5.5 8.959 8.153 13.5 10 13.5c1.848 0 4.5-4.541 4.5-7.214C14.5 3.65 12.493 1.5 10 1.5S5.5 3.65 5.5 6.286m8 0c0 2.193-2.348 6.214-3.5 6.214c-1.151 0-3.5-4.02-3.5-6.214C6.5 4.187 8.075 2.5 10 2.5s3.5 1.687 3.5 3.786" clip-rule="evenodd"></svg:path><svg:path d="M13.435 9.14a.5.5 0 0 1 .369-.929a3 3 0 0 1 1.74 1.84l1.334 4A3 3 0 0 1 14.03 18H5.97a3 3 0 0 1-2.846-3.949l1.333-4A3 3 0 0 1 6.24 8.194a.5.5 0 1 1 .355.935a2 2 0 0 0-1.19 1.239l-1.333 4A2 2 0 0 0 5.97 17h8.062a2 2 0 0 0 1.897-2.633l-1.332-4a2 2 0 0 0-1.16-1.226"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilMapOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMegaphoneIcon],svg[pepicons-pencil-megaphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.4 4.882v4.436l7.6 2.073V2.809zm-1 4.436a1 1 0 0 0 .737.965l7.6 2.073A1 1 0 0 0 15 11.39V2.809a1 1 0 0 0-1.263-.965l-7.6 2.073a1 1 0 0 0-.737.965z"></svg:path><svg:path d="M3.456 9.3H5.5V4.9H3.453a3.42 3.42 0 0 0 .003 4.4m2.044 1a1 1 0 0 0 1-1V4.9a1 1 0 0 0-1-1H3.253a.55.55 0 0 0-.4.172c-1.602 1.691-1.595 4.353-.002 6.052a.56.56 0 0 0 .405.176z"></svg:path><svg:path d="m7.269 10.87l-2.51-.28l-.978 3.91h2.636zm-2.4-1.273a1 1 0 0 0-1.081.75l-.977 3.91a1 1 0 0 0 .97 1.243h2.636a1 1 0 0 0 .974-.772l.852-3.63a1 1 0 0 0-.864-1.223zm13.747-6.374a.5.5 0 0 1-.139.693l-1.5 1a.5.5 0 1 1-.554-.832l1.5-1a.5.5 0 0 1 .693.139M16.2 7.1a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5m.117 2.23a.5.5 0 0 1 .705-.06l1.38 1.159a.5.5 0 0 1-.643.765l-1.38-1.16a.5.5 0 0 1-.062-.704"></svg:path></svg:g>`,
})
export class PepiconsPencilMegaphoneIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMegaphoneCircleIcon],svg[pepicons-pencil-megaphone-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.4 7.882v4.436l7.6 2.073V5.809zm-1 4.436a1 1 0 0 0 .737.965l7.6 2.073A1 1 0 0 0 18 14.39V5.809a1 1 0 0 0-1.263-.965l-7.6 2.073a1 1 0 0 0-.737.965z"></svg:path><svg:path d="M6.456 12.3H8.5V7.9H6.453a3.42 3.42 0 0 0 .003 4.4m2.044 1a1 1 0 0 0 1-1V7.9a1 1 0 0 0-1-1H6.253a.55.55 0 0 0-.4.172c-1.602 1.691-1.595 4.353-.002 6.052a.56.56 0 0 0 .405.176z"></svg:path><svg:path d="m10.269 13.87l-2.51-.28l-.978 3.91h2.636zm-2.4-1.273a1 1 0 0 0-1.081.75l-.977 3.91a1 1 0 0 0 .97 1.243h2.636a1 1 0 0 0 .974-.772l.852-3.63a1 1 0 0 0-.864-1.223zm13.747-6.374a.5.5 0 0 1-.139.693l-1.5 1a.5.5 0 1 1-.554-.832l1.5-1a.5.5 0 0 1 .693.139M19.2 10.1a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5m.117 2.23a.5.5 0 0 1 .705-.06l1.38 1.159a.5.5 0 0 1-.643.765l-1.38-1.16a.5.5 0 0 1-.062-.704"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilMegaphoneCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMegaphoneCircleFilledIcon],svg[pepicons-pencil-megaphone-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilMegaphoneCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.4 7.882v4.436l7.6 2.073V5.809zm-1 4.436a1 1 0 0 0 .737.965l7.6 2.073A1 1 0 0 0 18 14.39V5.809a1 1 0 0 0-1.263-.965l-7.6 2.073a1 1 0 0 0-.737.965z"></svg:path><svg:path d="M6.456 12.3H8.5V7.9H6.453a3.42 3.42 0 0 0 .003 4.4m2.044 1a1 1 0 0 0 1-1V7.9a1 1 0 0 0-1-1H6.253a.55.55 0 0 0-.4.172c-1.602 1.691-1.595 4.353-.002 6.052a.56.56 0 0 0 .405.176z"></svg:path><svg:path d="m10.269 13.87l-2.51-.28l-.978 3.91h2.636zm-2.4-1.273a1 1 0 0 0-1.081.75l-.977 3.91a1 1 0 0 0 .97 1.243h2.636a1 1 0 0 0 .974-.772l.852-3.63a1 1 0 0 0-.864-1.223zm13.747-6.374a.5.5 0 0 1-.139.693l-1.5 1a.5.5 0 1 1-.554-.832l1.5-1a.5.5 0 0 1 .693.139M19.2 10.1a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5m.117 2.23a.5.5 0 0 1 .705-.06l1.38 1.159a.5.5 0 0 1-.643.765l-1.38-1.16a.5.5 0 0 1-.062-.704"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilMegaphoneCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilMegaphoneCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMegaphoneCircleOffIcon],svg[pepicons-pencil-megaphone-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M9.4 7.882v4.436l7.6 2.073V5.809zm-1 4.436a1 1 0 0 0 .737.965l7.6 2.073A1 1 0 0 0 18 14.39V5.809a1 1 0 0 0-1.263-.965l-7.6 2.073a1 1 0 0 0-.737.965z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.456 12.3H8.5V7.9H6.453a3.42 3.42 0 0 0 .003 4.4m2.044 1a1 1 0 0 0 1-1V7.9a1 1 0 0 0-1-1H6.253a.55.55 0 0 0-.4.172c-1.602 1.691-1.595 4.353-.002 6.052a.56.56 0 0 0 .405.176z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="m10.269 13.87l-2.51-.28l-.978 3.91h2.636zm-2.4-1.273a1 1 0 0 0-1.081.75l-.977 3.91a1 1 0 0 0 .97 1.243h2.636a1 1 0 0 0 .974-.772l.852-3.63a1 1 0 0 0-.864-1.223zm13.747-6.374a.5.5 0 0 1-.139.693l-1.5 1a.5.5 0 1 1-.554-.832l1.5-1a.5.5 0 0 1 .693.139M19.2 10.1a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5m.117 2.23a.5.5 0 0 1 .705-.06l1.38 1.159a.5.5 0 0 1-.643.765l-1.38-1.16a.5.5 0 0 1-.062-.704" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMegaphoneCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMegaphoneOffIcon],svg[pepicons-pencil-megaphone-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.4 4.882v4.436l7.6 2.073V2.809zm-1 4.436a1 1 0 0 0 .737.965l7.6 2.073A1 1 0 0 0 15 11.39V2.809a1 1 0 0 0-1.263-.965l-7.6 2.073a1 1 0 0 0-.737.965z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3.456 9.3H5.5V4.9H3.453a3.42 3.42 0 0 0 .003 4.4m2.044 1a1 1 0 0 0 1-1V4.9a1 1 0 0 0-1-1H3.253a.55.55 0 0 0-.4.172c-1.602 1.691-1.595 4.353-.002 6.052a.56.56 0 0 0 .405.176z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="m7.269 10.87l-2.51-.28l-.978 3.91h2.636zm-2.4-1.273a1 1 0 0 0-1.081.75l-.977 3.91a1 1 0 0 0 .97 1.243h2.636a1 1 0 0 0 .974-.772l.852-3.63a1 1 0 0 0-.864-1.223zm13.747-6.374a.5.5 0 0 1-.139.693l-1.5 1a.5.5 0 1 1-.554-.832l1.5-1a.5.5 0 0 1 .693.139M16.2 7.1a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5m.117 2.23a.5.5 0 0 1 .705-.06l1.38 1.159a.5.5 0 0 1-.643.765l-1.38-1.16a.5.5 0 0 1-.062-.704" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilMegaphoneOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMenuIcon],svg[pepicons-pencil-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 8.5a.5.5 0 0 1 .5-.5h11.308a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m0 8a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h11.308a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPencilMenuIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMenuCircleIcon],svg[pepicons-pencil-menu-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5 11.5a.5.5 0 0 1 .5-.5h11.308a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m0 8a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h11.308a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilMenuCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMenuCircleFilledIcon],svg[pepicons-pencil-menu-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilMenuCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h11.308a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m0 8a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h11.308a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilMenuCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilMenuCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMenuCircleOffIcon],svg[pepicons-pencil-menu-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h11.308a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m0 8a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h11.308a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMenuCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMenuOffIcon],svg[pepicons-pencil-menu-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M2 8.5a.5.5 0 0 1 .5-.5h11.308a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m0 8a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h11.308a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilMenuOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMicrophoneIcon],svg[pepicons-pencil-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.75 4.25a2.25 2.25 0 0 1 4.5 0v3.5a2.25 2.25 0 0 1-4.5 0z" clip-rule="evenodd"></svg:path><svg:path d="M10 17c-2.48 0-4-.217-4-1s1.52-1 4-1s4 .217 4 1s-1.52 1-4 1"></svg:path><svg:path d="M9.5 12.5h1V16h-1z"></svg:path><svg:path d="M14 7.5a.5.5 0 0 1 1 0v1.65c0 2.421-2.254 4.35-5 4.35s-5-1.929-5-4.35V7.5a.5.5 0 0 1 1 0v1.65c0 1.831 1.775 3.35 4 3.35s4-1.519 4-3.35z"></svg:path></svg:g>`,
})
export class PepiconsPencilMicrophoneIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMicrophoneCircleIcon],svg[pepicons-pencil-microphone-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10.75 7.25a2.25 2.25 0 0 1 4.5 0v3.5a2.25 2.25 0 0 1-4.5 0z" clip-rule="evenodd"></svg:path><svg:path d="M13 20c-2.48 0-4-.217-4-1s1.52-1 4-1s4 .217 4 1s-1.52 1-4 1"></svg:path><svg:path d="M12.5 15.5h1V19h-1z"></svg:path><svg:path d="M17 10.5a.5.5 0 0 1 1 0v1.65c0 2.421-2.254 4.35-5 4.35s-5-1.929-5-4.35V10.5a.5.5 0 0 1 1 0v1.65c0 1.831 1.775 3.35 4 3.35s4-1.519 4-3.35z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMicrophoneCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMicrophoneCircleFilledIcon],svg[pepicons-pencil-microphone-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilMicrophoneCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M10.75 7.25a2.25 2.25 0 0 1 4.5 0v3.5a2.25 2.25 0 0 1-4.5 0z" clip-rule="evenodd"></svg:path><svg:path d="M13 20c-2.48 0-4-.217-4-1s1.52-1 4-1s4 .217 4 1s-1.52 1-4 1"></svg:path><svg:path d="M12.5 15.5h1V19h-1z"></svg:path><svg:path d="M17 10.5a.5.5 0 0 1 1 0v1.65c0 2.421-2.254 4.35-5 4.35s-5-1.929-5-4.35V10.5a.5.5 0 0 1 1 0v1.65c0 1.831 1.775 3.35 4 3.35s4-1.519 4-3.35z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilMicrophoneCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilMicrophoneCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMicrophoneCircleOffIcon],svg[pepicons-pencil-microphone-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10.75 7.25a2.25 2.25 0 0 1 4.5 0v3.5a2.25 2.25 0 0 1-4.5 0z" clip-rule="evenodd"></svg:path><svg:path d="M13 20c-2.48 0-4-.217-4-1s1.52-1 4-1s4 .217 4 1s-1.52 1-4 1"></svg:path><svg:path d="M12.5 15.5h1V19h-1z"></svg:path><svg:path d="M17 10.5a.5.5 0 0 1 1 0v1.65c0 2.421-2.254 4.35-5 4.35s-5-1.929-5-4.35V10.5a.5.5 0 0 1 1 0v1.65c0 1.831 1.775 3.35 4 3.35s4-1.519 4-3.35z"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMicrophoneCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMicrophoneHandheldIcon],svg[pepicons-pencil-microphone-handheld-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.474 6.437a2.65 2.65 0 1 0 3.283-4.161a2.65 2.65 0 0 0-3.283 4.16m-.62.785a3.65 3.65 0 1 0 4.522-5.731a3.65 3.65 0 0 0-4.521 5.73"></svg:path><svg:path d="M6.97 5.341a.5.5 0 0 1 .124.696L2.857 12.1a.5.5 0 0 1-.82-.573l4.237-6.062a.5.5 0 0 1 .697-.123m3.703 1.844a.5.5 0 0 0-.706.039l-.23.257l-.275.305a.5.5 0 0 0-.068.063a368 368 0 0 1-2.48 2.74c-.719.79-1.44 1.58-2.485 2.747l.745.667a402 402 0 0 1 2.814-3.106c.788-.864 1.578-1.73 2.492-2.748l.232-.258a.5.5 0 0 0-.039-.706"></svg:path><svg:path d="M2.054 11.503a.5.5 0 0 1 .703-.083l2.355 1.858a.5.5 0 0 1-.62.785l-2.355-1.858a.5.5 0 0 1-.083-.702m6.432-7.731l-.822-1.25l.836-.55l.821 1.25a4.5 4.5 0 0 0 2.235 1.764l1.407.507l-.34.94l-1.406-.507a5.5 5.5 0 0 1-2.731-2.154"></svg:path><svg:path d="m15.65 11.825l-.015.003l-.043.007a42 42 0 0 0-.768.145c-.5.097-1.168.232-1.848.387c-.278.064-.5.112-.685.153c-.375.082-.6.131-.826.202c-.32.099-.632.24-1.38.607c-.406.2-.802.53-1.211.95a22 22 0 0 0-.88.982q-.172.2-.351.404c-.418.477-.866.96-1.358 1.34c-.495.383-1.06.681-1.714.756c-.426.05-.872.05-1.273-.005c-.384-.053-.793-.166-1.087-.398c-.523-.413-.873-1.111-.696-2.069c.049-.263.208-.571.363-.836c.167-.284.373-.59.57-.866a23 23 0 0 1 .705-.94l.05-.06l.012-.017l.005-.006a.5.5 0 0 1 .778.628l-.003.004l-.012.015l-.046.057a22 22 0 0 0-.675.899a12 12 0 0 0-.521.791c-.157.267-.23.44-.243.513c-.109.59.099.918.333 1.102c.085.067.282.148.604.192a4.2 4.2 0 0 0 1.022.003c.414-.048.81-.24 1.217-.554c.41-.317.805-.737 1.217-1.208l.326-.376c.304-.353.62-.72.94-1.049c.442-.452.93-.876 1.487-1.15c.74-.363 1.12-.539 1.524-.664c.269-.084.553-.146.962-.236q.268-.058.624-.139a61 61 0 0 1 2.49-.51l.17-.03l.046-.009l.015-.003a.5.5 0 0 1 .175.985"></svg:path></svg:g>`,
})
export class PepiconsPencilMicrophoneHandheldIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMicrophoneHandheldCircleIcon],svg[pepicons-pencil-microphone-handheld-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.474 9.437a2.65 2.65 0 1 0 3.283-4.161a2.65 2.65 0 0 0-3.283 4.16m-.62.785a3.65 3.65 0 1 0 4.522-5.731a3.65 3.65 0 0 0-4.521 5.73"></svg:path><svg:path d="M9.97 8.341a.5.5 0 0 1 .124.696L5.857 15.1a.5.5 0 0 1-.82-.573l4.237-6.062a.5.5 0 0 1 .697-.123m3.703 1.844a.5.5 0 0 0-.706.039l-.23.257l-.275.305a.5.5 0 0 0-.068.063a368 368 0 0 1-2.48 2.74c-.719.79-1.44 1.58-2.485 2.747l.745.667a424 424 0 0 1 2.813-3.106c.79-.864 1.58-1.73 2.493-2.748l.232-.258a.5.5 0 0 0-.039-.706"></svg:path><svg:path d="M5.054 14.503a.5.5 0 0 1 .703-.083l2.355 1.858a.5.5 0 0 1-.62.785l-2.355-1.858a.5.5 0 0 1-.083-.702m6.432-7.731l-.822-1.25l.836-.55l.821 1.25a4.5 4.5 0 0 0 2.235 1.764l1.407.507l-.34.94l-1.406-.507a5.5 5.5 0 0 1-2.731-2.154"></svg:path><svg:path d="m18.65 14.825l-.015.003l-.043.007a42 42 0 0 0-.768.145c-.5.097-1.169.232-1.848.387c-.278.064-.5.112-.685.153c-.375.082-.6.131-.826.202c-.32.099-.632.24-1.38.607c-.406.2-.802.53-1.211.95a22 22 0 0 0-.88.982q-.172.2-.351.404c-.418.477-.866.96-1.358 1.34c-.495.383-1.06.681-1.714.756c-.426.05-.872.05-1.273-.005c-.384-.053-.793-.166-1.087-.398c-.523-.413-.873-1.111-.696-2.069c.049-.263.208-.571.363-.837c.167-.283.373-.588.57-.865a23 23 0 0 1 .705-.94l.05-.06l.012-.017l.005-.006a.5.5 0 0 1 .778.628l-.003.004l-.012.015l-.046.057a22 22 0 0 0-.675.899a12 12 0 0 0-.521.791c-.157.267-.23.44-.243.513c-.109.59.099.918.333 1.102c.085.067.282.148.604.192a4.2 4.2 0 0 0 1.022.003c.414-.048.81-.24 1.217-.554c.41-.317.805-.737 1.217-1.208l.326-.376c.304-.353.62-.72.94-1.049c.442-.452.93-.876 1.487-1.15c.74-.363 1.12-.539 1.524-.664c.269-.084.553-.146.962-.236q.268-.058.624-.139a61 61 0 0 1 2.49-.51l.17-.03l.046-.009l.015-.003a.5.5 0 0 1 .175.985"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilMicrophoneHandheldCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMicrophoneHandheldCircleFilledIcon],svg[pepicons-pencil-microphone-handheld-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilMicrophoneHandheldCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.474 9.437a2.65 2.65 0 1 0 3.283-4.161a2.65 2.65 0 0 0-3.283 4.16m-.62.785a3.65 3.65 0 1 0 4.522-5.731a3.65 3.65 0 0 0-4.521 5.73"></svg:path><svg:path d="M9.97 8.341a.5.5 0 0 1 .124.696L5.857 15.1a.5.5 0 0 1-.82-.573l4.237-6.062a.5.5 0 0 1 .697-.123m3.703 1.844a.5.5 0 0 0-.706.039l-.23.257l-.275.305a.5.5 0 0 0-.068.063a368 368 0 0 1-2.48 2.74c-.719.79-1.44 1.58-2.485 2.747l.745.667a424 424 0 0 1 2.813-3.106c.79-.864 1.58-1.73 2.493-2.748l.232-.258a.5.5 0 0 0-.039-.706"></svg:path><svg:path d="M5.054 14.503a.5.5 0 0 1 .703-.083l2.355 1.858a.5.5 0 0 1-.62.785l-2.355-1.858a.5.5 0 0 1-.083-.702m6.432-7.731l-.822-1.25l.836-.55l.821 1.25a4.5 4.5 0 0 0 2.235 1.764l1.407.507l-.34.94l-1.406-.507a5.5 5.5 0 0 1-2.731-2.154"></svg:path><svg:path d="m18.65 14.825l-.015.003l-.043.007a42 42 0 0 0-.768.145c-.5.097-1.169.232-1.848.387c-.278.064-.5.112-.685.153c-.375.082-.6.131-.826.202c-.32.099-.632.24-1.38.607c-.406.2-.802.53-1.211.95a22 22 0 0 0-.88.982q-.172.2-.351.404c-.418.477-.866.96-1.358 1.34c-.495.383-1.06.681-1.714.756c-.426.05-.872.05-1.273-.005c-.384-.053-.793-.166-1.087-.398c-.523-.413-.873-1.111-.696-2.069c.049-.263.208-.571.363-.837c.167-.283.373-.588.57-.865a23 23 0 0 1 .705-.94l.05-.06l.012-.017l.005-.006a.5.5 0 0 1 .778.628l-.003.004l-.012.015l-.046.057a22 22 0 0 0-.675.899a12 12 0 0 0-.521.791c-.157.267-.23.44-.243.513c-.109.59.099.918.333 1.102c.085.067.282.148.604.192a4.2 4.2 0 0 0 1.022.003c.414-.048.81-.24 1.217-.554c.41-.317.805-.737 1.217-1.208l.326-.376c.304-.353.62-.72.94-1.049c.442-.452.93-.876 1.487-1.15c.74-.363 1.12-.539 1.524-.664c.269-.084.553-.146.962-.236q.268-.058.624-.139a61 61 0 0 1 2.49-.51l.17-.03l.046-.009l.015-.003a.5.5 0 0 1 .175.985"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilMicrophoneHandheldCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilMicrophoneHandheldCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMicrophoneHandheldCircleOffIcon],svg[pepicons-pencil-microphone-handheld-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.474 9.437a2.65 2.65 0 1 0 3.283-4.161a2.65 2.65 0 0 0-3.283 4.16m-.62.785a3.65 3.65 0 1 0 4.522-5.731a3.65 3.65 0 0 0-4.521 5.73"></svg:path><svg:path d="M9.97 8.341a.5.5 0 0 1 .124.696L5.857 15.1a.5.5 0 0 1-.82-.573l4.237-6.062a.5.5 0 0 1 .697-.123m3.703 1.844a.5.5 0 0 0-.706.039l-.23.257l-.275.305a.5.5 0 0 0-.068.063a368 368 0 0 1-2.48 2.74c-.719.79-1.44 1.58-2.485 2.747l.745.667a424 424 0 0 1 2.813-3.106c.79-.864 1.58-1.73 2.493-2.748l.232-.258a.5.5 0 0 0-.039-.706"></svg:path><svg:path d="M5.054 14.503a.5.5 0 0 1 .703-.083l2.355 1.858a.5.5 0 0 1-.62.785l-2.355-1.858a.5.5 0 0 1-.083-.702m6.432-7.731l-.822-1.25l.836-.55l.821 1.25a4.5 4.5 0 0 0 2.235 1.764l1.407.507l-.34.94l-1.406-.507a5.5 5.5 0 0 1-2.731-2.154"></svg:path><svg:path d="m18.65 14.825l-.015.003l-.043.007a42 42 0 0 0-.768.145c-.5.097-1.169.232-1.848.387c-.278.064-.5.112-.685.153c-.375.082-.6.131-.826.202c-.32.099-.632.24-1.38.607c-.406.2-.802.53-1.211.95a22 22 0 0 0-.88.982q-.172.2-.351.404c-.418.477-.866.96-1.358 1.34c-.495.383-1.06.681-1.714.756c-.426.05-.872.05-1.273-.005c-.384-.053-.793-.166-1.087-.398c-.523-.413-.873-1.111-.696-2.069c.049-.263.208-.571.363-.837c.167-.283.373-.588.57-.865a23 23 0 0 1 .705-.94l.05-.06l.012-.017l.005-.006a.5.5 0 0 1 .778.628l-.003.004l-.012.015l-.046.057a22 22 0 0 0-.675.899a12 12 0 0 0-.521.791c-.157.267-.23.44-.243.513c-.109.59.099.918.333 1.102c.085.067.282.148.604.192a4.2 4.2 0 0 0 1.022.003c.414-.048.81-.24 1.217-.554c.41-.317.805-.737 1.217-1.208l.326-.376c.304-.353.62-.72.94-1.049c.442-.452.93-.876 1.487-1.15c.74-.363 1.12-.539 1.524-.664c.269-.084.553-.146.962-.236q.268-.058.624-.139a61 61 0 0 1 2.49-.51l.17-.03l.046-.009l.015-.003a.5.5 0 0 1 .175.985"></svg:path></svg:g><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMicrophoneHandheldCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMicrophoneHandheldOffIcon],svg[pepicons-pencil-microphone-handheld-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.474 6.437a2.65 2.65 0 1 0 3.283-4.161a2.65 2.65 0 0 0-3.283 4.16m-.62.785a3.65 3.65 0 1 0 4.522-5.731a3.65 3.65 0 0 0-4.521 5.73"></svg:path><svg:path d="M6.97 5.341a.5.5 0 0 1 .124.696L2.857 12.1a.5.5 0 0 1-.82-.573l4.237-6.062a.5.5 0 0 1 .697-.123m3.703 1.844a.5.5 0 0 0-.706.039l-.23.257l-.275.305a.5.5 0 0 0-.068.063a368 368 0 0 1-2.48 2.74c-.719.79-1.44 1.58-2.485 2.747l.745.667a402 402 0 0 1 2.814-3.106c.788-.864 1.578-1.73 2.492-2.748l.232-.258a.5.5 0 0 0-.039-.706"></svg:path><svg:path d="M2.054 11.503a.5.5 0 0 1 .703-.083l2.355 1.858a.5.5 0 0 1-.62.785l-2.355-1.858a.5.5 0 0 1-.083-.702m6.432-7.731l-.822-1.25l.836-.55l.821 1.25a4.5 4.5 0 0 0 2.235 1.764l1.407.507l-.34.94l-1.406-.507a5.5 5.5 0 0 1-2.731-2.154"></svg:path><svg:path d="m15.65 11.825l-.015.003l-.043.007a42 42 0 0 0-.768.145c-.5.097-1.168.232-1.848.387c-.278.064-.5.112-.685.153c-.375.082-.6.131-.826.202c-.32.099-.632.24-1.38.607c-.406.2-.802.53-1.211.95a22 22 0 0 0-.88.982q-.172.2-.351.404c-.418.477-.866.96-1.358 1.34c-.495.383-1.06.681-1.714.756c-.426.05-.872.05-1.273-.005c-.384-.053-.793-.166-1.087-.398c-.523-.413-.873-1.111-.696-2.069c.049-.263.208-.571.363-.836c.167-.284.373-.59.57-.866a23 23 0 0 1 .705-.94l.05-.06l.012-.017l.005-.006a.5.5 0 0 1 .778.628l-.003.004l-.012.015l-.046.057a22 22 0 0 0-.675.899a12 12 0 0 0-.521.791c-.157.267-.23.44-.243.513c-.109.59.099.918.333 1.102c.085.067.282.148.604.192a4.2 4.2 0 0 0 1.022.003c.414-.048.81-.24 1.217-.554c.41-.317.805-.737 1.217-1.208l.326-.376c.304-.353.62-.72.94-1.049c.442-.452.93-.876 1.487-1.15c.74-.363 1.12-.539 1.524-.664c.269-.084.553-.146.962-.236q.268-.058.624-.139a61 61 0 0 1 2.49-.51l.17-.03l.046-.009l.015-.003a.5.5 0 0 1 .175.985"></svg:path></svg:g><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilMicrophoneHandheldOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMicrophoneOffIcon],svg[pepicons-pencil-microphone-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.75 4.25a2.25 2.25 0 0 1 4.5 0v3.5a2.25 2.25 0 0 1-4.5 0z" clip-rule="evenodd"></svg:path><svg:path d="M10 17c-2.48 0-4-.217-4-1s1.52-1 4-1s4 .217 4 1s-1.52 1-4 1"></svg:path><svg:path d="M9.5 12.5h1V16h-1z"></svg:path><svg:path d="M14 7.5a.5.5 0 0 1 1 0v1.65c0 2.421-2.254 4.35-5 4.35s-5-1.929-5-4.35V7.5a.5.5 0 0 1 1 0v1.65c0 1.831 1.775 3.35 4 3.35s4-1.519 4-3.35z"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilMicrophoneOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMinusIcon],svg[pepicons-pencil-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10.5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1z"></svg:path>`,
})
export class PepiconsPencilMinusIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMinusCircleIcon],svg[pepicons-pencil-minus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 13.5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMinusCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMinusCircleFilledIcon],svg[pepicons-pencil-minus-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilMinusCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" d="M8 13.5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1z"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilMinusCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilMinusCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMinusCircleOffIcon],svg[pepicons-pencil-minus-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 13.5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1z"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMinusCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMinusOffIcon],svg[pepicons-pencil-minus-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 10.5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1z"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilMinusOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMoneyNoteIcon],svg[pepicons-pencil-money-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M1.25 7.802a2.5 2.5 0 0 1 2.5-2.5h12a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-12a2.5 2.5 0 0 1-2.5-2.5zm2.5-1.5a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5z" clip-rule="evenodd"></svg:path><svg:path d="M11.746 10.302a2 2 0 1 1-4 .001a2 2 0 0 1 4 0"></svg:path><svg:path fill-rule="evenodd" d="M9.747 11.302a1 1 0 1 0-.001-1.999a1 1 0 0 0 0 2m0 1a2 2 0 1 0-.001-3.999a2 2 0 0 0 0 4m8.051-1.581a.5.5 0 0 1-.281.96l.14-.48l-.14.48h-.002l-.002-.001l-.006-.002l-.018-.005l-.059-.02a4 4 0 0 1-.204-.078a7 7 0 0 1-.708-.34a10 10 0 0 1-2.205-1.688a8.2 8.2 0 0 1-1.651-2.341a6 6 0 0 1-.307-.788a4 4 0 0 1-.081-.297l-.004-.02l-.002-.006v-.004l.49-.097m5.04 4.727h.002M1.32 9.158a.5.5 0 0 1 .644-.292l-.176.468l.176-.468l.003.001l.005.002l.017.007l.061.025q.079.032.218.095a10.2 10.2 0 0 1 2.898 2.018a8.9 8.9 0 0 1 1.596 2.23a9 9 0 0 1 .436 1.019l.022.065l.006.019l.002.006v.002l-.478.145l.479-.144a.5.5 0 0 1-.958.289v-.002l-.003-.01l-.016-.048a8 8 0 0 0-.382-.889a7.9 7.9 0 0 0-1.413-1.976a9.2 9.2 0 0 0-2.789-1.895l-.045-.018l-.01-.004h-.001m-.292-.645a.5.5 0 0 0 .292.644z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMoneyNoteIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMoneyNoteCircleIcon],svg[pepicons-pencil-money-note-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M4.25 10.802a2.5 2.5 0 0 1 2.5-2.5h12a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-12a2.5 2.5 0 0 1-2.5-2.5zm2.5-1.5a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5z" clip-rule="evenodd"></svg:path><svg:path d="M14.746 13.302a2 2 0 1 1-4 .001a2 2 0 0 1 4 0"></svg:path><svg:path fill-rule="evenodd" d="M12.747 14.302a1 1 0 1 0-.001-1.999a1 1 0 0 0 0 2m0 1a2 2 0 1 0-.001-3.999a2 2 0 0 0 0 4m8.051-1.581a.5.5 0 0 1-.281.96l.14-.48l-.14.48h-.002l-.002-.001l-.006-.002l-.018-.005l-.059-.02a4 4 0 0 1-.204-.078a7 7 0 0 1-.708-.34a10 10 0 0 1-2.205-1.688a8.2 8.2 0 0 1-1.651-2.341a6 6 0 0 1-.307-.788a4 4 0 0 1-.081-.297l-.004-.02l-.002-.006v-.003l.49-.098m5.04 4.727h.002M4.32 12.158a.5.5 0 0 1 .644-.292l-.176.468l.176-.468l.003.001l.005.002l.017.007l.061.025q.079.032.218.095a10.2 10.2 0 0 1 2.898 2.018a8.9 8.9 0 0 1 1.596 2.23a9 9 0 0 1 .436 1.019l.022.065l.006.019l.002.006v.002l-.478.145l.479-.144a.5.5 0 0 1-.958.289v-.002l-.003-.01l-.016-.048a8 8 0 0 0-.382-.889a7.9 7.9 0 0 0-1.413-1.976a9.2 9.2 0 0 0-2.789-1.895l-.045-.018l-.01-.004h-.001m-.292-.645a.5.5 0 0 0 .292.644z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMoneyNoteCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMoneyNoteCircleFilledIcon],svg[pepicons-pencil-money-note-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilMoneyNoteCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M4.25 10.802a2.5 2.5 0 0 1 2.5-2.5h12a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-12a2.5 2.5 0 0 1-2.5-2.5zm2.5-1.5a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5z" clip-rule="evenodd"></svg:path><svg:path d="M14.746 13.302a2 2 0 1 1-4 .001a2 2 0 0 1 4 0"></svg:path><svg:path fill-rule="evenodd" d="M12.747 14.302a1 1 0 1 0-.001-1.999a1 1 0 0 0 0 2m0 1a2 2 0 1 0-.001-3.999a2 2 0 0 0 0 4m8.051-1.581a.5.5 0 0 1-.281.96l.14-.48l-.14.48h-.002l-.002-.001l-.006-.002l-.018-.005l-.059-.02a4 4 0 0 1-.204-.078a7 7 0 0 1-.708-.34a10 10 0 0 1-2.205-1.688a8.2 8.2 0 0 1-1.651-2.341a6 6 0 0 1-.307-.788a4 4 0 0 1-.081-.297l-.004-.02l-.002-.006v-.003l.49-.098m5.04 4.727h.002M4.32 12.158a.5.5 0 0 1 .644-.292l-.176.468l.176-.468l.003.001l.005.002l.017.007l.061.025q.079.032.218.095a10.2 10.2 0 0 1 2.898 2.018a8.9 8.9 0 0 1 1.596 2.23a9 9 0 0 1 .436 1.019l.022.065l.006.019l.002.006v.002l-.478.145l.479-.144a.5.5 0 0 1-.958.289v-.002l-.003-.01l-.016-.048a8 8 0 0 0-.382-.889a7.9 7.9 0 0 0-1.413-1.976a9.2 9.2 0 0 0-2.789-1.895l-.045-.018l-.01-.004h-.001m-.292-.645a.5.5 0 0 0 .292.644z" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilMoneyNoteCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilMoneyNoteCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMoneyNoteCircleOffIcon],svg[pepicons-pencil-money-note-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M4.25 10.802a2.5 2.5 0 0 1 2.5-2.5h12a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-12a2.5 2.5 0 0 1-2.5-2.5zm2.5-1.5a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5z" clip-rule="evenodd"></svg:path><svg:path d="M14.746 13.302a2 2 0 1 1-4 .001a2 2 0 0 1 4 0"></svg:path><svg:path fill-rule="evenodd" d="M12.747 14.302a1 1 0 1 0-.001-1.999a1 1 0 0 0 0 2m0 1a2 2 0 1 0-.001-3.999a2 2 0 0 0 0 4m8.051-1.581a.5.5 0 0 1-.281.96l.14-.48l-.14.48h-.002l-.002-.001l-.006-.002l-.018-.005l-.059-.02a4 4 0 0 1-.204-.078a7 7 0 0 1-.708-.34a10 10 0 0 1-2.205-1.688a8.2 8.2 0 0 1-1.651-2.341a6 6 0 0 1-.307-.788a4 4 0 0 1-.081-.297l-.004-.02l-.002-.006v-.003l.49-.098m5.04 4.727h.002M4.32 12.158a.5.5 0 0 1 .644-.292l-.176.468l.176-.468l.003.001l.005.002l.017.007l.061.025q.079.032.218.095a10.2 10.2 0 0 1 2.898 2.018a8.9 8.9 0 0 1 1.596 2.23a9 9 0 0 1 .436 1.019l.022.065l.006.019l.002.006v.002l-.478.145l.479-.144a.5.5 0 0 1-.958.289v-.002l-.003-.01l-.016-.048a8 8 0 0 0-.382-.889a7.9 7.9 0 0 0-1.413-1.976a9.2 9.2 0 0 0-2.789-1.895l-.045-.018l-.01-.004h-.001m-.292-.645a.5.5 0 0 0 .292.644z" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMoneyNoteCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMoneyNoteOffIcon],svg[pepicons-pencil-money-note-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M1.25 7.802a2.5 2.5 0 0 1 2.5-2.5h12a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-12a2.5 2.5 0 0 1-2.5-2.5zm2.5-1.5a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5z" clip-rule="evenodd"></svg:path><svg:path d="M11.746 10.302a2 2 0 1 1-4 .001a2 2 0 0 1 4 0"></svg:path><svg:path fill-rule="evenodd" d="M9.747 11.302a1 1 0 1 0-.001-1.999a1 1 0 0 0 0 2m0 1a2 2 0 1 0-.001-3.999a2 2 0 0 0 0 4m8.051-1.581a.5.5 0 0 1-.281.96l.14-.48l-.14.48h-.002l-.002-.001l-.006-.002l-.018-.005l-.059-.02a4 4 0 0 1-.204-.078a7 7 0 0 1-.708-.34a10 10 0 0 1-2.205-1.688a8.2 8.2 0 0 1-1.651-2.341a6 6 0 0 1-.307-.788a4 4 0 0 1-.081-.297l-.004-.02l-.002-.006v-.004l.49-.097m5.04 4.727h.002M1.32 9.158a.5.5 0 0 1 .644-.292l-.176.468l.176-.468l.003.001l.005.002l.017.007l.061.025q.079.032.218.095a10.2 10.2 0 0 1 2.898 2.018a8.9 8.9 0 0 1 1.596 2.23a9 9 0 0 1 .436 1.019l.022.065l.006.019l.002.006v.002l-.478.145l.479-.144a.5.5 0 0 1-.958.289v-.002l-.003-.01l-.016-.048a8 8 0 0 0-.382-.889a7.9 7.9 0 0 0-1.413-1.976a9.2 9.2 0 0 0-2.789-1.895l-.045-.018l-.01-.004h-.001m-.292-.645a.5.5 0 0 0 .292.644z" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilMoneyNoteOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMonitorIcon],svg[pepicons-pencil-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M17.5 1.5h-15a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2m-16 2a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path><svg:path d="M10 14a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5"></svg:path><svg:path fill-rule="evenodd" d="M11.5 14.5h-3a1 1 0 0 0-1 1V18a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-1-1m-3 3.5v-2.5h3V18z" clip-rule="evenodd"></svg:path><svg:path d="M5.5 19a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1z"></svg:path><svg:path fill-rule="evenodd" d="M19 12H1v-1h18z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMonitorIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMonitorCircleIcon],svg[pepicons-pencil-monitor-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M20.5 4.5h-15a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2m-16 2a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path><svg:path d="M13 17a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5"></svg:path><svg:path fill-rule="evenodd" d="M14.5 17.5h-3a1 1 0 0 0-1 1V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-1-1m-3 3.5v-2.5h3V21z" clip-rule="evenodd"></svg:path><svg:path d="M8.5 22a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1z"></svg:path><svg:path fill-rule="evenodd" d="M22 15H4v-1h18z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMonitorCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMonitorCircleFilledIcon],svg[pepicons-pencil-monitor-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilMonitorCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M20.5 4.5h-15a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2m-16 2a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path><svg:path d="M13 17a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5"></svg:path><svg:path fill-rule="evenodd" d="M14.5 17.5h-3a1 1 0 0 0-1 1V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-1-1m-3 3.5v-2.5h3V21z" clip-rule="evenodd"></svg:path><svg:path d="M8.5 22a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1z"></svg:path><svg:path fill-rule="evenodd" d="M22 15H4v-1h18z" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilMonitorCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilMonitorCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMonitorCircleOffIcon],svg[pepicons-pencil-monitor-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M20.5 4.5h-15a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2m-16 2a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path><svg:path d="M13 17a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5"></svg:path><svg:path fill-rule="evenodd" d="M14.5 17.5h-3a1 1 0 0 0-1 1V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-1-1m-3 3.5v-2.5h3V21z" clip-rule="evenodd"></svg:path><svg:path d="M8.5 22a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1z"></svg:path><svg:path fill-rule="evenodd" d="M22 15H4v-1h18z" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMonitorCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMonitorEyeIcon],svg[pepicons-pencil-monitor-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5 4.5a2 2 0 0 1 2-2h9.782a2 2 0 0 1 2 2v7.231a2 2 0 0 1-2 2H12.39v2.34a.5.5 0 1 1-1 0v-2.34H10a.5.5 0 1 1 0-1h6.782a1 1 0 0 0 1-1V4.5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2.258a.5.5 0 0 1-1 0z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.195 16.645a.5.5 0 0 1 .5-.5h6.391a.5.5 0 1 1 0 1h-6.39a.5.5 0 0 1-.5-.5m-5.303-3.85c.62.35 1.512.581 2.524.581s1.904-.232 2.525-.581c.637-.358.893-.775.893-1.122s-.256-.765-.893-1.123c-.62-.35-1.512-.58-2.525-.58s-1.903.23-2.524.58c-.637.358-.893.775-.893 1.123c0 .347.256.764.893 1.122m-.49.872C1.62 13.227 1 12.542 1 11.673c0-.87.621-1.555 1.402-1.994c.797-.449 1.864-.71 3.015-.71s2.219.261 3.016.71c.78.439 1.402 1.124 1.402 1.994s-.621 1.554-1.402 1.994c-.797.448-1.864.71-3.016.71c-1.15 0-2.218-.262-3.015-.71" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.417 7.5a.5.5 0 0 1 .5.5v1.47a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .5-.5m2.057.255a.5.5 0 0 1 .392.588l-.244 1.224a.5.5 0 0 1-.981-.196l.245-1.224a.5.5 0 0 1 .588-.392m-4.114 0a.5.5 0 0 0-.392.588l.245 1.224a.5.5 0 1 0 .98-.196L3.95 8.147a.5.5 0 0 0-.588-.392m-2.119.795a.5.5 0 0 0-.172.687l.735 1.224a.5.5 0 1 0 .857-.515L1.93 8.722a.5.5 0 0 0-.686-.171m8.348-.001a.5.5 0 0 1 .172.687l-.735 1.224a.5.5 0 1 1-.857-.515l.734-1.224a.5.5 0 0 1 .686-.171" clip-rule="evenodd"></svg:path><svg:path d="M5.42 10.4a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5"></svg:path><svg:path fill-rule="evenodd" d="M4.67 11.65a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m.75 1.75a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMonitorEyeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMonitorEyeCircleIcon],svg[pepicons-pencil-monitor-eye-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8 7.5a2 2 0 0 1 2-2h9.782a2 2 0 0 1 2 2v7.231a2 2 0 0 1-2 2H15.39v2.34a.5.5 0 1 1-1 0v-2.34H13a.5.5 0 1 1 0-1h6.782a1 1 0 0 0 1-1V7.5a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v2.258a.5.5 0 0 1-1 0z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M11.195 19.645a.5.5 0 0 1 .5-.5h6.391a.5.5 0 1 1 0 1h-6.39a.5.5 0 0 1-.5-.5m-5.303-3.85c.62.35 1.512.581 2.524.581s1.904-.232 2.525-.581c.637-.358.893-.775.893-1.122s-.256-.765-.893-1.123c-.62-.35-1.512-.58-2.525-.58s-1.903.23-2.524.58c-.637.358-.893.775-.893 1.123c0 .347.256.764.893 1.122m-.49.872C4.62 16.227 4 15.542 4 14.673c0-.87.621-1.555 1.402-1.994c.797-.449 1.864-.71 3.015-.71s2.219.261 3.016.71c.78.439 1.402 1.124 1.402 1.994s-.621 1.554-1.402 1.994c-.797.448-1.864.71-3.016.71c-1.15 0-2.218-.262-3.015-.71" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.417 10.5a.5.5 0 0 1 .5.5v1.47a.5.5 0 0 1-1 0V11a.5.5 0 0 1 .5-.5m2.057.255a.5.5 0 0 1 .392.588l-.244 1.224a.5.5 0 0 1-.981-.196l.245-1.224a.5.5 0 0 1 .588-.392m-4.114 0a.5.5 0 0 0-.392.588l.245 1.224a.5.5 0 1 0 .98-.196l-.244-1.224a.5.5 0 0 0-.588-.392m-2.118.795a.5.5 0 0 0-.172.687l.735 1.224a.5.5 0 1 0 .857-.515l-.734-1.224a.5.5 0 0 0-.686-.171m8.349-.001a.5.5 0 0 1 .172.687l-.735 1.224a.5.5 0 1 1-.857-.515l.734-1.224a.5.5 0 0 1 .686-.171" clip-rule="evenodd"></svg:path><svg:path d="M8.42 13.4a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5"></svg:path><svg:path fill-rule="evenodd" d="M7.67 14.65a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m.75 1.75a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMonitorEyeCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMonitorEyeCircleFilledIcon],svg[pepicons-pencil-monitor-eye-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilMonitorEyeCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M8 7.5a2 2 0 0 1 2-2h9.782a2 2 0 0 1 2 2v7.231a2 2 0 0 1-2 2H15.39v2.34a.5.5 0 1 1-1 0v-2.34H13a.5.5 0 1 1 0-1h6.782a1 1 0 0 0 1-1V7.5a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v2.258a.5.5 0 0 1-1 0z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M11.195 19.645a.5.5 0 0 1 .5-.5h6.391a.5.5 0 1 1 0 1h-6.39a.5.5 0 0 1-.5-.5m-5.303-3.85c.62.35 1.512.581 2.524.581s1.904-.232 2.525-.581c.637-.358.893-.775.893-1.122s-.256-.765-.893-1.123c-.62-.35-1.512-.58-2.525-.58s-1.903.23-2.524.58c-.637.358-.893.775-.893 1.123c0 .347.256.764.893 1.122m-.49.872C4.62 16.227 4 15.542 4 14.673c0-.87.621-1.555 1.402-1.994c.797-.449 1.864-.71 3.015-.71s2.219.261 3.016.71c.78.439 1.402 1.124 1.402 1.994s-.621 1.554-1.402 1.994c-.797.448-1.864.71-3.016.71c-1.15 0-2.218-.262-3.015-.71" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.417 10.5a.5.5 0 0 1 .5.5v1.47a.5.5 0 0 1-1 0V11a.5.5 0 0 1 .5-.5m2.057.255a.5.5 0 0 1 .392.588l-.244 1.224a.5.5 0 0 1-.981-.196l.245-1.224a.5.5 0 0 1 .588-.392m-4.114 0a.5.5 0 0 0-.392.588l.245 1.224a.5.5 0 1 0 .98-.196l-.244-1.224a.5.5 0 0 0-.588-.392m-2.118.795a.5.5 0 0 0-.172.687l.735 1.224a.5.5 0 1 0 .857-.515l-.734-1.224a.5.5 0 0 0-.686-.171m8.349-.001a.5.5 0 0 1 .172.687l-.735 1.224a.5.5 0 1 1-.857-.515l.734-1.224a.5.5 0 0 1 .686-.171" clip-rule="evenodd"></svg:path><svg:path d="M8.42 13.4a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5"></svg:path><svg:path fill-rule="evenodd" d="M7.67 14.65a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m.75 1.75a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilMonitorEyeCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilMonitorEyeCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMonitorEyeCircleOffIcon],svg[pepicons-pencil-monitor-eye-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8 7.5a2 2 0 0 1 2-2h9.782a2 2 0 0 1 2 2v7.231a2 2 0 0 1-2 2H15.39v2.34a.5.5 0 1 1-1 0v-2.34H13a.5.5 0 1 1 0-1h6.782a1 1 0 0 0 1-1V7.5a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v2.258a.5.5 0 0 1-1 0z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M11.195 19.645a.5.5 0 0 1 .5-.5h6.391a.5.5 0 1 1 0 1h-6.39a.5.5 0 0 1-.5-.5m-5.303-3.85c.62.35 1.512.581 2.524.581s1.904-.232 2.525-.581c.637-.358.893-.775.893-1.122s-.256-.765-.893-1.123c-.62-.35-1.512-.58-2.525-.58s-1.903.23-2.524.58c-.637.358-.893.775-.893 1.123c0 .347.256.764.893 1.122m-.49.872C4.62 16.227 4 15.542 4 14.673c0-.87.621-1.555 1.402-1.994c.797-.449 1.864-.71 3.015-.71s2.219.261 3.016.71c.78.439 1.402 1.124 1.402 1.994s-.621 1.554-1.402 1.994c-.797.448-1.864.71-3.016.71c-1.15 0-2.218-.262-3.015-.71" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.417 10.5a.5.5 0 0 1 .5.5v1.47a.5.5 0 0 1-1 0V11a.5.5 0 0 1 .5-.5m2.057.255a.5.5 0 0 1 .392.588l-.244 1.224a.5.5 0 0 1-.981-.196l.245-1.224a.5.5 0 0 1 .588-.392m-4.114 0a.5.5 0 0 0-.392.588l.245 1.224a.5.5 0 1 0 .98-.196l-.244-1.224a.5.5 0 0 0-.588-.392m-2.118.795a.5.5 0 0 0-.172.687l.735 1.224a.5.5 0 1 0 .857-.515l-.734-1.224a.5.5 0 0 0-.686-.171m8.349-.001a.5.5 0 0 1 .172.687l-.735 1.224a.5.5 0 1 1-.857-.515l.734-1.224a.5.5 0 0 1 .686-.171" clip-rule="evenodd"></svg:path><svg:path d="M8.42 13.4a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5"></svg:path><svg:path fill-rule="evenodd" d="M7.67 14.65a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m.75 1.75a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMonitorEyeCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMonitorEyeOffIcon],svg[pepicons-pencil-monitor-eye-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5 4.5a2 2 0 0 1 2-2h9.782a2 2 0 0 1 2 2v7.231a2 2 0 0 1-2 2H12.39v2.34a.5.5 0 1 1-1 0v-2.34H10a.5.5 0 1 1 0-1h6.782a1 1 0 0 0 1-1V4.5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2.258a.5.5 0 0 1-1 0z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.195 16.645a.5.5 0 0 1 .5-.5h6.391a.5.5 0 1 1 0 1h-6.39a.5.5 0 0 1-.5-.5m-5.303-3.85c.62.35 1.512.581 2.524.581s1.904-.232 2.525-.581c.637-.358.893-.775.893-1.122s-.256-.765-.893-1.123c-.62-.35-1.512-.58-2.525-.58s-1.903.23-2.524.58c-.637.358-.893.775-.893 1.123c0 .347.256.764.893 1.122m-.49.872C1.62 13.227 1 12.542 1 11.673c0-.87.621-1.555 1.402-1.994c.797-.449 1.864-.71 3.015-.71s2.219.261 3.016.71c.78.439 1.402 1.124 1.402 1.994s-.621 1.554-1.402 1.994c-.797.448-1.864.71-3.016.71c-1.15 0-2.218-.262-3.015-.71" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.417 7.5a.5.5 0 0 1 .5.5v1.47a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .5-.5m2.057.255a.5.5 0 0 1 .392.588l-.244 1.224a.5.5 0 0 1-.981-.196l.245-1.224a.5.5 0 0 1 .588-.392m-4.114 0a.5.5 0 0 0-.392.588l.245 1.224a.5.5 0 1 0 .98-.196L3.95 8.147a.5.5 0 0 0-.588-.392m-2.119.795a.5.5 0 0 0-.172.687l.735 1.224a.5.5 0 1 0 .857-.515L1.93 8.722a.5.5 0 0 0-.686-.171m8.348-.001a.5.5 0 0 1 .172.687l-.735 1.224a.5.5 0 1 1-.857-.515l.734-1.224a.5.5 0 0 1 .686-.171" clip-rule="evenodd"></svg:path><svg:path d="M5.42 10.4a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5"></svg:path><svg:path fill-rule="evenodd" d="M4.67 11.65a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m.75 1.75a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilMonitorEyeOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMonitorLoopIcon],svg[pepicons-pencil-monitor-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M2 4.5a2 2 0 0 1 2-2h11.748a2 2 0 0 1 2 2v7.651a2 2 0 0 1-2 2h-5.374v2.778a.5.5 0 0 1-1 0V14.15H8.5a.5.5 0 0 1 0-1h7.248a1 1 0 0 0 1-1V4.5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1V7a.5.5 0 0 1-1 0z"></svg:path><svg:path d="M5.687 17.59a.5.5 0 0 1 .5-.5h7.374a.5.5 0 1 1 0 1H6.187a.5.5 0 0 1-.5-.5m-.016-8.65a2.693 2.693 0 1 0-2.527 4.756A2.693 2.693 0 0 0 5.67 8.94m-4.524.645a3.693 3.693 0 1 1 1.985 5.199l-1.871 3.52a.5.5 0 0 1-.883-.47l1.87-3.52a3.694 3.694 0 0 1-1.101-4.73"></svg:path></svg:g>`,
})
export class PepiconsPencilMonitorLoopIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMonitorLoopCircleIcon],svg[pepicons-pencil-monitor-loop-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5 7.5a2 2 0 0 1 2-2h11.748a2 2 0 0 1 2 2v7.651a2 2 0 0 1-2 2h-5.374v2.778a.5.5 0 0 1-1 0V17.15H11.5a.5.5 0 0 1 0-1h7.248a1 1 0 0 0 1-1V7.5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1V10a.5.5 0 0 1-1 0z"></svg:path><svg:path d="M8.687 20.59a.5.5 0 0 1 .5-.5h7.374a.5.5 0 1 1 0 1H9.187a.5.5 0 0 1-.5-.5m-.016-8.65a2.693 2.693 0 1 0-2.527 4.756A2.693 2.693 0 0 0 8.67 11.94m-4.524.645a3.693 3.693 0 1 1 1.985 5.199l-1.871 3.52a.5.5 0 0 1-.883-.47l1.87-3.52a3.694 3.694 0 0 1-1.101-4.73"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilMonitorLoopCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMonitorLoopCircleFilledIcon],svg[pepicons-pencil-monitor-loop-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilMonitorLoopCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5 7.5a2 2 0 0 1 2-2h11.748a2 2 0 0 1 2 2v7.651a2 2 0 0 1-2 2h-5.374v2.778a.5.5 0 0 1-1 0V17.15H11.5a.5.5 0 0 1 0-1h7.248a1 1 0 0 0 1-1V7.5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1V10a.5.5 0 0 1-1 0z"></svg:path><svg:path d="M8.687 20.59a.5.5 0 0 1 .5-.5h7.374a.5.5 0 1 1 0 1H9.187a.5.5 0 0 1-.5-.5m-.016-8.65a2.693 2.693 0 1 0-2.527 4.756A2.693 2.693 0 0 0 8.67 11.94m-4.524.645a3.693 3.693 0 1 1 1.985 5.199l-1.871 3.52a.5.5 0 0 1-.883-.47l1.87-3.52a3.694 3.694 0 0 1-1.101-4.73"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilMonitorLoopCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilMonitorLoopCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMonitorLoopCircleOffIcon],svg[pepicons-pencil-monitor-loop-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5 7.5a2 2 0 0 1 2-2h11.748a2 2 0 0 1 2 2v7.651a2 2 0 0 1-2 2h-5.374v2.778a.5.5 0 0 1-1 0V17.15H11.5a.5.5 0 0 1 0-1h7.248a1 1 0 0 0 1-1V7.5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1V10a.5.5 0 0 1-1 0z"></svg:path><svg:path d="M8.687 20.59a.5.5 0 0 1 .5-.5h7.374a.5.5 0 1 1 0 1H9.187a.5.5 0 0 1-.5-.5m-.016-8.65a2.693 2.693 0 1 0-2.527 4.756A2.693 2.693 0 0 0 8.67 11.94m-4.524.645a3.693 3.693 0 1 1 1.985 5.199l-1.871 3.52a.5.5 0 0 1-.883-.47l1.87-3.52a3.694 3.694 0 0 1-1.101-4.73"></svg:path></svg:g><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMonitorLoopCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMonitorLoopOffIcon],svg[pepicons-pencil-monitor-loop-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M2 4.5a2 2 0 0 1 2-2h11.748a2 2 0 0 1 2 2v7.651a2 2 0 0 1-2 2h-5.374v2.778a.5.5 0 0 1-1 0V14.15H8.5a.5.5 0 0 1 0-1h7.248a1 1 0 0 0 1-1V4.5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1V7a.5.5 0 0 1-1 0z"></svg:path><svg:path d="M5.687 17.59a.5.5 0 0 1 .5-.5h7.374a.5.5 0 1 1 0 1H6.187a.5.5 0 0 1-.5-.5m-.016-8.65a2.693 2.693 0 1 0-2.527 4.756A2.693 2.693 0 0 0 5.67 8.94m-4.524.645a3.693 3.693 0 1 1 1.985 5.199l-1.871 3.52a.5.5 0 0 1-.883-.47l1.87-3.52a3.694 3.694 0 0 1-1.101-4.73"></svg:path></svg:g><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilMonitorLoopOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMonitorOffIcon],svg[pepicons-pencil-monitor-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M17.5 1.5h-15a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2m-16 2a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path><svg:path d="M10 14a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5"></svg:path><svg:path fill-rule="evenodd" d="M11.5 14.5h-3a1 1 0 0 0-1 1V18a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-1-1m-3 3.5v-2.5h3V18z" clip-rule="evenodd"></svg:path><svg:path d="M5.5 19a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1z"></svg:path><svg:path fill-rule="evenodd" d="M19 12H1v-1h18z" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilMonitorOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMoonIcon],svg[pepicons-pencil-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.275 6.024a5 5 0 0 1 2.887-3.55c.465-.205.364-.892-.14-.954C6.667.986 2.597 3.88 1.677 8.206c-.977 4.6 1.952 9.12 6.544 10.097c4.592.976 9.107-1.962 10.085-6.562a8.6 8.6 0 0 0 .184-2.047c-.016-.509-.694-.671-.939-.224a5 5 0 0 1-5.427 2.494a5.005 5.005 0 0 1-3.849-5.94m-5.62 2.39a7.52 7.52 0 0 1 6.618-5.923c-.989.844-1.694 2-1.976 3.325a6.005 6.005 0 0 0 4.62 7.126a6 6 0 0 0 5.446-1.584l-.035.175c-.863 4.06-4.847 6.653-8.899 5.792c-4.051-.862-6.636-4.85-5.773-8.91" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPencilMoonIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMoonCircleIcon],svg[pepicons-pencil-moon-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.275 9.024a5 5 0 0 1 2.887-3.55c.465-.205.364-.892-.14-.954c-4.355-.534-8.425 2.36-9.345 6.686c-.977 4.6 1.952 9.12 6.544 10.097c4.592.976 9.107-1.962 10.085-6.562a8.6 8.6 0 0 0 .184-2.047c-.016-.509-.694-.671-.939-.224a5 5 0 0 1-5.427 2.494a5.005 5.005 0 0 1-3.849-5.94m-5.62 2.39a7.52 7.52 0 0 1 6.618-5.923c-.989.844-1.694 2-1.976 3.325a6.005 6.005 0 0 0 4.62 7.126a6 6 0 0 0 5.446-1.584l-.035.175c-.863 4.06-4.847 6.653-8.899 5.792c-4.051-.862-6.636-4.85-5.773-8.91"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilMoonCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMoonCircleFilledIcon],svg[pepicons-pencil-moon-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilMoonCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M11.275 9.024a5 5 0 0 1 2.887-3.55c.465-.205.364-.892-.14-.954c-4.355-.534-8.425 2.36-9.345 6.686c-.977 4.6 1.952 9.12 6.544 10.097c4.592.976 9.107-1.962 10.085-6.562a8.6 8.6 0 0 0 .184-2.047c-.016-.509-.694-.671-.939-.224a5 5 0 0 1-5.427 2.494a5.005 5.005 0 0 1-3.849-5.94m-5.62 2.39a7.52 7.52 0 0 1 6.618-5.923c-.989.844-1.694 2-1.976 3.325a6.005 6.005 0 0 0 4.62 7.126a6 6 0 0 0 5.446-1.584l-.035.175c-.863 4.06-4.847 6.653-8.899 5.792c-4.051-.862-6.636-4.85-5.773-8.91" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilMoonCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilMoonCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMoonCircleOffIcon],svg[pepicons-pencil-moon-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11.275 9.024a5 5 0 0 1 2.887-3.55c.465-.205.364-.892-.14-.954c-4.355-.534-8.425 2.36-9.345 6.686c-.977 4.6 1.952 9.12 6.544 10.097c4.592.976 9.107-1.962 10.085-6.562a8.6 8.6 0 0 0 .184-2.047c-.016-.509-.694-.671-.939-.224a5 5 0 0 1-5.427 2.494a5.005 5.005 0 0 1-3.849-5.94m-5.62 2.39a7.52 7.52 0 0 1 6.618-5.923c-.989.844-1.694 2-1.976 3.325a6.005 6.005 0 0 0 4.62 7.126a6 6 0 0 0 5.446-1.584l-.035.175c-.863 4.06-4.847 6.653-8.899 5.792c-4.051-.862-6.636-4.85-5.773-8.91" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMoonCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMoonOffIcon],svg[pepicons-pencil-moon-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.275 6.024a5 5 0 0 1 2.887-3.55c.465-.205.364-.892-.14-.954C6.667.986 2.597 3.88 1.677 8.206c-.977 4.6 1.952 9.12 6.544 10.097c4.592.976 9.107-1.962 10.085-6.562a8.6 8.6 0 0 0 .184-2.047c-.016-.509-.694-.671-.939-.224a5 5 0 0 1-5.427 2.494a5.005 5.005 0 0 1-3.849-5.94m-5.62 2.39a7.52 7.52 0 0 1 6.618-5.923c-.989.844-1.694 2-1.976 3.325a6.005 6.005 0 0 0 4.62 7.126a6 6 0 0 0 5.446-1.584l-.035.175c-.863 4.06-4.847 6.653-8.899 5.792c-4.051-.862-6.636-4.85-5.773-8.91" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilMoonOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMotorcycleIcon],svg[pepicons-pencil-motorcycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.75 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-3.5 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M10 7a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4m.5 12h-1A1.5 1.5 0 0 0 8 15.5v2A1.5 1.5 0 0 0 9.5 19h1a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5M9 15.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path><svg:path d="M15.5 3.75a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 0 1.5zm-13 0a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 0 1.5z"></svg:path><svg:path d="m4.106 3.364l.302-.97l3.698.742l-.302.97zm7.788-.228l.302.97l3.698-.742l-.302-.97z"></svg:path><svg:path fill-rule="evenodd" d="M14.5 10.5a4.5 4.5 0 1 0-9 0V13a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2zm-8 0a3.5 3.5 0 1 1 7 0V13a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMotorcycleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMotorcycleCircleIcon],svg[pepicons-pencil-motorcycle-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.75 15a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-3.5 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M13 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4m.5 12h-1a1.5 1.5 0 0 0-1.5 1.5v2a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5M12 18.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path><svg:path d="M18.5 6.75a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 0 1.5zm-13 0a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 0 1.5z"></svg:path><svg:path d="m7.106 6.364l.302-.97l3.698.742l-.302.97zm7.788-.228l.302.97l3.698-.742l-.302-.97z"></svg:path><svg:path fill-rule="evenodd" d="M17.5 13.5a4.5 4.5 0 1 0-9 0V16a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2zm-8 0a3.5 3.5 0 1 1 7 0V16a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMotorcycleCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMotorcycleCircleFilledIcon],svg[pepicons-pencil-motorcycle-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilMotorcycleCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M15.75 15a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-3.5 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M13 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4m.5 12h-1a1.5 1.5 0 0 0-1.5 1.5v2a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5M12 18.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path><svg:path d="M18.5 6.75a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 0 1.5zm-13 0a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 0 1.5z"></svg:path><svg:path d="m7.106 6.364l.302-.97l3.698.742l-.302.97zm7.788-.228l.302.97l3.698-.742l-.302-.97z"></svg:path><svg:path fill-rule="evenodd" d="M17.5 13.5a4.5 4.5 0 1 0-9 0V16a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2zm-8 0a3.5 3.5 0 1 1 7 0V16a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilMotorcycleCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilMotorcycleCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMotorcycleCircleOffIcon],svg[pepicons-pencil-motorcycle-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.75 15a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-3.5 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M13 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4m.5 12h-1a1.5 1.5 0 0 0-1.5 1.5v2a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5M12 18.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path><svg:path d="M18.5 6.75a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 0 1.5zm-13 0a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 0 1.5z"></svg:path><svg:path d="m7.106 6.364l.302-.97l3.698.742l-.302.97zm7.788-.228l.302.97l3.698-.742l-.302-.97z"></svg:path><svg:path fill-rule="evenodd" d="M17.5 13.5a4.5 4.5 0 1 0-9 0V16a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2zm-8 0a3.5 3.5 0 1 1 7 0V16a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMotorcycleCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMotorcycleOffIcon],svg[pepicons-pencil-motorcycle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.75 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-3.5 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M10 7a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4m.5 12h-1A1.5 1.5 0 0 0 8 15.5v2A1.5 1.5 0 0 0 9.5 19h1a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5M9 15.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path><svg:path d="M15.5 3.75a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 0 1.5zm-13 0a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 0 1.5z"></svg:path><svg:path d="m4.106 3.364l.302-.97l3.698.742l-.302.97zm7.788-.228l.302.97l3.698-.742l-.302-.97z"></svg:path><svg:path fill-rule="evenodd" d="M14.5 10.5a4.5 4.5 0 1 0-9 0V13a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2zm-8 0a3.5 3.5 0 1 1 7 0V13a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilMotorcycleOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMoveXIcon],svg[pepicons-pencil-move-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.347 5.616a.5.5 0 0 1 .704.064l3.333 4a.5.5 0 0 1-.768.64l-3.333-4a.5.5 0 0 1 .064-.704"></svg:path><svg:path d="M13.347 14.384a.5.5 0 0 1-.064-.704l3.333-4a.5.5 0 1 1 .768.64l-3.333 4a.5.5 0 0 1-.704.064"></svg:path><svg:path d="M3.5 9.5h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1 0-1"></svg:path><svg:path d="M6.653 14.384a.5.5 0 0 1-.704-.064l-3.333-4a.5.5 0 0 1 .768-.64l3.333 4a.5.5 0 0 1-.064.704"></svg:path><svg:path d="M6.653 5.616a.5.5 0 0 1 .064.704l-3.333 4a.5.5 0 0 1-.768-.64l3.333-4a.5.5 0 0 1 .704-.064M4.5 10a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5"></svg:path></svg:g>`,
})
export class PepiconsPencilMoveXIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMoveXCircleIcon],svg[pepicons-pencil-move-x-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.347 8.616a.5.5 0 0 1 .704.064l3.333 4a.5.5 0 0 1-.768.64l-3.333-4a.5.5 0 0 1 .064-.704"></svg:path><svg:path d="M16.347 17.384a.5.5 0 0 1-.064-.704l3.333-4a.5.5 0 1 1 .768.64l-3.333 4a.5.5 0 0 1-.704.064"></svg:path><svg:path d="M6.5 12.5h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1 0-1"></svg:path><svg:path d="M9.653 17.384a.5.5 0 0 1-.704-.064l-3.333-4a.5.5 0 0 1 .768-.64l3.333 4a.5.5 0 0 1-.064.704"></svg:path><svg:path d="M9.653 8.616a.5.5 0 0 1 .064.704l-3.333 4a.5.5 0 0 1-.768-.64l3.333-4a.5.5 0 0 1 .704-.064M7.5 13a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilMoveXCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMoveXCircleFilledIcon],svg[pepicons-pencil-move-x-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilMoveXCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.347 8.616a.5.5 0 0 1 .704.064l3.333 4a.5.5 0 0 1-.768.64l-3.333-4a.5.5 0 0 1 .064-.704"></svg:path><svg:path d="M16.347 17.384a.5.5 0 0 1-.064-.704l3.333-4a.5.5 0 1 1 .768.64l-3.333 4a.5.5 0 0 1-.704.064"></svg:path><svg:path d="M6.5 12.5h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1 0-1"></svg:path><svg:path d="M9.653 17.384a.5.5 0 0 1-.704-.064l-3.333-4a.5.5 0 0 1 .768-.64l3.333 4a.5.5 0 0 1-.064.704"></svg:path><svg:path d="M9.653 8.616a.5.5 0 0 1 .064.704l-3.333 4a.5.5 0 0 1-.768-.64l3.333-4a.5.5 0 0 1 .704-.064M7.5 13a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilMoveXCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilMoveXCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMoveXCircleOffIcon],svg[pepicons-pencil-move-x-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.347 8.616a.5.5 0 0 1 .704.064l3.333 4a.5.5 0 0 1-.768.64l-3.333-4a.5.5 0 0 1 .064-.704"></svg:path><svg:path d="M16.347 17.384a.5.5 0 0 1-.064-.704l3.333-4a.5.5 0 1 1 .768.64l-3.333 4a.5.5 0 0 1-.704.064"></svg:path><svg:path d="M6.5 12.5h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1 0-1"></svg:path><svg:path d="M9.653 17.384a.5.5 0 0 1-.704-.064l-3.333-4a.5.5 0 0 1 .768-.64l3.333 4a.5.5 0 0 1-.064.704"></svg:path><svg:path d="M9.653 8.616a.5.5 0 0 1 .064.704l-3.333 4a.5.5 0 0 1-.768-.64l3.333-4a.5.5 0 0 1 .704-.064M7.5 13a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5"></svg:path></svg:g><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMoveXCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMoveXOffIcon],svg[pepicons-pencil-move-x-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.347 5.616a.5.5 0 0 1 .704.064l3.333 4a.5.5 0 0 1-.768.64l-3.333-4a.5.5 0 0 1 .064-.704"></svg:path><svg:path d="M13.347 14.384a.5.5 0 0 1-.064-.704l3.333-4a.5.5 0 1 1 .768.64l-3.333 4a.5.5 0 0 1-.704.064"></svg:path><svg:path d="M3.5 9.5h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1 0-1"></svg:path><svg:path d="M6.653 14.384a.5.5 0 0 1-.704-.064l-3.333-4a.5.5 0 0 1 .768-.64l3.333 4a.5.5 0 0 1-.064.704"></svg:path><svg:path d="M6.653 5.616a.5.5 0 0 1 .064.704l-3.333 4a.5.5 0 0 1-.768-.64l3.333-4a.5.5 0 0 1 .704-.064M4.5 10a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5"></svg:path></svg:g><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilMoveXOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMoveYIcon],svg[pepicons-pencil-move-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.616 6.653a.5.5 0 0 1 .064-.704l4-3.333a.5.5 0 1 1 .64.768l-4 3.333a.5.5 0 0 1-.704-.064"></svg:path><svg:path d="M14.384 6.653a.5.5 0 0 1-.704.064l-4-3.333a.5.5 0 1 1 .64-.768l4 3.333a.5.5 0 0 1 .064.704M10 4.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5m4.384 8.847a.5.5 0 0 1-.064.704l-4 3.333a.5.5 0 0 1-.64-.768l4-3.333a.5.5 0 0 1 .704.064"></svg:path><svg:path d="M5.616 13.347a.5.5 0 0 1 .704-.064l4 3.333a.5.5 0 0 1-.64.768l-4-3.333a.5.5 0 0 1-.064-.704"></svg:path><svg:path d="M10 17a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"></svg:path></svg:g>`,
})
export class PepiconsPencilMoveYIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMoveYCircleIcon],svg[pepicons-pencil-move-y-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.616 9.653a.5.5 0 0 1 .064-.704l4-3.333a.5.5 0 1 1 .64.768l-4 3.333a.5.5 0 0 1-.704-.064"></svg:path><svg:path d="M17.384 9.653a.5.5 0 0 1-.704.064l-4-3.333a.5.5 0 1 1 .64-.768l4 3.333a.5.5 0 0 1 .064.704M13 7.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .5-.5m4.384 8.846a.5.5 0 0 1-.064.705l-4 3.333a.5.5 0 0 1-.64-.768l4-3.334a.5.5 0 0 1 .704.064"></svg:path><svg:path d="M8.616 16.346a.5.5 0 0 1 .704-.064l4 3.334a.5.5 0 0 1-.64.768l-4-3.333a.5.5 0 0 1-.064-.704"></svg:path><svg:path d="M13 20a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilMoveYCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMoveYCircleFilledIcon],svg[pepicons-pencil-move-y-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilMoveYCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.616 9.653a.5.5 0 0 1 .064-.704l4-3.333a.5.5 0 1 1 .64.768l-4 3.333a.5.5 0 0 1-.704-.064"></svg:path><svg:path d="M17.384 9.653a.5.5 0 0 1-.704.064l-4-3.333a.5.5 0 1 1 .64-.768l4 3.333a.5.5 0 0 1 .064.704M13 7.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .5-.5m4.384 8.846a.5.5 0 0 1-.064.705l-4 3.333a.5.5 0 0 1-.64-.768l4-3.334a.5.5 0 0 1 .704.064"></svg:path><svg:path d="M8.616 16.346a.5.5 0 0 1 .704-.064l4 3.334a.5.5 0 0 1-.64.768l-4-3.333a.5.5 0 0 1-.064-.704"></svg:path><svg:path d="M13 20a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilMoveYCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilMoveYCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMoveYCircleOffIcon],svg[pepicons-pencil-move-y-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.616 9.653a.5.5 0 0 1 .064-.704l4-3.333a.5.5 0 1 1 .64.768l-4 3.333a.5.5 0 0 1-.704-.064" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17.384 9.653a.5.5 0 0 1-.704.064l-4-3.333a.5.5 0 1 1 .64-.768l4 3.333a.5.5 0 0 1 .064.704M13 7.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .5-.5m4.384 8.846a.5.5 0 0 1-.064.705l-4 3.333a.5.5 0 0 1-.64-.768l4-3.334a.5.5 0 0 1 .704.064" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.616 16.346a.5.5 0 0 1 .704-.064l4 3.334a.5.5 0 0 1-.64.768l-4-3.333a.5.5 0 0 1-.064-.704" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 20a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMoveYCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMoveYOffIcon],svg[pepicons-pencil-move-y-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.616 6.653a.5.5 0 0 1 .064-.704l4-3.333a.5.5 0 1 1 .64.768l-4 3.333a.5.5 0 0 1-.704-.064" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14.384 6.653a.5.5 0 0 1-.704.064l-4-3.333a.5.5 0 1 1 .64-.768l4 3.333a.5.5 0 0 1 .064.704M10 4.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5m4.384 8.847a.5.5 0 0 1-.064.704l-4 3.333a.5.5 0 0 1-.64-.768l4-3.333a.5.5 0 0 1 .704.064" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.616 13.347a.5.5 0 0 1 .704-.064l4 3.333a.5.5 0 0 1-.64.768l-4-3.333a.5.5 0 0 1-.064-.704" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10 17a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilMoveYOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMusicNoteDoubleIcon],svg[pepicons-pencil-music-note-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m15.139 1.376l-7 .52A1.5 1.5 0 0 0 6.75 3.392v.737l.005.117a1.5 1.5 0 0 0 1.612 1.378l7-.55A1.5 1.5 0 0 0 16.75 3.58v-.707c0-.056 0-.056-.004-.112a1.5 1.5 0 0 0-1.607-1.384M7.75 4.129v-.737a.5.5 0 0 1 .463-.498l7-.521a.5.5 0 0 1 .537.499v.707a.5.5 0 0 1-.46.499l-7 .55a.5.5 0 0 1-.538-.46zM1.75 16c0 1.408 1.365 2.5 3 2.5s3-1.092 3-2.5s-1.365-2.5-3-2.5s-3 1.092-3 2.5m5 0c0 .8-.874 1.5-2 1.5s-2-.7-2-1.5s.874-1.5 2-1.5s2 .7 2 1.5m4.92.805c.556.445 1.296.695 2.08.695c1.635 0 3-1.092 3-2.5s-1.365-2.5-3-2.5s-3 1.092-3 2.5c0 .697.34 1.341.92 1.805M15.75 15c0 .8-.874 1.5-2 1.5c-.56 0-1.08-.176-1.455-.476c-.353-.282-.545-.646-.545-1.024c0-.8.874-1.5 2-1.5s2 .7 2 1.5" clip-rule="evenodd"></svg:path><svg:path d="M6.75 3.5a.5.5 0 0 1 1 0V16a.5.5 0 0 1-1 0zm9 0a.5.5 0 0 1 1 0V15a.5.5 0 0 1-1 0z"></svg:path></svg:g>`,
})
export class PepiconsPencilMusicNoteDoubleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMusicNoteDoubleCircleIcon],svg[pepicons-pencil-music-note-double-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m18.139 4.376l-7 .52A1.5 1.5 0 0 0 9.75 6.392v.737l.005.117a1.5 1.5 0 0 0 1.612 1.378l7-.55A1.5 1.5 0 0 0 19.75 6.58v-.707c0-.056 0-.056-.004-.112a1.5 1.5 0 0 0-1.607-1.384M10.75 7.129v-.737a.5.5 0 0 1 .463-.498l7-.521a.5.5 0 0 1 .537.499v.707a.5.5 0 0 1-.46.499l-7 .55a.5.5 0 0 1-.538-.46zM4.75 19c0 1.408 1.365 2.5 3 2.5s3-1.092 3-2.5s-1.365-2.5-3-2.5s-3 1.092-3 2.5m5 0c0 .8-.874 1.5-2 1.5s-2-.7-2-1.5s.874-1.5 2-1.5s2 .7 2 1.5m4.92.805c.556.445 1.296.695 2.08.695c1.635 0 3-1.092 3-2.5s-1.365-2.5-3-2.5s-3 1.092-3 2.5c0 .697.34 1.341.92 1.805M18.75 18c0 .8-.874 1.5-2 1.5c-.56 0-1.08-.176-1.455-.476c-.353-.282-.545-.646-.545-1.024c0-.8.874-1.5 2-1.5s2 .7 2 1.5" clip-rule="evenodd"></svg:path><svg:path d="M9.75 6.5a.5.5 0 0 1 1 0V19a.5.5 0 0 1-1 0zm9 0a.5.5 0 0 1 1 0V18a.5.5 0 0 1-1 0z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMusicNoteDoubleCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMusicNoteDoubleCircleFilledIcon],svg[pepicons-pencil-music-note-double-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilMusicNoteDoubleCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="m18.139 4.376l-7 .52A1.5 1.5 0 0 0 9.75 6.392v.737l.005.117a1.5 1.5 0 0 0 1.612 1.378l7-.55A1.5 1.5 0 0 0 19.75 6.58v-.707c0-.056 0-.056-.004-.112a1.5 1.5 0 0 0-1.607-1.384M10.75 7.129v-.737a.5.5 0 0 1 .463-.498l7-.521a.5.5 0 0 1 .537.499v.707a.5.5 0 0 1-.46.499l-7 .55a.5.5 0 0 1-.538-.46zM4.75 19c0 1.408 1.365 2.5 3 2.5s3-1.092 3-2.5s-1.365-2.5-3-2.5s-3 1.092-3 2.5m5 0c0 .8-.874 1.5-2 1.5s-2-.7-2-1.5s.874-1.5 2-1.5s2 .7 2 1.5m4.92.805c.556.445 1.296.695 2.08.695c1.635 0 3-1.092 3-2.5s-1.365-2.5-3-2.5s-3 1.092-3 2.5c0 .697.34 1.341.92 1.805M18.75 18c0 .8-.874 1.5-2 1.5c-.56 0-1.08-.176-1.455-.476c-.353-.282-.545-.646-.545-1.024c0-.8.874-1.5 2-1.5s2 .7 2 1.5" clip-rule="evenodd"></svg:path><svg:path d="M9.75 6.5a.5.5 0 0 1 1 0V19a.5.5 0 0 1-1 0zm9 0a.5.5 0 0 1 1 0V18a.5.5 0 0 1-1 0z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilMusicNoteDoubleCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilMusicNoteDoubleCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMusicNoteDoubleCircleOffIcon],svg[pepicons-pencil-music-note-double-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m18.139 4.376l-7 .52A1.5 1.5 0 0 0 9.75 6.392v.737l.005.117a1.5 1.5 0 0 0 1.612 1.378l7-.55A1.5 1.5 0 0 0 19.75 6.58v-.707c0-.056 0-.056-.004-.112a1.5 1.5 0 0 0-1.607-1.384M10.75 7.129v-.737a.5.5 0 0 1 .463-.498l7-.521a.5.5 0 0 1 .537.499v.707a.5.5 0 0 1-.46.499l-7 .55a.5.5 0 0 1-.538-.46zM4.75 19c0 1.408 1.365 2.5 3 2.5s3-1.092 3-2.5s-1.365-2.5-3-2.5s-3 1.092-3 2.5m5 0c0 .8-.874 1.5-2 1.5s-2-.7-2-1.5s.874-1.5 2-1.5s2 .7 2 1.5m4.92.805c.556.445 1.296.695 2.08.695c1.635 0 3-1.092 3-2.5s-1.365-2.5-3-2.5s-3 1.092-3 2.5c0 .697.34 1.341.92 1.805M18.75 18c0 .8-.874 1.5-2 1.5c-.56 0-1.08-.176-1.455-.476c-.353-.282-.545-.646-.545-1.024c0-.8.874-1.5 2-1.5s2 .7 2 1.5" clip-rule="evenodd"></svg:path><svg:path d="M9.75 6.5a.5.5 0 0 1 1 0V19a.5.5 0 0 1-1 0zm9 0a.5.5 0 0 1 1 0V18a.5.5 0 0 1-1 0z"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMusicNoteDoubleCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMusicNoteDoubleOffIcon],svg[pepicons-pencil-music-note-double-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m15.139 1.376l-7 .52A1.5 1.5 0 0 0 6.75 3.392v.737l.005.117a1.5 1.5 0 0 0 1.612 1.378l7-.55A1.5 1.5 0 0 0 16.75 3.58v-.707c0-.056 0-.056-.004-.112a1.5 1.5 0 0 0-1.607-1.384M7.75 4.129v-.737a.5.5 0 0 1 .463-.498l7-.521a.5.5 0 0 1 .537.499v.707a.5.5 0 0 1-.46.499l-7 .55a.5.5 0 0 1-.538-.46zM1.75 16c0 1.408 1.365 2.5 3 2.5s3-1.092 3-2.5s-1.365-2.5-3-2.5s-3 1.092-3 2.5m5 0c0 .8-.874 1.5-2 1.5s-2-.7-2-1.5s.874-1.5 2-1.5s2 .7 2 1.5m4.92.805c.556.445 1.296.695 2.08.695c1.635 0 3-1.092 3-2.5s-1.365-2.5-3-2.5s-3 1.092-3 2.5c0 .697.34 1.341.92 1.805M15.75 15c0 .8-.874 1.5-2 1.5c-.56 0-1.08-.176-1.455-.476c-.353-.282-.545-.646-.545-1.024c0-.8.874-1.5 2-1.5s2 .7 2 1.5" clip-rule="evenodd"></svg:path><svg:path d="M6.75 3.5a.5.5 0 0 1 1 0V16a.5.5 0 0 1-1 0zm9 0a.5.5 0 0 1 1 0V15a.5.5 0 0 1-1 0z"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilMusicNoteDoubleOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMusicNoteSingleIcon],svg[pepicons-pencil-music-note-single-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M16.75 7.804c0-1.542-2.146-3.669-6.469-6.606a.5.5 0 0 0-.781.413v3.684a.5.5 0 0 0 .343.475c1.474.487 2.591 1.263 3.365 2.328c.734 1.01.868 1.858.46 2.617c-.236.44.25.917.686.672c1.575-.884 2.396-2.09 2.396-3.583M10.5 4.941V2.564c3.492 2.45 5.25 4.259 5.25 5.24c0 .746-.278 1.396-.854 1.96c-.02-.724-.317-1.48-.88-2.254c-.838-1.155-2.015-2.012-3.516-2.57" clip-rule="evenodd"></svg:path><svg:path d="M9.5 4.5a.5.5 0 0 1 1 0V15a.5.5 0 0 1-1 0z"></svg:path><svg:path fill-rule="evenodd" d="M4.5 15c0 1.408 1.365 2.5 3 2.5s3-1.092 3-2.5s-1.365-2.5-3-2.5s-3 1.092-3 2.5m5 0c0 .8-.874 1.5-2 1.5s-2-.7-2-1.5s.874-1.5 2-1.5s2 .7 2 1.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMusicNoteSingleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMusicNoteSingleCircleIcon],svg[pepicons-pencil-music-note-single-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M19.75 10.804c0-1.542-2.146-3.669-6.469-6.606a.5.5 0 0 0-.781.413v3.684a.5.5 0 0 0 .343.475c1.474.487 2.591 1.263 3.365 2.328c.734 1.01.868 1.858.46 2.617c-.236.44.25.917.686.672c1.575-.884 2.396-2.09 2.396-3.583M13.5 7.941V5.564c3.492 2.45 5.25 4.259 5.25 5.24c0 .746-.278 1.396-.855 1.96c-.02-.724-.316-1.48-.878-2.254C16.177 9.355 15 8.498 13.5 7.94" clip-rule="evenodd"></svg:path><svg:path d="M12.5 7.5a.5.5 0 0 1 1 0V18a.5.5 0 0 1-1 0z"></svg:path><svg:path fill-rule="evenodd" d="M7.5 18c0 1.408 1.365 2.5 3 2.5s3-1.092 3-2.5s-1.365-2.5-3-2.5s-3 1.092-3 2.5m5 0c0 .8-.874 1.5-2 1.5s-2-.7-2-1.5s.874-1.5 2-1.5s2 .7 2 1.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMusicNoteSingleCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMusicNoteSingleCircleFilledIcon],svg[pepicons-pencil-music-note-single-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilMusicNoteSingleCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M19.75 10.804c0-1.542-2.146-3.669-6.469-6.606a.5.5 0 0 0-.781.413v3.684a.5.5 0 0 0 .343.475c1.474.487 2.591 1.263 3.365 2.328c.734 1.01.868 1.858.46 2.617c-.236.44.25.917.686.672c1.575-.884 2.396-2.09 2.396-3.583M13.5 7.941V5.564c3.492 2.45 5.25 4.259 5.25 5.24c0 .746-.278 1.396-.855 1.96c-.02-.724-.316-1.48-.878-2.254C16.177 9.355 15 8.498 13.5 7.94" clip-rule="evenodd"></svg:path><svg:path d="M12.5 7.5a.5.5 0 0 1 1 0V18a.5.5 0 0 1-1 0z"></svg:path><svg:path fill-rule="evenodd" d="M7.5 18c0 1.408 1.365 2.5 3 2.5s3-1.092 3-2.5s-1.365-2.5-3-2.5s-3 1.092-3 2.5m5 0c0 .8-.874 1.5-2 1.5s-2-.7-2-1.5s.874-1.5 2-1.5s2 .7 2 1.5" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilMusicNoteSingleCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilMusicNoteSingleCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMusicNoteSingleCircleOffIcon],svg[pepicons-pencil-music-note-single-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M19.75 10.804c0-1.542-2.146-3.669-6.469-6.606a.5.5 0 0 0-.781.413v3.684a.5.5 0 0 0 .343.475c1.474.487 2.591 1.263 3.365 2.328c.734 1.01.868 1.858.46 2.617c-.236.44.25.917.686.672c1.575-.884 2.396-2.09 2.396-3.583M13.5 7.941V5.564c3.492 2.45 5.25 4.259 5.25 5.24c0 .746-.278 1.396-.855 1.96c-.02-.724-.316-1.48-.878-2.254C16.177 9.355 15 8.498 13.5 7.94" clip-rule="evenodd"></svg:path><svg:path d="M12.5 7.5a.5.5 0 0 1 1 0V18a.5.5 0 0 1-1 0z"></svg:path><svg:path fill-rule="evenodd" d="M7.5 18c0 1.408 1.365 2.5 3 2.5s3-1.092 3-2.5s-1.365-2.5-3-2.5s-3 1.092-3 2.5m5 0c0 .8-.874 1.5-2 1.5s-2-.7-2-1.5s.874-1.5 2-1.5s2 .7 2 1.5" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMusicNoteSingleCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMusicNoteSingleOffIcon],svg[pepicons-pencil-music-note-single-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M16.75 7.804c0-1.542-2.146-3.669-6.469-6.606a.5.5 0 0 0-.781.413v3.684a.5.5 0 0 0 .343.475c1.474.487 2.591 1.263 3.365 2.328c.734 1.01.868 1.858.46 2.617c-.236.44.25.917.686.672c1.575-.884 2.396-2.09 2.396-3.583M10.5 4.941V2.564c3.492 2.45 5.25 4.259 5.25 5.24c0 .746-.278 1.396-.854 1.96c-.02-.724-.317-1.48-.88-2.254c-.838-1.155-2.015-2.012-3.516-2.57" clip-rule="evenodd"></svg:path><svg:path d="M9.5 4.5a.5.5 0 0 1 1 0V15a.5.5 0 0 1-1 0z"></svg:path><svg:path fill-rule="evenodd" d="M4.5 15c0 1.408 1.365 2.5 3 2.5s3-1.092 3-2.5s-1.365-2.5-3-2.5s-3 1.092-3 2.5m5 0c0 .8-.874 1.5-2 1.5s-2-.7-2-1.5s.874-1.5 2-1.5s2 .7 2 1.5" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilMusicNoteSingleOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilNextTrackIcon],svg[pepicons-pencil-next-track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3.5 14.796L8.981 10L3.5 5.204zm6.14-4.043a1 1 0 0 0 0-1.506L4.159 4.451c-.647-.566-1.659-.106-1.659.753v9.592a1 1 0 0 0 1.659.753z"></svg:path><svg:path d="M10.5 14.796L15.981 10L10.5 5.204zm6.14-4.043a1 1 0 0 0 0-1.506l-5.482-4.796c-.646-.566-1.658-.106-1.658.753v9.592a1 1 0 0 0 1.659.753z"></svg:path><svg:path d="M17 4.5a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"></svg:path></svg:g>`,
})
export class PepiconsPencilNextTrackIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilNextTrackCircleIcon],svg[pepicons-pencil-next-track-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.5 17.796L11.981 13L6.5 8.204zm6.14-4.043a1 1 0 0 0 0-1.506L7.159 7.451c-.647-.566-1.659-.106-1.659.753v9.592a1 1 0 0 0 1.659.753z"></svg:path><svg:path d="M13.5 17.796L18.981 13L13.5 8.204zm6.14-4.043a1 1 0 0 0 0-1.506l-5.482-4.796c-.646-.566-1.658-.106-1.658.753v9.592a1 1 0 0 0 1.659.753z"></svg:path><svg:path d="M20 7.5a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .5-.5"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilNextTrackCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilNextTrackCircleFilledIcon],svg[pepicons-pencil-next-track-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilNextTrackCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.5 17.796L11.981 13L6.5 8.204zm6.14-4.043a1 1 0 0 0 0-1.506L7.159 7.451c-.647-.566-1.659-.106-1.659.753v9.592a1 1 0 0 0 1.659.753z"></svg:path><svg:path d="M13.5 17.796L18.981 13L13.5 8.204zm6.14-4.043a1 1 0 0 0 0-1.506l-5.482-4.796c-.646-.566-1.658-.106-1.658.753v9.592a1 1 0 0 0 1.659.753z"></svg:path><svg:path d="M20 7.5a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .5-.5"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilNextTrackCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilNextTrackCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilNextTrackCircleOffIcon],svg[pepicons-pencil-next-track-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.5 17.796L11.981 13L6.5 8.204zm6.14-4.043a1 1 0 0 0 0-1.506L7.159 7.451c-.647-.566-1.659-.106-1.659.753v9.592a1 1 0 0 0 1.659.753z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13.5 17.796L18.981 13L13.5 8.204zm6.14-4.043a1 1 0 0 0 0-1.506l-5.482-4.796c-.646-.566-1.658-.106-1.658.753v9.592a1 1 0 0 0 1.659.753z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M20 7.5a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilNextTrackCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilNextTrackOffIcon],svg[pepicons-pencil-next-track-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3.5 14.796L8.981 10L3.5 5.204zm6.14-4.043a1 1 0 0 0 0-1.506L4.159 4.451c-.647-.566-1.659-.106-1.659.753v9.592a1 1 0 0 0 1.659.753z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10.5 14.796L15.981 10L10.5 5.204zm6.14-4.043a1 1 0 0 0 0-1.506l-5.482-4.796c-.646-.566-1.658-.106-1.658.753v9.592a1 1 0 0 0 1.659.753z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17 4.5a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilNextTrackOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilNoEntryIcon],svg[pepicons-pencil-no-entry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10 3.5a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13M2.5 10a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0"></svg:path><svg:path d="M15.304 4.697a.5.5 0 0 1 0 .707l-9.9 9.9a.5.5 0 1 1-.707-.707l9.9-9.9a.5.5 0 0 1 .707 0"></svg:path></svg:g>`,
})
export class PepiconsPencilNoEntryIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilNoEntryCircleIcon],svg[pepicons-pencil-no-entry-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 6.5a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13M5.5 13a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0"></svg:path><svg:path d="M18.304 7.697a.5.5 0 0 1 0 .707l-9.9 9.9a.5.5 0 1 1-.707-.707l9.9-9.9a.5.5 0 0 1 .707 0"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilNoEntryCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilNoEntryCircleFilledIcon],svg[pepicons-pencil-no-entry-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilNoEntryCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 6.5a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13M5.5 13a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0"></svg:path><svg:path d="M18.304 7.697a.5.5 0 0 1 0 .707l-9.9 9.9a.5.5 0 1 1-.707-.707l9.9-9.9a.5.5 0 0 1 .707 0"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilNoEntryCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilNoEntryCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilNoEntryCircleOffIcon],svg[pepicons-pencil-no-entry-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 6.5a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13M5.5 13a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M18.304 7.697a.5.5 0 0 1 0 .707l-9.9 9.9a.5.5 0 1 1-.707-.707l9.9-9.9a.5.5 0 0 1 .707 0" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilNoEntryCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilNoEntryOffIcon],svg[pepicons-pencil-no-entry-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 3.5a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13M2.5 10a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15.304 4.697a.5.5 0 0 1 0 .707l-9.9 9.9a.5.5 0 1 1-.707-.707l9.9-9.9a.5.5 0 0 1 .707 0" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilNoEntryOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilNutIcon],svg[pepicons-pencil-nut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14.722 16.744a1.5 1.5 0 0 1-1.302.756H6.58a1.5 1.5 0 0 1-1.302-.756l-3.429-6a1.5 1.5 0 0 1 0-1.488l3.429-6A1.5 1.5 0 0 1 6.58 2.5h6.84a1.5 1.5 0 0 1 1.302.756l3.429 6a1.5 1.5 0 0 1 0 1.488zM13.42 16.5a.5.5 0 0 0 .434-.252l3.428-6a.5.5 0 0 0 0-.496l-3.428-6a.5.5 0 0 0-.434-.252H6.58a.5.5 0 0 0-.434.252l-3.428 6a.5.5 0 0 0 0 .496l3.428 6a.5.5 0 0 0 .434.252z"></svg:path><svg:path d="M10 7.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M6.5 10a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0"></svg:path></svg:g>`,
})
export class PepiconsPencilNutIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilNutCircleIcon],svg[pepicons-pencil-nut-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17.722 19.744a1.5 1.5 0 0 1-1.302.756H9.58a1.5 1.5 0 0 1-1.302-.756l-3.429-6a1.5 1.5 0 0 1 0-1.488l3.429-6A1.5 1.5 0 0 1 9.58 5.5h6.84a1.5 1.5 0 0 1 1.302.756l3.429 6a1.5 1.5 0 0 1 0 1.488zM16.42 19.5a.5.5 0 0 0 .434-.252l3.428-6a.5.5 0 0 0 0-.496l-3.428-6a.5.5 0 0 0-.434-.252H9.58a.5.5 0 0 0-.434.252l-3.428 6a.5.5 0 0 0 0 .496l3.428 6a.5.5 0 0 0 .434.252z"></svg:path><svg:path d="M13 10.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M9.5 13a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilNutCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilNutCircleFilledIcon],svg[pepicons-pencil-nut-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilNutCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17.722 19.744a1.5 1.5 0 0 1-1.302.756H9.58a1.5 1.5 0 0 1-1.302-.756l-3.429-6a1.5 1.5 0 0 1 0-1.488l3.429-6A1.5 1.5 0 0 1 9.58 5.5h6.84a1.5 1.5 0 0 1 1.302.756l3.429 6a1.5 1.5 0 0 1 0 1.488zM16.42 19.5a.5.5 0 0 0 .434-.252l3.428-6a.5.5 0 0 0 0-.496l-3.428-6a.5.5 0 0 0-.434-.252H9.58a.5.5 0 0 0-.434.252l-3.428 6a.5.5 0 0 0 0 .496l3.428 6a.5.5 0 0 0 .434.252z"></svg:path><svg:path d="M13 10.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M9.5 13a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilNutCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilNutCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilNutCircleOffIcon],svg[pepicons-pencil-nut-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M17.722 19.744a1.5 1.5 0 0 1-1.302.756H9.58a1.5 1.5 0 0 1-1.302-.756l-3.429-6a1.5 1.5 0 0 1 0-1.488l3.429-6A1.5 1.5 0 0 1 9.58 5.5h6.84a1.5 1.5 0 0 1 1.302.756l3.429 6a1.5 1.5 0 0 1 0 1.488zM16.42 19.5a.5.5 0 0 0 .434-.252l3.428-6a.5.5 0 0 0 0-.496l-3.428-6a.5.5 0 0 0-.434-.252H9.58a.5.5 0 0 0-.434.252l-3.428 6a.5.5 0 0 0 0 .496l3.428 6a.5.5 0 0 0 .434.252z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 10.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M9.5 13a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilNutCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilNutOffIcon],svg[pepicons-pencil-nut-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14.722 16.744a1.5 1.5 0 0 1-1.302.756H6.58a1.5 1.5 0 0 1-1.302-.756l-3.429-6a1.5 1.5 0 0 1 0-1.488l3.429-6A1.5 1.5 0 0 1 6.58 2.5h6.84a1.5 1.5 0 0 1 1.302.756l3.429 6a1.5 1.5 0 0 1 0 1.488zM13.42 16.5a.5.5 0 0 0 .434-.252l3.428-6a.5.5 0 0 0 0-.496l-3.428-6a.5.5 0 0 0-.434-.252H6.58a.5.5 0 0 0-.434.252l-3.428 6a.5.5 0 0 0 0 .496l3.428 6a.5.5 0 0 0 .434.252z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10 7.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M6.5 10a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilNutOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilOpenIcon],svg[pepicons-pencil-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.5 14.5v-3.25a.5.5 0 0 1 1 0V15a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h3.75a.5.5 0 0 1 0 1H5.5v9z"></svg:path><svg:path d="M10.354 10.354a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708.708z"></svg:path><svg:path d="M15.5 8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 1 0z"></svg:path><svg:path d="M11.5 5.5a.5.5 0 0 1 0-1H15a.5.5 0 0 1 0 1z"></svg:path></svg:g>`,
})
export class PepiconsPencilOpenIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilOpenCircleIcon],svg[pepicons-pencil-open-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17.5 17.5v-3.25a.5.5 0 0 1 1 0V18a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h3.75a.5.5 0 0 1 0 1H8.5v9z"></svg:path><svg:path d="M13.354 13.354a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708.708z"></svg:path><svg:path d="M18.5 11.5a.5.5 0 0 1-1 0V8a.5.5 0 0 1 1 0z"></svg:path><svg:path d="M14.5 8.5a.5.5 0 0 1 0-1H18a.5.5 0 0 1 0 1z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilOpenCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilOpenCircleFilledIcon],svg[pepicons-pencil-open-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilOpenCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M17.5 17.5v-3.25a.5.5 0 0 1 1 0V18a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h3.75a.5.5 0 0 1 0 1H8.5v9z"></svg:path><svg:path d="M13.354 13.354a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708.708z"></svg:path><svg:path d="M18.5 11.5a.5.5 0 0 1-1 0V8a.5.5 0 0 1 1 0z"></svg:path><svg:path d="M14.5 8.5a.5.5 0 0 1 0-1H18a.5.5 0 0 1 0 1z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilOpenCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilOpenCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilOpenCircleOffIcon],svg[pepicons-pencil-open-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17.5 17.5v-3.25a.5.5 0 0 1 1 0V18a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h3.75a.5.5 0 0 1 0 1H8.5v9z"></svg:path><svg:path d="M13.354 13.354a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708.708z"></svg:path><svg:path d="M18.5 11.5a.5.5 0 0 1-1 0V8a.5.5 0 0 1 1 0z"></svg:path><svg:path d="M14.5 8.5a.5.5 0 0 1 0-1H18a.5.5 0 0 1 0 1zM4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilOpenCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilOpenOffIcon],svg[pepicons-pencil-open-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.5 14.5v-3.25a.5.5 0 0 1 1 0V15a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h3.75a.5.5 0 0 1 0 1H5.5v9z"></svg:path><svg:path d="M10.354 10.354a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708.708z"></svg:path><svg:path d="M15.5 8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 1 0z"></svg:path><svg:path d="M11.5 5.5a.5.5 0 0 1 0-1H15a.5.5 0 0 1 0 1zM1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilOpenOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPaintPalletIcon],svg[pepicons-pencil-paint-pallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14.725 13.334c.97-3.623-1.336-7.377-5.135-8.395C5.323 3.795-.725 6.762.544 10.35c.383 1.084 1.134 1.341 2.682 1.363l.108.002c1.1.013 1.471.1 1.678.436c.214.348.216.756.054 1.788c-.067.422-.088.569-.113.794c-.145 1.3.067 2.274.89 3.16c2.584 2.784 7.788-.48 8.882-4.56M1.486 10.017c-.908-2.57 4.217-5.084 7.845-4.112c3.277.878 5.252 4.093 4.428 7.17c-.924 3.446-5.287 6.182-7.183 4.14c-.594-.64-.745-1.333-.63-2.37c.024-.205.044-.344.108-.75c.2-1.275.197-1.836-.19-2.467c-.465-.756-1.059-.894-2.517-.912l-.107-.002c-1.159-.016-1.562-.154-1.754-.697" clip-rule="evenodd"></svg:path><svg:path d="M4.75 9.5a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m4 0a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m2.5 3a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5M9.75 16a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m3.62-12.395a1 1 0 0 1 1.371.443l4.093 8.4a.652.652 0 0 1-1.149.611l-4.708-8.07a1 1 0 0 1 .394-1.384"></svg:path><svg:path fill-rule="evenodd" d="M11.538 3.484c.486.915 1.305 1.171 2.097.75c.791-.42 1.038-1.243.551-2.158C13.63 1.028 12.438.078 11.648.497s-.668 1.939-.11 2.987m.882-.47a3.2 3.2 0 0 1-.32-1.137a2 2 0 0 1 .018-.496l.018.009c.05.024.205.096.403.254c.302.241.602.596.764.901c.229.43.164.646-.138.807c-.3.16-.516.092-.745-.337" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPaintPalletIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPaintPalletCircleIcon],svg[pepicons-pencil-paint-pallet-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M17.725 16.334c.97-3.623-1.336-7.377-5.135-8.395C8.323 6.795 2.275 9.762 3.544 13.35c.383 1.084 1.134 1.341 2.682 1.363l.108.002c1.1.013 1.471.1 1.678.436c.214.348.216.756.054 1.788c-.067.422-.088.569-.113.794c-.145 1.3.067 2.274.89 3.16c2.584 2.784 7.788-.48 8.882-4.56M4.486 13.017c-.908-2.57 4.217-5.084 7.845-4.112c3.277.878 5.252 4.093 4.428 7.17c-.924 3.446-5.287 6.182-7.183 4.14c-.594-.64-.745-1.333-.63-2.37c.024-.205.044-.343.108-.75c.2-1.275.197-1.836-.19-2.467c-.465-.756-1.059-.894-2.517-.912l-.107-.002c-1.159-.016-1.562-.154-1.754-.697" clip-rule="evenodd"></svg:path><svg:path d="M7.75 12.5a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m4 0a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m2.5 3a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m-1.5 3.5a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m3.62-12.395a1 1 0 0 1 1.371.443l4.093 8.4a.652.652 0 0 1-1.149.611l-4.708-8.07a1 1 0 0 1 .394-1.384"></svg:path><svg:path fill-rule="evenodd" d="M14.538 6.484c.486.915 1.305 1.171 2.097.75c.791-.42 1.038-1.243.551-2.158c-.557-1.048-1.748-1.998-2.538-1.579s-.668 1.939-.11 2.987m.882-.47a3.2 3.2 0 0 1-.32-1.137a2 2 0 0 1 .018-.496l.018.009c.05.024.205.096.403.254c.302.241.602.596.764.901c.229.43.164.646-.138.806c-.3.16-.516.093-.745-.336" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPaintPalletCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPaintPalletCircleFilledIcon],svg[pepicons-pencil-paint-pallet-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPaintPalletCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M17.725 16.334c.97-3.623-1.336-7.377-5.135-8.395C8.323 6.795 2.275 9.762 3.544 13.35c.383 1.084 1.134 1.341 2.682 1.363l.108.002c1.1.013 1.471.1 1.678.436c.214.348.216.756.054 1.788c-.067.422-.088.569-.113.794c-.145 1.3.067 2.274.89 3.16c2.584 2.784 7.788-.48 8.882-4.56M4.486 13.017c-.908-2.57 4.217-5.084 7.845-4.112c3.277.878 5.252 4.093 4.428 7.17c-.924 3.446-5.287 6.182-7.183 4.14c-.594-.64-.745-1.333-.63-2.37c.024-.205.044-.343.108-.75c.2-1.275.197-1.836-.19-2.467c-.465-.756-1.059-.894-2.517-.912l-.107-.002c-1.159-.016-1.562-.154-1.754-.697" clip-rule="evenodd"></svg:path><svg:path d="M7.75 12.5a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m4 0a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m2.5 3a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m-1.5 3.5a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m3.62-12.395a1 1 0 0 1 1.371.443l4.093 8.4a.652.652 0 0 1-1.149.611l-4.708-8.07a1 1 0 0 1 .394-1.384"></svg:path><svg:path fill-rule="evenodd" d="M14.538 6.484c.486.915 1.305 1.171 2.097.75c.791-.42 1.038-1.243.551-2.158c-.557-1.048-1.748-1.998-2.538-1.579s-.668 1.939-.11 2.987m.882-.47a3.2 3.2 0 0 1-.32-1.137a2 2 0 0 1 .018-.496l.018.009c.05.024.205.096.403.254c.302.241.602.596.764.901c.229.43.164.646-.138.806c-.3.16-.516.093-.745-.336" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPaintPalletCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPaintPalletCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPaintPalletCircleOffIcon],svg[pepicons-pencil-paint-pallet-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M17.725 16.334c.97-3.623-1.336-7.377-5.135-8.395C8.323 6.795 2.275 9.762 3.544 13.35c.383 1.084 1.134 1.341 2.682 1.363l.108.002c1.1.013 1.471.1 1.678.436c.214.348.216.756.054 1.788c-.067.422-.088.569-.113.794c-.145 1.3.067 2.274.89 3.16c2.584 2.784 7.788-.48 8.882-4.56M4.486 13.017c-.908-2.57 4.217-5.084 7.845-4.112c3.277.878 5.252 4.093 4.428 7.17c-.924 3.446-5.287 6.182-7.183 4.14c-.594-.64-.745-1.333-.63-2.37c.024-.205.044-.343.108-.75c.2-1.275.197-1.836-.19-2.467c-.465-.756-1.059-.894-2.517-.912l-.107-.002c-1.159-.016-1.562-.154-1.754-.697" clip-rule="evenodd"></svg:path><svg:path d="M7.75 12.5a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m4 0a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m2.5 3a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m-1.5 3.5a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m3.62-12.395a1 1 0 0 1 1.371.443l4.093 8.4a.652.652 0 0 1-1.149.611l-4.708-8.07a1 1 0 0 1 .394-1.384"></svg:path><svg:path fill-rule="evenodd" d="M14.538 6.484c.486.915 1.305 1.171 2.097.75c.791-.42 1.038-1.243.551-2.158c-.557-1.048-1.748-1.998-2.538-1.579s-.668 1.939-.11 2.987m.882-.47a3.2 3.2 0 0 1-.32-1.137a2 2 0 0 1 .018-.496l.018.009c.05.024.205.096.403.254c.302.241.602.596.764.901c.229.43.164.646-.138.806c-.3.16-.516.093-.745-.336" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPaintPalletCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPaintPalletOffIcon],svg[pepicons-pencil-paint-pallet-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14.725 13.334c.97-3.623-1.336-7.377-5.135-8.395C5.323 3.795-.725 6.762.544 10.35c.383 1.084 1.134 1.341 2.682 1.363l.108.002c1.1.013 1.471.1 1.678.436c.214.348.216.756.054 1.788c-.067.422-.088.569-.113.794c-.145 1.3.067 2.274.89 3.16c2.584 2.784 7.788-.48 8.882-4.56M1.486 10.017c-.908-2.57 4.217-5.084 7.845-4.112c3.277.878 5.252 4.093 4.428 7.17c-.924 3.446-5.287 6.182-7.183 4.14c-.594-.64-.745-1.333-.63-2.37c.024-.205.044-.344.108-.75c.2-1.275.197-1.836-.19-2.467c-.465-.756-1.059-.894-2.517-.912l-.107-.002c-1.159-.016-1.562-.154-1.754-.697" clip-rule="evenodd"></svg:path><svg:path d="M4.75 9.5a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m4 0a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m2.5 3a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5M9.75 16a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m3.62-12.395a1 1 0 0 1 1.371.443l4.093 8.4a.652.652 0 0 1-1.149.611l-4.708-8.07a1 1 0 0 1 .394-1.384"></svg:path><svg:path fill-rule="evenodd" d="M11.538 3.484c.486.915 1.305 1.171 2.097.75c.791-.42 1.038-1.243.551-2.158C13.63 1.028 12.438.078 11.648.497s-.668 1.939-.11 2.987m.882-.47a3.2 3.2 0 0 1-.32-1.137a2 2 0 0 1 .018-.496l.018.009c.05.024.205.096.403.254c.302.241.602.596.764.901c.229.43.164.646-.138.807c-.3.16-.516.092-.745-.337" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPaintPalletOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPaperPlaneIcon],svg[pepicons-pencil-paper-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M.874 7.454L8.697 9.5l2.803 7.868a.5.5 0 0 0 .95-.026l4.746-16.085a.5.5 0 0 0-.655-.61L.826 6.502a.5.5 0 0 0 .048.952m1.783-.567l13.296-4.954l-4.027 13.652l-2.376-6.67a.5.5 0 0 0-.344-.315z" clip-rule="evenodd"></svg:path><svg:path d="m16 1.293l.707.707L9 9.707L8.293 9z"></svg:path></svg:g>`,
})
export class PepiconsPencilPaperPlaneIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPaperPlaneCircleIcon],svg[pepicons-pencil-paper-plane-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m3.874 10.454l7.823 2.046l2.803 7.868a.5.5 0 0 0 .95-.026l4.746-16.085a.5.5 0 0 0-.655-.61L3.826 9.502a.5.5 0 0 0 .048.952m1.783-.567l13.296-4.954l-4.027 13.652l-2.376-6.67a.5.5 0 0 0-.344-.315z" clip-rule="evenodd"></svg:path><svg:path d="m19 4.293l.707.707L12 12.707L11.293 12z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPaperPlaneCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPaperPlaneCircleFilledIcon],svg[pepicons-pencil-paper-plane-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPaperPlaneCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="m3.874 10.454l7.823 2.046l2.803 7.868a.5.5 0 0 0 .95-.026l4.746-16.085a.5.5 0 0 0-.655-.61L3.826 9.502a.5.5 0 0 0 .048.952m1.783-.567l13.296-4.954l-4.027 13.652l-2.376-6.67a.5.5 0 0 0-.344-.315z" clip-rule="evenodd"></svg:path><svg:path d="m19 4.293l.707.707L12 12.707L11.293 12z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPaperPlaneCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPaperPlaneCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPaperPlaneCircleOffIcon],svg[pepicons-pencil-paper-plane-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m3.874 10.454l7.823 2.046l2.803 7.868a.5.5 0 0 0 .95-.026l4.746-16.085a.5.5 0 0 0-.655-.61L3.826 9.502a.5.5 0 0 0 .048.952m1.783-.567l13.296-4.954l-4.027 13.652l-2.376-6.67a.5.5 0 0 0-.344-.315z" clip-rule="evenodd"></svg:path><svg:path d="m19 4.293l.707.707L12 12.707L11.293 12z"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPaperPlaneCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPaperPlaneOffIcon],svg[pepicons-pencil-paper-plane-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M.874 7.454L8.697 9.5l2.803 7.868a.5.5 0 0 0 .95-.026l4.746-16.085a.5.5 0 0 0-.655-.61L.826 6.502a.5.5 0 0 0 .048.952m1.783-.567l13.296-4.954l-4.027 13.652l-2.376-6.67a.5.5 0 0 0-.344-.315z" clip-rule="evenodd"></svg:path><svg:path d="m16 1.293l.707.707L9 9.707L8.293 9z"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPaperPlaneOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPaperclipIcon],svg[pepicons-pencil-paperclip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.455 3.188a4 4 0 0 1 5.79 5.521l-5.349 5.608a2.25 2.25 0 0 1-3.258-3.106l4.485-4.706a.5.5 0 1 1 .724.69L7.362 11.9a1.25 1.25 0 0 0 1.81 1.726l5.349-5.608a3 3 0 1 0-4.342-4.141L5.348 8.944a.5.5 0 1 1-.724-.69z"></svg:path><svg:path d="M4.463 16.391c-.439-.419-.824-1.056-1.145-1.758c-.71-1.552-.17-3.383 1.097-4.712L8.8 5.325a.5.5 0 0 0-.724-.69L3.692 9.231c-1.455 1.526-2.214 3.783-1.284 5.818c.342.747.791 1.518 1.365 2.066c.566.54 1.342.947 2.094 1.251c2.095.849 4.337-.039 5.791-1.593l5.692-6.081a.5.5 0 1 0-.73-.684l-5.692 6.082c-1.267 1.354-3.089 1.996-4.686 1.35c-.704-.286-1.346-.636-1.779-1.049"></svg:path></svg:g>`,
})
export class PepiconsPencilPaperclipIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPaperclipCircleIcon],svg[pepicons-pencil-paperclip-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.455 6.188a4 4 0 0 1 5.79 5.521l-5.349 5.608a2.25 2.25 0 0 1-3.258-3.106l4.485-4.706a.5.5 0 1 1 .724.69L10.362 14.9a1.25 1.25 0 0 0 1.81 1.726l5.349-5.608a3 3 0 1 0-4.342-4.141l-4.831 5.066a.5.5 0 1 1-.724-.69z"></svg:path><svg:path d="M7.463 19.391c-.439-.419-.824-1.056-1.145-1.758c-.71-1.552-.17-3.383 1.097-4.712L11.8 8.325a.5.5 0 0 0-.724-.69l-4.383 4.596c-1.455 1.526-2.214 3.783-1.284 5.818c.342.747.791 1.518 1.365 2.066c.566.54 1.342.947 2.094 1.251c2.095.849 4.337-.039 5.791-1.593l5.692-6.081a.5.5 0 1 0-.73-.684l-5.692 6.082c-1.267 1.354-3.089 1.996-4.686 1.35c-.704-.286-1.346-.636-1.779-1.049"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilPaperclipCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPaperclipCircleFilledIcon],svg[pepicons-pencil-paperclip-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPaperclipCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.455 6.188a4 4 0 0 1 5.79 5.521l-5.349 5.608a2.25 2.25 0 0 1-3.258-3.106l4.485-4.706a.5.5 0 1 1 .724.69L10.362 14.9a1.25 1.25 0 0 0 1.81 1.726l5.349-5.608a3 3 0 1 0-4.342-4.141l-4.831 5.066a.5.5 0 1 1-.724-.69z"></svg:path><svg:path d="M7.463 19.391c-.439-.419-.824-1.056-1.145-1.758c-.71-1.552-.17-3.383 1.097-4.712L11.8 8.325a.5.5 0 0 0-.724-.69l-4.383 4.596c-1.455 1.526-2.214 3.783-1.284 5.818c.342.747.791 1.518 1.365 2.066c.566.54 1.342.947 2.094 1.251c2.095.849 4.337-.039 5.791-1.593l5.692-6.081a.5.5 0 1 0-.73-.684l-5.692 6.082c-1.267 1.354-3.089 1.996-4.686 1.35c-.704-.286-1.346-.636-1.779-1.049"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPaperclipCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPaperclipCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPaperclipCircleOffIcon],svg[pepicons-pencil-paperclip-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.455 6.188a4 4 0 0 1 5.79 5.521l-5.349 5.608a2.25 2.25 0 0 1-3.258-3.106l4.485-4.706a.5.5 0 1 1 .724.69L10.362 14.9a1.25 1.25 0 0 0 1.81 1.726l5.349-5.608a3 3 0 1 0-4.342-4.141l-4.831 5.066a.5.5 0 1 1-.724-.69z"></svg:path><svg:path d="M7.463 19.391c-.439-.419-.824-1.056-1.145-1.758c-.71-1.552-.17-3.383 1.097-4.712L11.8 8.325a.5.5 0 0 0-.724-.69l-4.383 4.596c-1.455 1.526-2.214 3.783-1.284 5.818c.342.747.791 1.518 1.365 2.066c.566.54 1.342.947 2.094 1.251c2.095.849 4.337-.039 5.791-1.593l5.692-6.081a.5.5 0 1 0-.73-.684l-5.692 6.082c-1.267 1.354-3.089 1.996-4.686 1.35c-.704-.286-1.346-.636-1.779-1.049"></svg:path></svg:g><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPaperclipCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPaperclipOffIcon],svg[pepicons-pencil-paperclip-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.455 3.188a4 4 0 0 1 5.79 5.521l-5.349 5.608a2.25 2.25 0 0 1-3.258-3.106l4.485-4.706a.5.5 0 1 1 .724.69L7.362 11.9a1.25 1.25 0 0 0 1.81 1.726l5.349-5.608a3 3 0 1 0-4.342-4.141L5.348 8.944a.5.5 0 1 1-.724-.69z"></svg:path><svg:path d="M4.463 16.391c-.439-.419-.824-1.056-1.145-1.758c-.71-1.552-.17-3.383 1.097-4.712L8.8 5.325a.5.5 0 0 0-.724-.69L3.692 9.231c-1.455 1.526-2.214 3.783-1.284 5.818c.342.747.791 1.518 1.365 2.066c.566.54 1.342.947 2.094 1.251c2.095.849 4.337-.039 5.791-1.593l5.692-6.081a.5.5 0 1 0-.73-.684l-5.692 6.082c-1.267 1.354-3.089 1.996-4.686 1.35c-.704-.286-1.346-.636-1.779-1.049"></svg:path></svg:g><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPaperclipOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPauseIcon],svg[pepicons-pencil-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 14V6a1 1 0 0 0-2 0v8a1 1 0 1 0 2 0M7 4a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2m7 10V6a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0M13 4a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPencilPauseIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPauseCircleIcon],svg[pepicons-pencil-pause-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11 17V9a1 1 0 0 0-2 0v8a1 1 0 1 0 2 0M10 7a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0V9a2 2 0 0 0-2-2m7 10V9a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0M16 7a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0V9a2 2 0 0 0-2-2"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilPauseCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPauseCircleFilledIcon],svg[pepicons-pencil-pause-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPauseCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M11 17V9a1 1 0 0 0-2 0v8a1 1 0 1 0 2 0M10 7a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0V9a2 2 0 0 0-2-2m7 10V9a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0M16 7a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0V9a2 2 0 0 0-2-2" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPauseCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPauseCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPauseCircleOffIcon],svg[pepicons-pencil-pause-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11 17V9a1 1 0 0 0-2 0v8a1 1 0 1 0 2 0M10 7a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0V9a2 2 0 0 0-2-2m7 10V9a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0M16 7a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0V9a2 2 0 0 0-2-2" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPauseCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPauseOffIcon],svg[pepicons-pencil-pause-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8 14V6a1 1 0 0 0-2 0v8a1 1 0 1 0 2 0M7 4a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2m7 10V6a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0M13 4a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPauseOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPenIcon],svg[pepicons-pencil-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3.944 11.79a.5.5 0 0 1 .141-.277L14.163 1.435a.5.5 0 0 1 .707 0l3.89 3.89a.5.5 0 0 1 0 .706L8.68 16.11a.5.5 0 0 1-.277.14l-4.595.706a.5.5 0 0 1-.57-.57zm.964.314l-.577 3.76l3.759-.578l9.609-9.608l-3.183-3.182z"></svg:path><svg:path d="m15.472 8.173l-3.537-3.53l.707-.708l3.536 3.53z"></svg:path></svg:g>`,
})
export class PepiconsPencilPenIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPenCircleIcon],svg[pepicons-pencil-pen-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.944 14.79a.5.5 0 0 1 .141-.277L17.163 4.435a.5.5 0 0 1 .707 0l3.89 3.89a.5.5 0 0 1 0 .706L11.68 19.11a.5.5 0 0 1-.277.14l-4.595.706a.5.5 0 0 1-.57-.57zm.964.314l-.577 3.76l3.759-.578l9.609-9.608l-3.183-3.182z"></svg:path><svg:path d="m18.472 11.173l-3.537-3.53l.707-.708l3.536 3.53z"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilPenCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPenCircleFilledIcon],svg[pepicons-pencil-pen-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPenCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.944 14.79a.5.5 0 0 1 .141-.277L17.163 4.435a.5.5 0 0 1 .707 0l3.89 3.89a.5.5 0 0 1 0 .706L11.68 19.11a.5.5 0 0 1-.277.14l-4.595.706a.5.5 0 0 1-.57-.57zm.964.314l-.577 3.76l3.759-.578l9.609-9.608l-3.183-3.182z"></svg:path><svg:path d="m18.472 11.173l-3.537-3.53l.707-.708l3.536 3.53z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPenCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPenCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPenCircleOffIcon],svg[pepicons-pencil-pen-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.944 14.79a.5.5 0 0 1 .141-.277L17.163 4.435a.5.5 0 0 1 .707 0l3.89 3.89a.5.5 0 0 1 0 .706L11.68 19.11a.5.5 0 0 1-.277.14l-4.595.706a.5.5 0 0 1-.57-.57zm.964.314l-.577 3.76l3.759-.578l9.609-9.608l-3.183-3.182z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="m18.472 11.173l-3.537-3.53l.707-.708l3.536 3.53z" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPenCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPenOffIcon],svg[pepicons-pencil-pen-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3.944 11.79a.5.5 0 0 1 .141-.277L14.163 1.435a.5.5 0 0 1 .707 0l3.89 3.89a.5.5 0 0 1 0 .706L8.68 16.11a.5.5 0 0 1-.277.14l-4.595.706a.5.5 0 0 1-.57-.57zm.964.314l-.577 3.76l3.759-.578l9.609-9.608l-3.183-3.182z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="m15.472 8.173l-3.537-3.53l.707-.708l3.536 3.53z" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPenOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPeopleIcon],svg[pepicons-pencil-people-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path d="M3.854 8.896a.5.5 0 0 1 0 .708l-.338.337A3.47 3.47 0 0 0 2.5 12.394v1.856a.5.5 0 1 1-1 0v-1.856a4.47 4.47 0 0 1 1.309-3.16l.337-.338a.5.5 0 0 1 .708 0m11.792-.3a.5.5 0 0 0 0 .708l.338.337A3.47 3.47 0 0 1 17 12.094v2.156a.5.5 0 0 0 1 0v-2.156a4.47 4.47 0 0 0-1.309-3.16l-.337-.338a.5.5 0 0 0-.708 0"></svg:path><svg:path d="M14 9a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 1a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-4.5 3.25a2.5 2.5 0 0 0-2.5 2.5v1.3a.5.5 0 0 1-1 0v-1.3a3.5 3.5 0 0 1 7 0v1.3a.5.5 0 1 1-1 0v-1.3a2.5 2.5 0 0 0-2.5-2.5"></svg:path><svg:path d="M9.5 11.75a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path></svg:g>`,
})
export class PepiconsPencilPeopleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPeopleCircleIcon],svg[pepicons-pencil-people-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path d="M6.854 11.896a.5.5 0 0 1 0 .708l-.338.337A3.47 3.47 0 0 0 5.5 15.394v1.856a.5.5 0 1 1-1 0v-1.856a4.47 4.47 0 0 1 1.309-3.16l.337-.338a.5.5 0 0 1 .708 0m11.792-.3a.5.5 0 0 0 0 .708l.338.337A3.47 3.47 0 0 1 20 15.094v2.156a.5.5 0 0 0 1 0v-2.156a4.47 4.47 0 0 0-1.309-3.16l-.337-.338a.5.5 0 0 0-.708 0"></svg:path><svg:path d="M17 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 1a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-4.5 3.25a2.5 2.5 0 0 0-2.5 2.5v1.3a.5.5 0 0 1-1 0v-1.3a3.5 3.5 0 0 1 7 0v1.3a.5.5 0 1 1-1 0v-1.3a2.5 2.5 0 0 0-2.5-2.5"></svg:path><svg:path d="M12.5 14.75a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilPeopleCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPeopleCircleFilledIcon],svg[pepicons-pencil-people-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPeopleCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path d="M6.854 11.896a.5.5 0 0 1 0 .708l-.338.337A3.47 3.47 0 0 0 5.5 15.394v1.856a.5.5 0 1 1-1 0v-1.856a4.47 4.47 0 0 1 1.309-3.16l.337-.338a.5.5 0 0 1 .708 0m11.792-.3a.5.5 0 0 0 0 .708l.338.337A3.47 3.47 0 0 1 20 15.094v2.156a.5.5 0 0 0 1 0v-2.156a4.47 4.47 0 0 0-1.309-3.16l-.337-.338a.5.5 0 0 0-.708 0"></svg:path><svg:path d="M17 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 1a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-4.5 3.25a2.5 2.5 0 0 0-2.5 2.5v1.3a.5.5 0 0 1-1 0v-1.3a3.5 3.5 0 0 1 7 0v1.3a.5.5 0 1 1-1 0v-1.3a2.5 2.5 0 0 0-2.5-2.5"></svg:path><svg:path d="M12.5 14.75a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPeopleCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPeopleCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPeopleCircleOffIcon],svg[pepicons-pencil-people-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.854 11.896a.5.5 0 0 1 0 .708l-.338.337A3.47 3.47 0 0 0 5.5 15.394v1.856a.5.5 0 1 1-1 0v-1.856a4.47 4.47 0 0 1 1.309-3.16l.337-.338a.5.5 0 0 1 .708 0m11.792-.3a.5.5 0 0 0 0 .708l.338.337A3.47 3.47 0 0 1 20 15.094v2.156a.5.5 0 0 0 1 0v-2.156a4.47 4.47 0 0 0-1.309-3.16l-.337-.338a.5.5 0 0 0-.708 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 1a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-4.5 3.25a2.5 2.5 0 0 0-2.5 2.5v1.3a.5.5 0 0 1-1 0v-1.3a3.5 3.5 0 0 1 7 0v1.3a.5.5 0 1 1-1 0v-1.3a2.5 2.5 0 0 0-2.5-2.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.5 14.75a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPeopleCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPeopleOffIcon],svg[pepicons-pencil-people-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3.854 8.896a.5.5 0 0 1 0 .708l-.338.337A3.47 3.47 0 0 0 2.5 12.394v1.856a.5.5 0 1 1-1 0v-1.856a4.47 4.47 0 0 1 1.309-3.16l.337-.338a.5.5 0 0 1 .708 0m11.792-.3a.5.5 0 0 0 0 .708l.338.337A3.47 3.47 0 0 1 17 12.094v2.156a.5.5 0 0 0 1 0v-2.156a4.47 4.47 0 0 0-1.309-3.16l-.337-.338a.5.5 0 0 0-.708 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14 9a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 1a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-4.5 3.25a2.5 2.5 0 0 0-2.5 2.5v1.3a.5.5 0 0 1-1 0v-1.3a3.5 3.5 0 0 1 7 0v1.3a.5.5 0 1 1-1 0v-1.3a2.5 2.5 0 0 0-2.5-2.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.5 11.75a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPeopleOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPersonIcon],svg[pepicons-pencil-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:circle cx="9.5" cy="5.5" r="3"></svg:circle><svg:path d="M15 16.5v-2c0-3.098-2.495-6-5.5-6S4 11.402 4 14.5v2"></svg:path></svg:g>`,
})
export class PepiconsPencilPersonIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPersonCheckmarkIcon],svg[pepicons-pencil-person-checkmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.8 3a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M3.3 5.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0"></svg:path><svg:path d="M.8 14.5c0-3.322 2.67-6.5 6-6.5s6 3.178 6 6.5v2a.5.5 0 0 1-1 0v-2c0-2.873-2.32-5.5-5-5.5s-5 2.627-5 5.5v2a.5.5 0 0 1-1 0zM18.154 3.563a.5.5 0 0 1 .194.68l-2.778 5a.5.5 0 0 1-.874-.486l2.778-5a.5.5 0 0 1 .68-.194"></svg:path><svg:path d="M11.965 6.465a.5.5 0 0 1 .703-.078l2.778 2.223a.5.5 0 1 1-.625.78l-2.778-2.222a.5.5 0 0 1-.078-.703"></svg:path></svg:g>`,
})
export class PepiconsPencilPersonCheckmarkIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPersonCheckmarkCircleIcon],svg[pepicons-pencil-person-checkmark-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.8 6a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M6.3 8.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0"></svg:path><svg:path d="M3.8 17.5c0-3.322 2.67-6.5 6-6.5s6 3.178 6 6.5v2a.5.5 0 0 1-1 0v-2c0-2.873-2.32-5.5-5-5.5s-5 2.627-5 5.5v2a.5.5 0 0 1-1 0zM21.154 6.563a.5.5 0 0 1 .194.68l-2.778 5a.5.5 0 0 1-.874-.486l2.778-5a.5.5 0 0 1 .68-.194"></svg:path><svg:path d="M14.965 9.465a.5.5 0 0 1 .703-.078l2.778 2.223a.5.5 0 1 1-.625.78l-2.778-2.222a.5.5 0 0 1-.078-.703"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilPersonCheckmarkCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPersonCheckmarkCircleFilledIcon],svg[pepicons-pencil-person-checkmark-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPersonCheckmarkCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.8 6a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M6.3 8.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0"></svg:path><svg:path d="M3.8 17.5c0-3.322 2.67-6.5 6-6.5s6 3.178 6 6.5v2a.5.5 0 0 1-1 0v-2c0-2.873-2.32-5.5-5-5.5s-5 2.627-5 5.5v2a.5.5 0 0 1-1 0zM21.154 6.563a.5.5 0 0 1 .194.68l-2.778 5a.5.5 0 0 1-.874-.486l2.778-5a.5.5 0 0 1 .68-.194"></svg:path><svg:path d="M14.965 9.465a.5.5 0 0 1 .703-.078l2.778 2.223a.5.5 0 1 1-.625.78l-2.778-2.222a.5.5 0 0 1-.078-.703"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPersonCheckmarkCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPersonCheckmarkCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPersonCheckmarkCircleOffIcon],svg[pepicons-pencil-person-checkmark-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.8 6a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M6.3 8.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0"></svg:path><svg:path d="M3.8 17.5c0-3.322 2.67-6.5 6-6.5s6 3.178 6 6.5v2a.5.5 0 0 1-1 0v-2c0-2.873-2.32-5.5-5-5.5s-5 2.627-5 5.5v2a.5.5 0 0 1-1 0zM21.154 6.563a.5.5 0 0 1 .194.68l-2.778 5a.5.5 0 0 1-.874-.486l2.778-5a.5.5 0 0 1 .68-.194"></svg:path><svg:path d="M14.965 9.465a.5.5 0 0 1 .703-.078l2.778 2.223a.5.5 0 1 1-.625.78l-2.778-2.222a.5.5 0 0 1-.078-.703"></svg:path></svg:g><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPersonCheckmarkCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPersonCheckmarkOffIcon],svg[pepicons-pencil-person-checkmark-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.8 3a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M3.3 5.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0"></svg:path><svg:path d="M.8 14.5c0-3.322 2.67-6.5 6-6.5s6 3.178 6 6.5v2a.5.5 0 0 1-1 0v-2c0-2.873-2.32-5.5-5-5.5s-5 2.627-5 5.5v2a.5.5 0 0 1-1 0zM18.154 3.563a.5.5 0 0 1 .194.68l-2.778 5a.5.5 0 0 1-.874-.486l2.778-5a.5.5 0 0 1 .68-.194"></svg:path><svg:path d="M11.965 6.465a.5.5 0 0 1 .703-.078l2.778 2.223a.5.5 0 1 1-.625.78l-2.778-2.222a.5.5 0 0 1-.078-.703"></svg:path></svg:g><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPersonCheckmarkOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPersonCircleIcon],svg[pepicons-pencil-person-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g stroke="currentColor" stroke-linecap="round" transform="translate(3 3)"><svg:circle cx="9.5" cy="5.5" r="3"></svg:circle><svg:path d="M15 16.5v-2c0-3.098-2.495-6-5.5-6S4 11.402 4 14.5v2"></svg:path></svg:g><svg:path fill="currentColor" fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPersonCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPersonCircleFilledIcon],svg[pepicons-pencil-person-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPersonCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g stroke="#000" stroke-linecap="round" transform="translate(3 3)"><svg:circle cx="9.5" cy="5.5" r="3"></svg:circle><svg:path d="M15 16.5v-2c0-3.098-2.495-6-5.5-6S4 11.402 4 14.5v2"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPersonCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPersonCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPersonCircleOffIcon],svg[pepicons-pencil-person-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g transform="translate(3 3)"><svg:circle cx="9.5" cy="5.5" r="3" stroke="currentColor" stroke-linecap="round"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" d="M15 16.5v-2c0-3.098-2.495-6-5.5-6S4 11.402 4 14.5v2"></svg:path><svg:path fill="currentColor" d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g><svg:path fill="currentColor" fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPersonCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPersonOffIcon],svg[pepicons-pencil-person-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="9.5" cy="5.5" r="3" stroke="currentColor" stroke-linecap="round"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" d="M15 16.5v-2c0-3.098-2.495-6-5.5-6S4 11.402 4 14.5v2"></svg:path><svg:path fill="currentColor" d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPersonOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPersonPlusIcon],svg[pepicons-pencil-person-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.95 6.75a.5.5 0 0 1 .5-.5h5.25a.5.5 0 1 1 0 1h-5.25a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M15 10a.5.5 0 0 1-.5-.5V4.25a.5.5 0 0 1 1 0V9.5a.5.5 0 0 1-.5.5M6.8 3a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M3.3 5.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0"></svg:path><svg:path d="M.8 14.5c0-3.322 2.67-6.5 6-6.5s6 3.178 6 6.5v2a.5.5 0 0 1-1 0v-2c0-2.873-2.32-5.5-5-5.5s-5 2.627-5 5.5v2a.5.5 0 0 1-1 0z"></svg:path></svg:g>`,
})
export class PepiconsPencilPersonPlusIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPersonPlusCircleIcon],svg[pepicons-pencil-person-plus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14.95 9.75a.5.5 0 0 1 .5-.5h5.25a.5.5 0 1 1 0 1h-5.25a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M18 13a.5.5 0 0 1-.5-.5V7.25a.5.5 0 0 1 1 0v5.25a.5.5 0 0 1-.5.5M9.8 6a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M6.3 8.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0"></svg:path><svg:path d="M3.8 17.5c0-3.322 2.67-6.5 6-6.5s6 3.178 6 6.5v2a.5.5 0 0 1-1 0v-2c0-2.873-2.32-5.5-5-5.5s-5 2.627-5 5.5v2a.5.5 0 0 1-1 0z"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilPersonPlusCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPersonPlusCircleFilledIcon],svg[pepicons-pencil-person-plus-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPersonPlusCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14.95 9.75a.5.5 0 0 1 .5-.5h5.25a.5.5 0 1 1 0 1h-5.25a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M18 13a.5.5 0 0 1-.5-.5V7.25a.5.5 0 0 1 1 0v5.25a.5.5 0 0 1-.5.5M9.8 6a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M6.3 8.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0"></svg:path><svg:path d="M3.8 17.5c0-3.322 2.67-6.5 6-6.5s6 3.178 6 6.5v2a.5.5 0 0 1-1 0v-2c0-2.873-2.32-5.5-5-5.5s-5 2.627-5 5.5v2a.5.5 0 0 1-1 0z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPersonPlusCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPersonPlusCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPersonPlusCircleOffIcon],svg[pepicons-pencil-person-plus-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14.95 9.75a.5.5 0 0 1 .5-.5h5.25a.5.5 0 1 1 0 1h-5.25a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M18 13a.5.5 0 0 1-.5-.5V7.25a.5.5 0 0 1 1 0v5.25a.5.5 0 0 1-.5.5M9.8 6a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M6.3 8.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0"></svg:path><svg:path d="M3.8 17.5c0-3.322 2.67-6.5 6-6.5s6 3.178 6 6.5v2a.5.5 0 0 1-1 0v-2c0-2.873-2.32-5.5-5-5.5s-5 2.627-5 5.5v2a.5.5 0 0 1-1 0z"></svg:path></svg:g><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPersonPlusCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPersonPlusOffIcon],svg[pepicons-pencil-person-plus-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.95 6.75a.5.5 0 0 1 .5-.5h5.25a.5.5 0 1 1 0 1h-5.25a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M15 10a.5.5 0 0 1-.5-.5V4.25a.5.5 0 0 1 1 0V9.5a.5.5 0 0 1-.5.5M6.8 3a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M3.3 5.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0"></svg:path><svg:path d="M.8 14.5c0-3.322 2.67-6.5 6-6.5s6 3.178 6 6.5v2a.5.5 0 0 1-1 0v-2c0-2.873-2.32-5.5-5-5.5s-5 2.627-5 5.5v2a.5.5 0 0 1-1 0z"></svg:path></svg:g><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPersonPlusOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPersonsIcon],svg[pepicons-pencil-persons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3.36 9.977a5.5 5.5 0 0 0-.923 3.05V14a.5.5 0 1 1-1 0v-.972A6.5 6.5 0 0 1 2.53 9.422l.108-.162a.5.5 0 1 1 .832.555z"></svg:path><svg:path d="M6.18 8.365c-1.09 0-2.107.544-2.711 1.45l-.832-.554a4.26 4.26 0 0 1 3.542-1.896h.22a.5.5 0 0 1 0 1zm3.078 1.6c.47.706.721 1.534.721 2.382h1a5.3 5.3 0 0 0-.889-2.936l-.1-.15a.5.5 0 1 0-.832.554z"></svg:path><svg:path d="M6.448 8.365c1.089 0 2.106.544 2.71 1.45l.832-.554a4.26 4.26 0 0 0-3.542-1.896h-.22a.5.5 0 1 0 0 1z"></svg:path><svg:path d="M6.25 7.25a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m0 1a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5m4.259 4.936a5.5 5.5 0 0 0-.924 3.051v1.034a.5.5 0 1 1-1 0v-1.034a6.5 6.5 0 0 1 1.091-3.605l.133-.2a.5.5 0 0 1 .832.556z"></svg:path><svg:path d="M13.42 11.5a3.34 3.34 0 0 0-2.78 1.488l-.831-.555A4.34 4.34 0 0 1 13.42 10.5h.224a.5.5 0 1 1 0 1zm3.187 1.686a5.5 5.5 0 0 1 .924 3.051v1.034a.5.5 0 1 0 1 0v-1.034a6.5 6.5 0 0 0-1.092-3.605l-.133-.2a.5.5 0 1 0-.832.556z"></svg:path><svg:path d="M13.695 11.5a3.34 3.34 0 0 1 2.78 1.488l.832-.555a4.34 4.34 0 0 0-3.612-1.933h-.225a.5.5 0 1 0 0 1z"></svg:path><svg:path d="M13.5 10.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m0 1a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5"></svg:path></svg:g>`,
})
export class PepiconsPencilPersonsIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPersonsCircleIcon],svg[pepicons-pencil-persons-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.36 12.977a5.5 5.5 0 0 0-.923 3.05V17a.5.5 0 1 1-1 0v-.972a6.5 6.5 0 0 1 1.092-3.606l.108-.162a.5.5 0 1 1 .832.555z"></svg:path><svg:path d="M9.18 11.365c-1.09 0-2.107.544-2.711 1.45l-.832-.554a4.26 4.26 0 0 1 3.542-1.896h.22a.5.5 0 0 1 0 1zm3.078 1.6c.47.706.721 1.534.721 2.382h1a5.3 5.3 0 0 0-.889-2.936l-.1-.15a.5.5 0 1 0-.832.554z"></svg:path><svg:path d="M9.448 11.365c1.089 0 2.106.544 2.71 1.45l.832-.554a4.26 4.26 0 0 0-3.542-1.896h-.22a.5.5 0 1 0 0 1z"></svg:path><svg:path d="M9.25 10.25a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m0 1a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5m4.259 4.936a5.5 5.5 0 0 0-.924 3.051v1.034a.5.5 0 1 1-1 0v-1.034a6.5 6.5 0 0 1 1.091-3.605l.133-.2a.5.5 0 0 1 .832.556z"></svg:path><svg:path d="M16.42 14.5a3.34 3.34 0 0 0-2.78 1.488l-.831-.555A4.34 4.34 0 0 1 16.42 13.5h.224a.5.5 0 1 1 0 1zm3.187 1.686a5.5 5.5 0 0 1 .924 3.051v1.034a.5.5 0 1 0 1 0v-1.034a6.5 6.5 0 0 0-1.092-3.605l-.133-.2a.5.5 0 1 0-.832.556z"></svg:path><svg:path d="M16.695 14.5a3.34 3.34 0 0 1 2.78 1.488l.832-.555a4.34 4.34 0 0 0-3.612-1.933h-.225a.5.5 0 1 0 0 1z"></svg:path><svg:path d="M16.5 13.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m0 1a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilPersonsCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPersonsCircleFilledIcon],svg[pepicons-pencil-persons-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPersonsCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.36 12.977a5.5 5.5 0 0 0-.923 3.05V17a.5.5 0 1 1-1 0v-.972a6.5 6.5 0 0 1 1.092-3.606l.108-.162a.5.5 0 1 1 .832.555z"></svg:path><svg:path d="M9.18 11.365c-1.09 0-2.107.544-2.711 1.45l-.832-.554a4.26 4.26 0 0 1 3.542-1.896h.22a.5.5 0 0 1 0 1zm3.078 1.6c.47.706.721 1.534.721 2.382h1a5.3 5.3 0 0 0-.889-2.936l-.1-.15a.5.5 0 1 0-.832.554z"></svg:path><svg:path d="M9.448 11.365c1.089 0 2.106.544 2.71 1.45l.832-.554a4.26 4.26 0 0 0-3.542-1.896h-.22a.5.5 0 1 0 0 1z"></svg:path><svg:path d="M9.25 10.25a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m0 1a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5m4.259 4.936a5.5 5.5 0 0 0-.924 3.051v1.034a.5.5 0 1 1-1 0v-1.034a6.5 6.5 0 0 1 1.091-3.605l.133-.2a.5.5 0 0 1 .832.556z"></svg:path><svg:path d="M16.42 14.5a3.34 3.34 0 0 0-2.78 1.488l-.831-.555A4.34 4.34 0 0 1 16.42 13.5h.224a.5.5 0 1 1 0 1zm3.187 1.686a5.5 5.5 0 0 1 .924 3.051v1.034a.5.5 0 1 0 1 0v-1.034a6.5 6.5 0 0 0-1.092-3.605l-.133-.2a.5.5 0 1 0-.832.556z"></svg:path><svg:path d="M16.695 14.5a3.34 3.34 0 0 1 2.78 1.488l.832-.555a4.34 4.34 0 0 0-3.612-1.933h-.225a.5.5 0 1 0 0 1z"></svg:path><svg:path d="M16.5 13.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m0 1a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPersonsCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPersonsCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPersonsCircleOffIcon],svg[pepicons-pencil-persons-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.36 12.977a5.5 5.5 0 0 0-.923 3.05V17a.5.5 0 1 1-1 0v-.972a6.5 6.5 0 0 1 1.092-3.606l.108-.162a.5.5 0 1 1 .832.555z"></svg:path><svg:path d="M9.18 11.365c-1.09 0-2.107.544-2.711 1.45l-.832-.554a4.26 4.26 0 0 1 3.542-1.896h.22a.5.5 0 0 1 0 1zm3.078 1.6c.47.706.721 1.534.721 2.382h1a5.3 5.3 0 0 0-.889-2.936l-.1-.15a.5.5 0 1 0-.832.554z"></svg:path><svg:path d="M9.448 11.365c1.089 0 2.106.544 2.71 1.45l.832-.554a4.26 4.26 0 0 0-3.542-1.896h-.22a.5.5 0 1 0 0 1z"></svg:path><svg:path d="M9.25 10.25a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m0 1a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5m4.259 4.936a5.5 5.5 0 0 0-.924 3.051v1.034a.5.5 0 1 1-1 0v-1.034a6.5 6.5 0 0 1 1.091-3.605l.133-.2a.5.5 0 0 1 .832.556z"></svg:path><svg:path d="M16.42 14.5a3.34 3.34 0 0 0-2.78 1.488l-.831-.555A4.34 4.34 0 0 1 16.42 13.5h.224a.5.5 0 1 1 0 1zm3.187 1.686a5.5 5.5 0 0 1 .924 3.051v1.034a.5.5 0 1 0 1 0v-1.034a6.5 6.5 0 0 0-1.092-3.605l-.133-.2a.5.5 0 1 0-.832.556z"></svg:path><svg:path d="M16.695 14.5a3.34 3.34 0 0 1 2.78 1.488l.832-.555a4.34 4.34 0 0 0-3.612-1.933h-.225a.5.5 0 1 0 0 1z"></svg:path><svg:path d="M16.5 13.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m0 1a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5"></svg:path></svg:g><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPersonsCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPersonsOffIcon],svg[pepicons-pencil-persons-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3.36 9.977a5.5 5.5 0 0 0-.923 3.05V14a.5.5 0 1 1-1 0v-.972A6.5 6.5 0 0 1 2.53 9.422l.108-.162a.5.5 0 1 1 .832.555z"></svg:path><svg:path d="M6.18 8.365c-1.09 0-2.107.544-2.711 1.45l-.832-.554a4.26 4.26 0 0 1 3.542-1.896h.22a.5.5 0 0 1 0 1zm3.078 1.6c.47.706.721 1.534.721 2.382h1a5.3 5.3 0 0 0-.889-2.936l-.1-.15a.5.5 0 1 0-.832.554z"></svg:path><svg:path d="M6.448 8.365c1.089 0 2.106.544 2.71 1.45l.832-.554a4.26 4.26 0 0 0-3.542-1.896h-.22a.5.5 0 1 0 0 1z"></svg:path><svg:path d="M6.25 7.25a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m0 1a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5m4.259 4.936a5.5 5.5 0 0 0-.924 3.051v1.034a.5.5 0 1 1-1 0v-1.034a6.5 6.5 0 0 1 1.091-3.605l.133-.2a.5.5 0 0 1 .832.556z"></svg:path><svg:path d="M13.42 11.5a3.34 3.34 0 0 0-2.78 1.488l-.831-.555A4.34 4.34 0 0 1 13.42 10.5h.224a.5.5 0 1 1 0 1zm3.187 1.686a5.5 5.5 0 0 1 .924 3.051v1.034a.5.5 0 1 0 1 0v-1.034a6.5 6.5 0 0 0-1.092-3.605l-.133-.2a.5.5 0 1 0-.832.556z"></svg:path><svg:path d="M13.695 11.5a3.34 3.34 0 0 1 2.78 1.488l.832-.555a4.34 4.34 0 0 0-3.612-1.933h-.225a.5.5 0 1 0 0 1z"></svg:path><svg:path d="M13.5 10.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m0 1a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5"></svg:path></svg:g><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPersonsOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPesoIcon],svg[pepicons-pencil-peso-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.5 2.5h-5v-1h5A4.5 4.5 0 0 1 15 6v1a4.5 4.5 0 0 1-4.5 4.5h-5v-1h5A3.5 3.5 0 0 0 14 7V6a3.5 3.5 0 0 0-3.5-3.5"></svg:path><svg:path d="M5.5 1.5A.5.5 0 0 1 6 2v15.5a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5"></svg:path><svg:path d="M2 4.936a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1h-14a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1h-14a.5.5 0 0 1-.5-.5"></svg:path></svg:g>`,
})
export class PepiconsPencilPesoIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPesoCircleIcon],svg[pepicons-pencil-peso-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.5 5.5h-5v-1h5A4.5 4.5 0 0 1 18 9v1a4.5 4.5 0 0 1-4.5 4.5h-5v-1h5A3.5 3.5 0 0 0 17 10V9a3.5 3.5 0 0 0-3.5-3.5"></svg:path><svg:path d="M8.5 4.5A.5.5 0 0 1 9 5v15.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"></svg:path><svg:path d="M5 7.936a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1h-14a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1h-14a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilPesoCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPesoCircleFilledIcon],svg[pepicons-pencil-peso-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPesoCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.5 5.5h-5v-1h5A4.5 4.5 0 0 1 18 9v1a4.5 4.5 0 0 1-4.5 4.5h-5v-1h5A3.5 3.5 0 0 0 17 10V9a3.5 3.5 0 0 0-3.5-3.5"></svg:path><svg:path d="M8.5 4.5A.5.5 0 0 1 9 5v15.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"></svg:path><svg:path d="M5 7.936a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1h-14a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1h-14a.5.5 0 0 1-.5-.5"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPesoCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPesoCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPesoCircleOffIcon],svg[pepicons-pencil-peso-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13.5 5.5h-5v-1h5A4.5 4.5 0 0 1 18 9v1a4.5 4.5 0 0 1-4.5 4.5h-5v-1h5A3.5 3.5 0 0 0 17 10V9a3.5 3.5 0 0 0-3.5-3.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.5 4.5A.5.5 0 0 1 9 5v15.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5 7.936a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1h-14a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1h-14a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPesoCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPesoOffIcon],svg[pepicons-pencil-peso-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10.5 2.5h-5v-1h5A4.5 4.5 0 0 1 15 6v1a4.5 4.5 0 0 1-4.5 4.5h-5v-1h5A3.5 3.5 0 0 0 14 7V6a3.5 3.5 0 0 0-3.5-3.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.5 1.5A.5.5 0 0 1 6 2v15.5a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M2 4.936a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1h-14a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1h-14a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPesoOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPhoneIcon],svg[pepicons-pencil-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12.874 9.546l-.91.911A32 32 0 0 1 8.428 6.92l.91-.91a2.5 2.5 0 0 0 0-3.535L7.925 1.06a2.5 2.5 0 0 0-3.536 0L1.583 3.866a.5.5 0 0 0-.114.529c2.324 6.226 6.661 10.593 13.018 13.02a.5.5 0 0 0 .531-.114l2.806-2.805a2.5 2.5 0 0 0 0-3.536L16.41 9.546a2.5 2.5 0 0 0-3.536 0m4.243 2.121a1.5 1.5 0 0 1 0 2.122l-2.575 2.575c-5.821-2.306-9.811-6.32-12.023-12.02l2.577-2.576a1.5 1.5 0 0 1 2.122 0l1.414 1.414a1.5 1.5 0 0 1 0 2.121L7.398 6.537a.5.5 0 0 0-.032.673a32.7 32.7 0 0 0 4.307 4.31a.5.5 0 0 0 .673-.031l1.236-1.236a1.5 1.5 0 0 1 2.12 0z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPencilPhoneIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPhoneCircleIcon],svg[pepicons-pencil-phone-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="m15.874 12.546l-.91.911a32 32 0 0 1-3.535-3.537l.91-.91a2.5 2.5 0 0 0 0-3.535L10.925 4.06a2.5 2.5 0 0 0-3.536 0L4.583 6.866a.5.5 0 0 0-.114.529c2.324 6.226 6.661 10.593 13.018 13.02a.5.5 0 0 0 .531-.114l2.806-2.805a2.5 2.5 0 0 0 0-3.536l-1.414-1.414a2.5 2.5 0 0 0-3.536 0m4.243 2.121a1.5 1.5 0 0 1 0 2.122l-2.575 2.575c-5.821-2.306-9.811-6.32-12.023-12.02l2.577-2.576a1.5 1.5 0 0 1 2.122 0l1.414 1.414a1.5 1.5 0 0 1 0 2.121l-1.234 1.234a.5.5 0 0 0-.032.673a32.7 32.7 0 0 0 4.307 4.31a.5.5 0 0 0 .673-.031l1.235-1.236a1.5 1.5 0 0 1 2.122 0z"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilPhoneCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPhoneCircleFilledIcon],svg[pepicons-pencil-phone-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPhoneCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="m15.874 12.546l-.91.911a32 32 0 0 1-3.535-3.537l.91-.91a2.5 2.5 0 0 0 0-3.535L10.925 4.06a2.5 2.5 0 0 0-3.536 0L4.583 6.866a.5.5 0 0 0-.114.529c2.324 6.226 6.661 10.593 13.018 13.02a.5.5 0 0 0 .531-.114l2.806-2.805a2.5 2.5 0 0 0 0-3.536l-1.414-1.414a2.5 2.5 0 0 0-3.536 0m4.243 2.121a1.5 1.5 0 0 1 0 2.122l-2.575 2.575c-5.821-2.306-9.811-6.32-12.023-12.02l2.577-2.576a1.5 1.5 0 0 1 2.122 0l1.414 1.414a1.5 1.5 0 0 1 0 2.121l-1.234 1.234a.5.5 0 0 0-.032.673a32.7 32.7 0 0 0 4.307 4.31a.5.5 0 0 0 .673-.031l1.235-1.236a1.5 1.5 0 0 1 2.122 0z" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPhoneCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPhoneCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPhoneCircleOffIcon],svg[pepicons-pencil-phone-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m15.874 12.546l-.91.911a32 32 0 0 1-3.535-3.537l.91-.91a2.5 2.5 0 0 0 0-3.535L10.925 4.06a2.5 2.5 0 0 0-3.536 0L4.583 6.866a.5.5 0 0 0-.114.529c2.324 6.226 6.661 10.593 13.018 13.02a.5.5 0 0 0 .531-.114l2.806-2.805a2.5 2.5 0 0 0 0-3.536l-1.414-1.414a2.5 2.5 0 0 0-3.536 0m4.243 2.121a1.5 1.5 0 0 1 0 2.122l-2.575 2.575c-5.821-2.306-9.811-6.32-12.023-12.02l2.577-2.576a1.5 1.5 0 0 1 2.122 0l1.414 1.414a1.5 1.5 0 0 1 0 2.121l-1.234 1.234a.5.5 0 0 0-.032.673a32.7 32.7 0 0 0 4.307 4.31a.5.5 0 0 0 .673-.031l1.235-1.236a1.5 1.5 0 0 1 2.122 0z" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPhoneCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPhoneOffIcon],svg[pepicons-pencil-phone-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m12.874 9.546l-.91.911A32 32 0 0 1 8.428 6.92l.91-.91a2.5 2.5 0 0 0 0-3.535L7.925 1.06a2.5 2.5 0 0 0-3.536 0L1.583 3.866a.5.5 0 0 0-.114.529c2.324 6.226 6.661 10.593 13.018 13.02a.5.5 0 0 0 .531-.114l2.806-2.805a2.5 2.5 0 0 0 0-3.536L16.41 9.546a2.5 2.5 0 0 0-3.536 0m4.243 2.121a1.5 1.5 0 0 1 0 2.122l-2.575 2.575c-5.821-2.306-9.811-6.32-12.023-12.02l2.577-2.576a1.5 1.5 0 0 1 2.122 0l1.414 1.414a1.5 1.5 0 0 1 0 2.121L7.398 6.537a.5.5 0 0 0-.032.673a32.7 32.7 0 0 0 4.307 4.31a.5.5 0 0 0 .673-.031l1.236-1.236a1.5 1.5 0 0 1 2.12 0z" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPhoneOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPhotoIcon],svg[pepicons-pencil-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 1a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path><svg:path d="M7.5 10.678L5.59 13.25H7.5l1.91 1H5.59a1 1 0 0 1-.802-1.596l1.909-2.572a1 1 0 0 1 1.606 0l.955 1.286l-.803.596z"></svg:path><svg:path fill-rule="evenodd" d="M14.257 13.25L11.25 9.778L8.243 13.25zm-2.251-4.127a1 1 0 0 0-1.512 0l-3.007 3.472a1 1 0 0 0 .756 1.655h6.014a1 1 0 0 0 .756-1.655z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17 2.5H3a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5m-14-1A1.5 1.5 0 0 0 1.5 3v14A1.5 1.5 0 0 0 3 18.5h14a1.5 1.5 0 0 0 1.5-1.5V3A1.5 1.5 0 0 0 17 1.5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPhotoIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPhotoCameraIcon],svg[pepicons-pencil-photo-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.172 5.232L5.762 6.5H4.5A2.5 2.5 0 0 0 2 9v6a2.5 2.5 0 0 0 2.5 2.5h11A2.5 2.5 0 0 0 18 15V9a2.5 2.5 0 0 0-2.5-2.5h-1.263l-.409-1.268a2.5 2.5 0 0 0-2.38-1.732H8.552a2.5 2.5 0 0 0-2.38 1.732M4.5 7.5h1.99l.633-1.96A1.5 1.5 0 0 1 8.551 4.5h2.898a1.5 1.5 0 0 1 1.427 1.04l.633 1.96H15.5A1.5 1.5 0 0 1 17 9v6a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 15V9a1.5 1.5 0 0 1 1.5-1.5"></svg:path><svg:path d="M7 11.5a3 3 0 1 0 6 0a3 3 0 0 0-6 0m5 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class PepiconsPencilPhotoCameraIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPhotoCameraCircleIcon],svg[pepicons-pencil-photo-camera-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.172 8.232L8.762 9.5H7.5A2.5 2.5 0 0 0 5 12v6a2.5 2.5 0 0 0 2.5 2.5h11A2.5 2.5 0 0 0 21 18v-6a2.5 2.5 0 0 0-2.5-2.5h-1.263l-.409-1.268a2.5 2.5 0 0 0-2.38-1.732h-2.897a2.5 2.5 0 0 0-2.38 1.732M7.5 10.5h1.99l.633-1.96a1.5 1.5 0 0 1 1.428-1.04h2.898a1.5 1.5 0 0 1 1.427 1.04l.633 1.96H18.5A1.5 1.5 0 0 1 20 12v6a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 6 18v-6a1.5 1.5 0 0 1 1.5-1.5"></svg:path><svg:path d="M10 14.5a3 3 0 1 0 6 0a3 3 0 0 0-6 0m5 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilPhotoCameraCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPhotoCameraCircleFilledIcon],svg[pepicons-pencil-photo-camera-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPhotoCameraCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.172 8.232L8.762 9.5H7.5A2.5 2.5 0 0 0 5 12v6a2.5 2.5 0 0 0 2.5 2.5h11A2.5 2.5 0 0 0 21 18v-6a2.5 2.5 0 0 0-2.5-2.5h-1.263l-.409-1.268a2.5 2.5 0 0 0-2.38-1.732h-2.897a2.5 2.5 0 0 0-2.38 1.732M7.5 10.5h1.99l.633-1.96a1.5 1.5 0 0 1 1.428-1.04h2.898a1.5 1.5 0 0 1 1.427 1.04l.633 1.96H18.5A1.5 1.5 0 0 1 20 12v6a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 6 18v-6a1.5 1.5 0 0 1 1.5-1.5"></svg:path><svg:path d="M10 14.5a3 3 0 1 0 6 0a3 3 0 0 0-6 0m5 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPhotoCameraCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPhotoCameraCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPhotoCameraCircleOffIcon],svg[pepicons-pencil-photo-camera-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M9.172 8.232L8.762 9.5H7.5A2.5 2.5 0 0 0 5 12v6a2.5 2.5 0 0 0 2.5 2.5h11A2.5 2.5 0 0 0 21 18v-6a2.5 2.5 0 0 0-2.5-2.5h-1.263l-.409-1.268a2.5 2.5 0 0 0-2.38-1.732h-2.897a2.5 2.5 0 0 0-2.38 1.732M7.5 10.5h1.99l.633-1.96a1.5 1.5 0 0 1 1.428-1.04h2.898a1.5 1.5 0 0 1 1.427 1.04l.633 1.96H18.5A1.5 1.5 0 0 1 20 12v6a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 6 18v-6a1.5 1.5 0 0 1 1.5-1.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10 14.5a3 3 0 1 0 6 0a3 3 0 0 0-6 0m5 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPhotoCameraCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPhotoCameraOffIcon],svg[pepicons-pencil-photo-camera-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.172 5.232L5.762 6.5H4.5A2.5 2.5 0 0 0 2 9v6a2.5 2.5 0 0 0 2.5 2.5h11A2.5 2.5 0 0 0 18 15V9a2.5 2.5 0 0 0-2.5-2.5h-1.263l-.409-1.268a2.5 2.5 0 0 0-2.38-1.732H8.552a2.5 2.5 0 0 0-2.38 1.732M4.5 7.5h1.99l.633-1.96A1.5 1.5 0 0 1 8.551 4.5h2.898a1.5 1.5 0 0 1 1.427 1.04l.633 1.96H15.5A1.5 1.5 0 0 1 17 9v6a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 15V9a1.5 1.5 0 0 1 1.5-1.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7 11.5a3 3 0 1 0 6 0a3 3 0 0 0-6 0m5 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPhotoCameraOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPhotoCircleIcon],svg[pepicons-pencil-photo-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 1a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path><svg:path d="M10.5 13.678L8.59 16.25h1.91l1.91 1H8.59a1 1 0 0 1-.802-1.596l1.909-2.572a1 1 0 0 1 1.606 0l.955 1.286l-.803.596z"></svg:path><svg:path fill-rule="evenodd" d="m17.257 16.25l-3.007-3.472l-3.007 3.472zm-2.251-4.127a1 1 0 0 0-1.512 0l-3.007 3.472a1 1 0 0 0 .756 1.655h6.014a1 1 0 0 0 .756-1.655z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M20 5.5H6a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5m-14-1A1.5 1.5 0 0 0 4.5 6v14A1.5 1.5 0 0 0 6 21.5h14a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 20 4.5z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPhotoCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPhotoCircleFilledIcon],svg[pepicons-pencil-photo-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPhotoCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M11 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 1a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path><svg:path d="M10.5 13.678L8.59 16.25h1.91l1.91 1H8.59a1 1 0 0 1-.802-1.596l1.909-2.572a1 1 0 0 1 1.606 0l.955 1.286l-.803.596z"></svg:path><svg:path fill-rule="evenodd" d="m17.257 16.25l-3.007-3.472l-3.007 3.472zm-2.251-4.127a1 1 0 0 0-1.512 0l-3.007 3.472a1 1 0 0 0 .756 1.655h6.014a1 1 0 0 0 .756-1.655z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M20 5.5H6a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5m-14-1A1.5 1.5 0 0 0 4.5 6v14A1.5 1.5 0 0 0 6 21.5h14a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 20 4.5z" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPhotoCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPhotoCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPhotoCircleOffIcon],svg[pepicons-pencil-photo-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 1a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path><svg:path d="M10.5 13.678L8.59 16.25h1.91l1.91 1H8.59a1 1 0 0 1-.802-1.596l1.909-2.572a1 1 0 0 1 1.606 0l.955 1.286l-.803.596z"></svg:path><svg:path fill-rule="evenodd" d="m17.257 16.25l-3.007-3.472l-3.007 3.472zm-2.251-4.127a1 1 0 0 0-1.512 0l-3.007 3.472a1 1 0 0 0 .756 1.655h6.014a1 1 0 0 0 .756-1.655z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M20 5.5H6a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5m-14-1A1.5 1.5 0 0 0 4.5 6v14A1.5 1.5 0 0 0 6 21.5h14a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 20 4.5z" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPhotoCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPhotoOffIcon],svg[pepicons-pencil-photo-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 1a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path><svg:path d="M7.5 10.678L5.59 13.25H7.5l1.91 1H5.59a1 1 0 0 1-.802-1.596l1.909-2.572a1 1 0 0 1 1.606 0l.955 1.286l-.803.596z"></svg:path><svg:path fill-rule="evenodd" d="M14.257 13.25L11.25 9.778L8.243 13.25zm-2.251-4.127a1 1 0 0 0-1.512 0l-3.007 3.472a1 1 0 0 0 .756 1.655h6.014a1 1 0 0 0 .756-1.655z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17 2.5H3a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5m-14-1A1.5 1.5 0 0 0 1.5 3v14A1.5 1.5 0 0 0 3 18.5h14a1.5 1.5 0 0 0 1.5-1.5V3A1.5 1.5 0 0 0 17 1.5z" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPhotoOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPhotoStudioIcon],svg[pepicons-pencil-photo-studio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M1.4 2.5a1 1 0 0 1 1-1h6.2a1 1 0 0 1 1 1v3.8a1 1 0 0 1-1 1H2.4a1 1 0 0 1-1-1zm7.2 0H2.4v3.8h6.2z"></svg:path><svg:path d="M.65 2a.5.5 0 0 1 .5-.5h8.7a.5.5 0 0 1 0 1h-8.7a.5.5 0 0 1-.5-.5m1.74 4.598L1.61 10.5h7.78l-.78-3.902l.98-.196l.78 3.902a1 1 0 0 1-.98 1.196H1.61a1 1 0 0 1-.98-1.196l.78-3.902zM19.25 17.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .5-.5M13.75 7h.604c.137 0 .235.026.302.06c.359.182.924.508 1.385.944c.473.446.709.881.709 1.29s-.236.845-.71 1.29c-.46.436-1.025.763-1.384.944a.7.7 0 0 1-.302.06h-.604a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1m1.358 5.42a1.66 1.66 0 0 1-.754.168h-.604a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h.604c.262 0 .52.05.754.168c.795.402 2.642 1.51 2.642 3.126s-1.847 2.724-2.642 3.126"></svg:path><svg:path d="M17.25 8.7a.5.5 0 0 0-.5.5v7.565a.5.5 0 1 0 1 0V9.2a.5.5 0 0 0-.5-.5"></svg:path></svg:g>`,
})
export class PepiconsPencilPhotoStudioIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPhotoStudioCircleIcon],svg[pepicons-pencil-photo-studio-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4.4 5.5a1 1 0 0 1 1-1h6.2a1 1 0 0 1 1 1v3.8a1 1 0 0 1-1 1H5.4a1 1 0 0 1-1-1zm7.2 0H5.4v3.8h6.2z"></svg:path><svg:path d="M3.65 5a.5.5 0 0 1 .5-.5h8.7a.5.5 0 0 1 0 1h-8.7a.5.5 0 0 1-.5-.5m1.74 4.598L4.61 13.5h7.78l-.78-3.902l.98-.196l.78 3.902a1 1 0 0 1-.98 1.196H4.61a1 1 0 0 1-.98-1.196l.78-3.902zM22.25 20.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .5-.5M16.75 10h.604c.137 0 .235.026.302.06c.359.182.924.508 1.385.944c.473.446.709.881.709 1.29s-.236.845-.71 1.29c-.46.436-1.025.763-1.384.944a.7.7 0 0 1-.302.06h-.604a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1m1.358 5.42a1.66 1.66 0 0 1-.754.168h-.604a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h.604c.262 0 .52.05.754.168c.795.402 2.642 1.51 2.642 3.126s-1.847 2.724-2.642 3.126"></svg:path><svg:path d="M20.25 11.7a.5.5 0 0 0-.5.5v7.565a.5.5 0 1 0 1 0V12.2a.5.5 0 0 0-.5-.5"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilPhotoStudioCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPhotoStudioCircleFilledIcon],svg[pepicons-pencil-photo-studio-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPhotoStudioCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4.4 5.5a1 1 0 0 1 1-1h6.2a1 1 0 0 1 1 1v3.8a1 1 0 0 1-1 1H5.4a1 1 0 0 1-1-1zm7.2 0H5.4v3.8h6.2z"></svg:path><svg:path d="M3.65 5a.5.5 0 0 1 .5-.5h8.7a.5.5 0 0 1 0 1h-8.7a.5.5 0 0 1-.5-.5m1.74 4.598L4.61 13.5h7.78l-.78-3.902l.98-.196l.78 3.902a1 1 0 0 1-.98 1.196H4.61a1 1 0 0 1-.98-1.196l.78-3.902zM22.25 20.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .5-.5M16.75 10h.604c.137 0 .235.026.302.06c.359.182.924.508 1.385.944c.473.446.709.881.709 1.29s-.236.845-.71 1.29c-.46.436-1.025.763-1.384.944a.7.7 0 0 1-.302.06h-.604a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1m1.358 5.42a1.66 1.66 0 0 1-.754.168h-.604a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h.604c.262 0 .52.05.754.168c.795.402 2.642 1.51 2.642 3.126s-1.847 2.724-2.642 3.126"></svg:path><svg:path d="M20.25 11.7a.5.5 0 0 0-.5.5v7.565a.5.5 0 1 0 1 0V12.2a.5.5 0 0 0-.5-.5"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPhotoStudioCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPhotoStudioCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPhotoStudioCircleOffIcon],svg[pepicons-pencil-photo-studio-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4.4 5.5a1 1 0 0 1 1-1h6.2a1 1 0 0 1 1 1v3.8a1 1 0 0 1-1 1H5.4a1 1 0 0 1-1-1zm7.2 0H5.4v3.8h6.2z"></svg:path><svg:path d="M3.65 5a.5.5 0 0 1 .5-.5h8.7a.5.5 0 0 1 0 1h-8.7a.5.5 0 0 1-.5-.5m1.74 4.598L4.61 13.5h7.78l-.78-3.902l.98-.196l.78 3.902a1 1 0 0 1-.98 1.196H4.61a1 1 0 0 1-.98-1.196l.78-3.902zM22.25 20.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .5-.5M16.75 10h.604c.137 0 .235.026.302.06c.359.182.924.508 1.385.944c.473.446.709.881.709 1.29s-.236.845-.71 1.29c-.46.436-1.025.763-1.384.944a.7.7 0 0 1-.302.06h-.604a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1m1.358 5.42a1.66 1.66 0 0 1-.754.168h-.604a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h.604c.262 0 .52.05.754.168c.795.402 2.642 1.51 2.642 3.126s-1.847 2.724-2.642 3.126"></svg:path><svg:path d="M20.25 11.7a.5.5 0 0 0-.5.5v7.565a.5.5 0 1 0 1 0V12.2a.5.5 0 0 0-.5-.5"></svg:path></svg:g><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPhotoStudioCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPhotoStudioOffIcon],svg[pepicons-pencil-photo-studio-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M1.4 2.5a1 1 0 0 1 1-1h6.2a1 1 0 0 1 1 1v3.8a1 1 0 0 1-1 1H2.4a1 1 0 0 1-1-1zm7.2 0H2.4v3.8h6.2z"></svg:path><svg:path d="M.65 2a.5.5 0 0 1 .5-.5h8.7a.5.5 0 0 1 0 1h-8.7a.5.5 0 0 1-.5-.5m1.74 4.598L1.61 10.5h7.78l-.78-3.902l.98-.196l.78 3.902a1 1 0 0 1-.98 1.196H1.61a1 1 0 0 1-.98-1.196l.78-3.902zM19.25 17.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .5-.5M13.75 7h.604c.137 0 .235.026.302.06c.359.182.924.508 1.385.944c.473.446.709.881.709 1.29s-.236.845-.71 1.29c-.46.436-1.025.763-1.384.944a.7.7 0 0 1-.302.06h-.604a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1m1.358 5.42a1.66 1.66 0 0 1-.754.168h-.604a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h.604c.262 0 .52.05.754.168c.795.402 2.642 1.51 2.642 3.126s-1.847 2.724-2.642 3.126"></svg:path><svg:path d="M17.25 8.7a.5.5 0 0 0-.5.5v7.565a.5.5 0 1 0 1 0V9.2a.5.5 0 0 0-.5-.5"></svg:path></svg:g><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPhotoStudioOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPillIcon],svg[pepicons-pencil-pill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M15.85 10.192L9.484 3.828a4 4 0 0 0-5.657 5.657l6.364 6.364a4 4 0 1 0 5.657-5.657M4.535 4.536a3 3 0 0 1 4.242 0l6.364 6.364a3 3 0 1 1-4.242 4.242L4.536 8.778a3 3 0 0 1 0-4.242" clip-rule="evenodd"></svg:path><svg:path d="m13.037 7.58l-.243.97c-1.201-.3-2.223-.154-3.101.432c-.87.58-1.454 1.687-1.73 3.355l-.987-.164c.318-1.917 1.032-3.27 2.162-4.023c1.122-.748 2.434-.936 3.899-.57"></svg:path></svg:g>`,
})
export class PepiconsPencilPillIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPillCircleIcon],svg[pepicons-pencil-pill-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m18.85 13.192l-6.365-6.364a4 4 0 0 0-5.657 5.657l6.364 6.364a4 4 0 1 0 5.657-5.657M7.535 7.536a3 3 0 0 1 4.242 0l6.364 6.364a3 3 0 1 1-4.242 4.242l-6.364-6.364a3 3 0 0 1 0-4.242" clip-rule="evenodd"></svg:path><svg:path d="m16.037 10.58l-.243.97c-1.201-.3-2.223-.154-3.101.432c-.87.58-1.454 1.687-1.73 3.355l-.987-.164c.318-1.917 1.032-3.27 2.162-4.023c1.122-.748 2.434-.936 3.899-.57"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPillCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPillCircleFilledIcon],svg[pepicons-pencil-pill-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPillCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="m18.85 13.192l-6.365-6.364a4 4 0 0 0-5.657 5.657l6.364 6.364a4 4 0 1 0 5.657-5.657M7.535 7.536a3 3 0 0 1 4.242 0l6.364 6.364a3 3 0 1 1-4.242 4.242l-6.364-6.364a3 3 0 0 1 0-4.242" clip-rule="evenodd"></svg:path><svg:path d="m16.037 10.58l-.243.97c-1.201-.3-2.223-.154-3.101.432c-.87.58-1.454 1.687-1.73 3.355l-.987-.164c.318-1.917 1.032-3.27 2.162-4.023c1.122-.748 2.434-.936 3.899-.57"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPillCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPillCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPillCircleOffIcon],svg[pepicons-pencil-pill-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m18.85 13.192l-6.365-6.364a4 4 0 0 0-5.657 5.657l6.364 6.364a4 4 0 1 0 5.657-5.657M7.535 7.536a3 3 0 0 1 4.242 0l6.364 6.364a3 3 0 1 1-4.242 4.242l-6.364-6.364a3 3 0 0 1 0-4.242" clip-rule="evenodd"></svg:path><svg:path d="m16.037 10.58l-.243.97c-1.201-.3-2.223-.154-3.101.432c-.87.58-1.454 1.687-1.73 3.355l-.987-.164c.318-1.917 1.032-3.27 2.162-4.023c1.122-.748 2.434-.936 3.899-.57"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPillCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPillOffIcon],svg[pepicons-pencil-pill-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M15.85 10.192L9.484 3.828a4 4 0 0 0-5.657 5.657l6.364 6.364a4 4 0 1 0 5.657-5.657M4.535 4.536a3 3 0 0 1 4.242 0l6.364 6.364a3 3 0 1 1-4.242 4.242L4.536 8.778a3 3 0 0 1 0-4.242" clip-rule="evenodd"></svg:path><svg:path d="m13.037 7.58l-.243.97c-1.201-.3-2.223-.154-3.101.432c-.87.58-1.454 1.687-1.73 3.355l-.987-.164c.318-1.917 1.032-3.27 2.162-4.023c1.122-.748 2.434-.936 3.899-.57"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPillOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPinIcon],svg[pepicons-pencil-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.77 2.932a1.5 1.5 0 0 0-2.082.41L6.18 7.076l-.83-.557l2.508-3.736a2.5 2.5 0 0 1 3.47-.682l3.32 2.23a2.5 2.5 0 0 1 .682 3.47l-2.508 3.735l-.83-.557L14.5 7.244a1.5 1.5 0 0 0-.41-2.082zM1.738 8.31a.5.5 0 0 1 .694-.136l9.963 6.69a.5.5 0 0 1-.558.83l-9.962-6.69a.5.5 0 0 1-.137-.693"></svg:path><svg:path d="M5.066 7.359c-.42.054-.868.149-1.157.295c-.281.142-.616.436-.902.73a8 8 0 0 0-.432.48l-.024.029l-.006.007l-.392-.312m0 0l-.39-.311v-.002l.003-.003l.008-.01l.03-.037l.109-.128c.092-.107.223-.253.378-.412c.299-.307.73-.703 1.167-.924c.45-.228 1.042-.338 1.479-.395a9 9 0 0 1 .747-.066l.048-.002h.018c.001 0 .002 0 .015.5l-.014-.5a.5.5 0 0 1 .027 1h-.011l-.04.001l-.15.009c-.13.008-.31.024-.511.05m7.091 4.762c.108.409.19.86.164 1.182c-.025.314-.17.735-.334 1.112a8 8 0 0 1-.28.58l-.019.034l-.004.008v.002l.436.243m0 0l.436.244l.001-.001l.002-.004l.006-.011l.023-.042l.078-.149c.064-.126.15-.302.238-.506c.17-.393.375-.941.414-1.43c.04-.502-.082-1.092-.195-1.518a9 9 0 0 0-.222-.716l-.016-.046l-.005-.013l-.001-.003v-.001s-.001-.001-.469.176l.468-.176a.5.5 0 0 0-.935.353v.002l.004.008l.013.037l.05.143c.04.123.095.296.146.492m-4.743-.601a.5.5 0 0 1 .137.694l-2.23 3.32a.5.5 0 0 1-.83-.557l2.23-3.32a.5.5 0 0 1 .693-.137"></svg:path></svg:g>`,
})
export class PepiconsPencilPinIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPinCircleIcon],svg[pepicons-pencil-pin-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.77 5.932a1.5 1.5 0 0 0-2.082.41L9.18 10.076l-.83-.557l2.508-3.736a2.5 2.5 0 0 1 3.47-.682l3.32 2.23a2.5 2.5 0 0 1 .682 3.47l-2.508 3.735l-.83-.557l2.508-3.736a1.5 1.5 0 0 0-.41-2.082zM4.738 11.31a.5.5 0 0 1 .694-.136l9.963 6.69a.5.5 0 0 1-.558.83l-9.962-6.69a.5.5 0 0 1-.137-.693"></svg:path><svg:path d="M8.066 10.359c-.42.054-.868.149-1.157.295c-.281.142-.616.436-.902.73a8 8 0 0 0-.432.48l-.024.029l-.006.007v.001l-.392-.312m0 0l-.39-.311v-.002l.003-.003l.008-.01l.03-.037l.109-.128c.092-.107.223-.253.378-.412c.299-.307.73-.703 1.167-.924c.45-.228 1.042-.338 1.479-.395a9 9 0 0 1 .747-.066l.048-.002h.018c.001 0 .002 0 .015.5l-.014-.5a.5.5 0 0 1 .027 1h-.011l-.04.001l-.15.009c-.13.008-.31.024-.511.05m7.091 4.761c.108.409.19.86.164 1.182c-.025.314-.17.735-.334 1.112a8 8 0 0 1-.28.58l-.019.034l-.004.008v.002l.436.244m0 0l.436.243l.001-.001l.002-.004l.006-.011l.023-.042l.078-.149c.064-.126.15-.302.238-.506c.17-.393.375-.941.414-1.43c.04-.502-.082-1.092-.195-1.518a9 9 0 0 0-.222-.716l-.016-.046l-.005-.013l-.001-.003v-.001s-.001-.001-.469.176l.468-.176a.5.5 0 0 0-.935.353v.002l.004.008l.013.037l.05.143c.04.123.095.296.146.492m-4.743-.601a.5.5 0 0 1 .137.694l-2.23 3.32a.5.5 0 0 1-.83-.557l2.23-3.32a.5.5 0 0 1 .693-.137"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilPinCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPinCircleFilledIcon],svg[pepicons-pencil-pin-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPinCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.77 5.932a1.5 1.5 0 0 0-2.082.41L9.18 10.076l-.83-.557l2.508-3.736a2.5 2.5 0 0 1 3.47-.682l3.32 2.23a2.5 2.5 0 0 1 .682 3.47l-2.508 3.735l-.83-.557l2.508-3.736a1.5 1.5 0 0 0-.41-2.082zM4.738 11.31a.5.5 0 0 1 .694-.136l9.963 6.69a.5.5 0 0 1-.558.83l-9.962-6.69a.5.5 0 0 1-.137-.693"></svg:path><svg:path d="M8.066 10.359c-.42.054-.868.149-1.157.295c-.281.142-.616.436-.902.73a8 8 0 0 0-.432.48l-.024.029l-.006.007v.001l-.392-.312m0 0l-.39-.311v-.002l.003-.003l.008-.01l.03-.037l.109-.128c.092-.107.223-.253.378-.412c.299-.307.73-.703 1.167-.924c.45-.228 1.042-.338 1.479-.395a9 9 0 0 1 .747-.066l.048-.002h.018c.001 0 .002 0 .015.5l-.014-.5a.5.5 0 0 1 .027 1h-.011l-.04.001l-.15.009c-.13.008-.31.024-.511.05m7.091 4.761c.108.409.19.86.164 1.182c-.025.314-.17.735-.334 1.112a8 8 0 0 1-.28.58l-.019.034l-.004.008v.002l.436.244m0 0l.436.243l.001-.001l.002-.004l.006-.011l.023-.042l.078-.149c.064-.126.15-.302.238-.506c.17-.393.375-.941.414-1.43c.04-.502-.082-1.092-.195-1.518a9 9 0 0 0-.222-.716l-.016-.046l-.005-.013l-.001-.003v-.001s-.001-.001-.469.176l.468-.176a.5.5 0 0 0-.935.353v.002l.004.008l.013.037l.05.143c.04.123.095.296.146.492m-4.743-.601a.5.5 0 0 1 .137.694l-2.23 3.32a.5.5 0 0 1-.83-.557l2.23-3.32a.5.5 0 0 1 .693-.137"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPinCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPinCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPinCircleOffIcon],svg[pepicons-pencil-pin-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.77 5.932a1.5 1.5 0 0 0-2.082.41L9.18 10.076l-.83-.557l2.508-3.736a2.5 2.5 0 0 1 3.47-.682l3.32 2.23a2.5 2.5 0 0 1 .682 3.47l-2.508 3.735l-.83-.557l2.508-3.736a1.5 1.5 0 0 0-.41-2.082zM4.738 11.31a.5.5 0 0 1 .694-.136l9.963 6.69a.5.5 0 0 1-.558.83l-9.962-6.69a.5.5 0 0 1-.137-.693"></svg:path><svg:path d="M8.066 10.359c-.42.054-.868.149-1.157.295c-.281.142-.616.436-.902.73a8 8 0 0 0-.432.48l-.024.029l-.006.007v.001l-.392-.312m0 0l-.39-.311v-.002l.003-.003l.008-.01l.03-.037l.109-.128c.092-.107.223-.253.378-.412c.299-.307.73-.703 1.167-.924c.45-.228 1.042-.338 1.479-.395a9 9 0 0 1 .747-.066l.048-.002h.018c.001 0 .002 0 .015.5l-.014-.5a.5.5 0 0 1 .027 1h-.011l-.04.001l-.15.009c-.13.008-.31.024-.511.05m7.091 4.761c.108.409.19.86.164 1.182c-.025.314-.17.735-.334 1.112a8 8 0 0 1-.28.58l-.019.034l-.004.008v.002l.436.244m0 0l.436.243l.001-.001l.002-.004l.006-.011l.023-.042l.078-.149c.064-.126.15-.302.238-.506c.17-.393.375-.941.414-1.43c.04-.502-.082-1.092-.195-1.518a9 9 0 0 0-.222-.716l-.016-.046l-.005-.013l-.001-.003v-.001s-.001-.001-.469.176l.468-.176a.5.5 0 0 0-.935.353v.002l.004.008l.013.037l.05.143c.04.123.095.296.146.492m-4.743-.601a.5.5 0 0 1 .137.694l-2.23 3.32a.5.5 0 0 1-.83-.557l2.23-3.32a.5.5 0 0 1 .693-.137"></svg:path></svg:g><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPinCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPinOffIcon],svg[pepicons-pencil-pin-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.77 2.932a1.5 1.5 0 0 0-2.082.41L6.18 7.076l-.83-.557l2.508-3.736a2.5 2.5 0 0 1 3.47-.682l3.32 2.23a2.5 2.5 0 0 1 .682 3.47l-2.508 3.735l-.83-.557L14.5 7.244a1.5 1.5 0 0 0-.41-2.082zM1.738 8.31a.5.5 0 0 1 .694-.136l9.963 6.69a.5.5 0 0 1-.558.83l-9.962-6.69a.5.5 0 0 1-.137-.693"></svg:path><svg:path d="M5.066 7.359c-.42.054-.868.149-1.157.295c-.281.142-.616.436-.902.73a8 8 0 0 0-.432.48l-.024.029l-.006.007l-.392-.312m0 0l-.39-.311v-.002l.003-.003l.008-.01l.03-.037l.109-.128c.092-.107.223-.253.378-.412c.299-.307.73-.703 1.167-.924c.45-.228 1.042-.338 1.479-.395a9 9 0 0 1 .747-.066l.048-.002h.018c.001 0 .002 0 .015.5l-.014-.5a.5.5 0 0 1 .027 1h-.011l-.04.001l-.15.009c-.13.008-.31.024-.511.05m7.091 4.762c.108.409.19.86.164 1.182c-.025.314-.17.735-.334 1.112a8 8 0 0 1-.28.58l-.019.034l-.004.008v.002l.436.243m0 0l.436.244l.001-.001l.002-.004l.006-.011l.023-.042l.078-.149c.064-.126.15-.302.238-.506c.17-.393.375-.941.414-1.43c.04-.502-.082-1.092-.195-1.518a9 9 0 0 0-.222-.716l-.016-.046l-.005-.013l-.001-.003v-.001s-.001-.001-.469.176l.468-.176a.5.5 0 0 0-.935.353v.002l.004.008l.013.037l.05.143c.04.123.095.296.146.492m-4.743-.601a.5.5 0 0 1 .137.694l-2.23 3.32a.5.5 0 0 1-.83-.557l2.23-3.32a.5.5 0 0 1 .693-.137"></svg:path></svg:g><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPinOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPinpointIcon],svg[pepicons-pencil-pinpoint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10 11a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path><svg:path d="M3 8.123C3 12.125 7.223 19 10 19s7-6.875 7-10.877C17 4.191 13.868 1 10 1S3 4.191 3 8.123m13 0C16 11.643 12.096 18 10 18s-6-6.357-6-9.877C4 4.74 6.688 2 10 2s6 2.74 6 6.123"></svg:path></svg:g>`,
})
export class PepiconsPencilPinpointIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPinpointCircleIcon],svg[pepicons-pencil-pinpoint-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path><svg:path d="M6 11.123C6 15.125 10.223 22 13 22s7-6.875 7-10.877C20 7.191 16.868 4 13 4s-7 3.191-7 7.123m13 0C19 14.643 15.096 21 13 21s-6-6.357-6-9.877C7 7.74 9.688 5 13 5s6 2.74 6 6.123"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilPinpointCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPinpointCircleFilledIcon],svg[pepicons-pencil-pinpoint-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPinpointCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path><svg:path d="M6 11.123C6 15.125 10.223 22 13 22s7-6.875 7-10.877C20 7.191 16.868 4 13 4s-7 3.191-7 7.123m13 0C19 14.643 15.096 21 13 21s-6-6.357-6-9.877C7 7.74 9.688 5 13 5s6 2.74 6 6.123"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPinpointCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPinpointCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPinpointCircleOffIcon],svg[pepicons-pencil-pinpoint-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6 11.123C6 15.125 10.223 22 13 22s7-6.875 7-10.877C20 7.191 16.868 4 13 4s-7 3.191-7 7.123m13 0C19 14.643 15.096 21 13 21s-6-6.357-6-9.877C7 7.74 9.688 5 13 5s6 2.74 6 6.123" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPinpointCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPinpointOffIcon],svg[pepicons-pencil-pinpoint-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 11a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3 8.123C3 12.125 7.223 19 10 19s7-6.875 7-10.877C17 4.191 13.868 1 10 1S3 4.191 3 8.123m13 0C16 11.643 12.096 18 10 18s-6-6.357-6-9.877C4 4.74 6.688 2 10 2s6 2.74 6 6.123" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPinpointOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPlanetIcon],svg[pepicons-pencil-planet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.5 2a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M1 9.5a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0"></svg:path><svg:path d="M15.873 4.679a.5.5 0 0 1-.184.683c-.614.354-1.446.638-2.403.841a.5.5 0 1 1-.208-.978c.9-.191 1.621-.447 2.112-.73a.5.5 0 0 1 .683.184m-12.534.147a.5.5 0 0 1 .67-.223c1.132.567 3.144.968 5.491.968a.5.5 0 0 1 0 1c-2.424 0-4.612-.41-5.938-1.074a.5.5 0 0 1-.223-.671m13.467 3.311a.5.5 0 0 1-.229.67C15.08 9.538 12.382 10 9.367 10c-2.838 0-5.386-.408-6.92-1.062a.5.5 0 1 1 .392-.92C4.196 8.597 6.592 9 9.367 9c2.96 0 5.477-.458 6.77-1.092a.5.5 0 0 1 .67.23m-.001 3.428a.5.5 0 0 1-.229.669c-.775.38-2.099.673-3.555.874a35.5 35.5 0 0 1-4.665.32a.5.5 0 1 1 0-1c1.47 0 3.099-.114 4.529-.31c1.448-.2 2.632-.479 3.251-.782a.5.5 0 0 1 .67.229m-14.623.145a.5.5 0 0 1 .656-.264c.477.203 1.091.388 1.816.541a.5.5 0 1 1-.206.978c-.768-.161-1.448-.363-2.002-.6a.5.5 0 0 1-.264-.655"></svg:path><svg:path d="M6.357 12.286a.929.929 0 1 0 0 1.857a.929.929 0 0 0 0-1.857m-1.928.928a1.929 1.929 0 1 1 3.857 0a1.929 1.929 0 0 1-3.857 0"></svg:path></svg:g>`,
})
export class PepiconsPencilPlanetIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPlanetCircleIcon],svg[pepicons-pencil-planet-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.5 5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M4 12.5a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0"></svg:path><svg:path d="M18.873 7.679a.5.5 0 0 1-.184.683c-.614.354-1.446.638-2.403.841a.5.5 0 1 1-.208-.978c.9-.191 1.621-.447 2.112-.73a.5.5 0 0 1 .683.184m-12.534.147a.5.5 0 0 1 .67-.223c1.132.567 3.144.968 5.491.968a.5.5 0 0 1 0 1c-2.424 0-4.612-.41-5.938-1.074a.5.5 0 0 1-.223-.671m13.467 3.311a.5.5 0 0 1-.229.67C18.08 12.538 15.382 13 12.367 13c-2.838 0-5.386-.408-6.92-1.062a.5.5 0 1 1 .392-.92c1.357.579 3.753.982 6.528.982c2.96 0 5.477-.458 6.77-1.092a.5.5 0 0 1 .67.23m-.001 3.428a.5.5 0 0 1-.229.669c-.775.38-2.099.673-3.555.874a35.5 35.5 0 0 1-4.665.32a.5.5 0 1 1 0-1c1.47 0 3.099-.114 4.529-.31c1.448-.2 2.631-.479 3.251-.782a.5.5 0 0 1 .67.229m-14.623.145a.5.5 0 0 1 .656-.264c.477.203 1.091.388 1.816.541a.5.5 0 1 1-.206.978c-.768-.161-1.448-.363-2.002-.6a.5.5 0 0 1-.264-.655"></svg:path><svg:path d="M9.357 15.286a.929.929 0 1 0 0 1.857a.929.929 0 0 0 0-1.857m-1.928.928a1.929 1.929 0 1 1 3.857 0a1.929 1.929 0 0 1-3.857 0"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilPlanetCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPlanetCircleFilledIcon],svg[pepicons-pencil-planet-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPlanetCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.5 5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M4 12.5a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0"></svg:path><svg:path d="M18.873 7.679a.5.5 0 0 1-.184.683c-.614.354-1.446.638-2.403.841a.5.5 0 1 1-.208-.978c.9-.191 1.621-.447 2.112-.73a.5.5 0 0 1 .683.184m-12.534.147a.5.5 0 0 1 .67-.223c1.132.567 3.144.968 5.491.968a.5.5 0 0 1 0 1c-2.424 0-4.612-.41-5.938-1.074a.5.5 0 0 1-.223-.671m13.467 3.311a.5.5 0 0 1-.229.67C18.08 12.538 15.382 13 12.367 13c-2.838 0-5.386-.408-6.92-1.062a.5.5 0 1 1 .392-.92c1.357.579 3.753.982 6.528.982c2.96 0 5.477-.458 6.77-1.092a.5.5 0 0 1 .67.23m-.001 3.428a.5.5 0 0 1-.229.669c-.775.38-2.099.673-3.555.874a35.5 35.5 0 0 1-4.665.32a.5.5 0 1 1 0-1c1.47 0 3.099-.114 4.529-.31c1.448-.2 2.631-.479 3.251-.782a.5.5 0 0 1 .67.229m-14.623.145a.5.5 0 0 1 .656-.264c.477.203 1.091.388 1.816.541a.5.5 0 1 1-.206.978c-.768-.161-1.448-.363-2.002-.6a.5.5 0 0 1-.264-.655"></svg:path><svg:path d="M9.357 15.286a.929.929 0 1 0 0 1.857a.929.929 0 0 0 0-1.857m-1.928.928a1.929 1.929 0 1 1 3.857 0a1.929 1.929 0 0 1-3.857 0"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPlanetCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPlanetCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPlanetCircleOffIcon],svg[pepicons-pencil-planet-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12.5 5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M4 12.5a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M18.873 7.679a.5.5 0 0 1-.184.683c-.614.354-1.446.638-2.403.841a.5.5 0 1 1-.208-.978c.9-.191 1.621-.447 2.112-.73a.5.5 0 0 1 .683.184m-12.534.147a.5.5 0 0 1 .67-.223c1.132.567 3.144.968 5.491.968a.5.5 0 0 1 0 1c-2.424 0-4.612-.41-5.938-1.074a.5.5 0 0 1-.223-.671m13.467 3.311a.5.5 0 0 1-.229.67C18.08 12.538 15.382 13 12.367 13c-2.838 0-5.386-.408-6.92-1.062a.5.5 0 1 1 .392-.92c1.357.579 3.753.982 6.528.982c2.96 0 5.477-.458 6.77-1.092a.5.5 0 0 1 .67.23m-.001 3.428a.5.5 0 0 1-.229.669c-.775.38-2.099.673-3.555.874a35.5 35.5 0 0 1-4.665.32a.5.5 0 1 1 0-1c1.47 0 3.099-.114 4.529-.31c1.448-.2 2.631-.479 3.251-.782a.5.5 0 0 1 .67.229m-14.623.145a.5.5 0 0 1 .656-.264c.477.203 1.091.388 1.816.541a.5.5 0 1 1-.206.978c-.768-.161-1.448-.363-2.002-.6a.5.5 0 0 1-.264-.655" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.357 15.286a.929.929 0 1 0 0 1.857a.929.929 0 0 0 0-1.857m-1.928.928a1.929 1.929 0 1 1 3.857 0a1.929 1.929 0 0 1-3.857 0" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPlanetCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPlanetOffIcon],svg[pepicons-pencil-planet-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M9.5 2a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M1 9.5a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15.873 4.679a.5.5 0 0 1-.184.683c-.614.354-1.446.638-2.403.841a.5.5 0 1 1-.208-.978c.9-.191 1.621-.447 2.112-.73a.5.5 0 0 1 .683.184m-12.534.147a.5.5 0 0 1 .67-.223c1.132.567 3.144.968 5.491.968a.5.5 0 0 1 0 1c-2.424 0-4.612-.41-5.938-1.074a.5.5 0 0 1-.223-.671m13.467 3.311a.5.5 0 0 1-.229.67C15.08 9.538 12.382 10 9.367 10c-2.838 0-5.386-.408-6.92-1.062a.5.5 0 1 1 .392-.92C4.196 8.597 6.592 9 9.367 9c2.96 0 5.477-.458 6.77-1.092a.5.5 0 0 1 .67.23m-.001 3.428a.5.5 0 0 1-.229.669c-.775.38-2.099.673-3.555.874a35.5 35.5 0 0 1-4.665.32a.5.5 0 1 1 0-1c1.47 0 3.099-.114 4.529-.31c1.448-.2 2.632-.479 3.251-.782a.5.5 0 0 1 .67.229m-14.623.145a.5.5 0 0 1 .656-.264c.477.203 1.091.388 1.816.541a.5.5 0 1 1-.206.978c-.768-.161-1.448-.363-2.002-.6a.5.5 0 0 1-.264-.655" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.357 12.286a.929.929 0 1 0 0 1.857a.929.929 0 0 0 0-1.857m-1.928.928a1.929 1.929 0 1 1 3.857 0a1.929 1.929 0 0 1-3.857 0" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPlanetOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPlanetRingIcon],svg[pepicons-pencil-planet-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.126 3.923a5.976 5.976 0 1 0 0 11.952a5.976 5.976 0 0 0 0-11.952M3.15 9.9a6.976 6.976 0 1 1 13.951 0a6.976 6.976 0 0 1-13.951 0"></svg:path><svg:path d="M2.3 13.528c-.337.667-.288.985-.208 1.102c.067.098.276.238.838.223c.536-.013 1.26-.167 2.132-.468c1.739-.6 3.958-1.745 6.235-3.302c2.268-1.55 3.985-3.189 5.022-4.574c.52-.695.854-1.305 1.01-1.792c.16-.502.104-.772.017-.898c-.014-.021-.047-.063-.193-.078c-.162-.017-.402.008-.739.092c-.63.157-1.441.476-2.422.862l-.207.081l-.366-.93l.234-.093c.95-.374 1.822-.717 2.52-.89c.378-.094.75-.151 1.082-.117c.348.036.69.177.917.508c.345.505.306 1.152.109 1.768c-.203.632-.605 1.343-1.162 2.087c-1.117 1.492-2.922 3.203-5.258 4.8c-2.329 1.592-4.628 2.785-6.473 3.421c-.918.317-1.752.506-2.433.523c-.656.017-1.324-.125-1.688-.658c-.42-.614-.216-1.413.14-2.119c.379-.748 1.033-1.602 1.88-2.494l.725.69c-.815.857-1.396 1.63-1.712 2.256"></svg:path></svg:g>`,
})
export class PepiconsPencilPlanetRingIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPlanetRingCircleIcon],svg[pepicons-pencil-planet-ring-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.126 6.923a5.976 5.976 0 1 0 0 11.952a5.976 5.976 0 0 0 0-11.952M6.15 12.9a6.976 6.976 0 1 1 13.951 0a6.976 6.976 0 0 1-13.951 0"></svg:path><svg:path d="M5.3 16.528c-.337.667-.288.985-.208 1.102c.067.098.276.238.838.224c.536-.014 1.26-.168 2.132-.469c1.739-.6 3.958-1.745 6.235-3.302c2.268-1.55 3.985-3.189 5.022-4.574c.52-.695.854-1.305 1.01-1.792c.16-.502.104-.772.017-.898c-.014-.021-.047-.063-.193-.078c-.162-.017-.402.008-.739.092c-.63.157-1.441.476-2.422.862l-.207.081l-.366-.93l.234-.093c.95-.374 1.822-.717 2.52-.89c.378-.094.75-.151 1.082-.117c.348.036.69.177.917.508c.345.505.306 1.152.109 1.768c-.203.632-.605 1.343-1.162 2.087c-1.117 1.492-2.922 3.203-5.258 4.8c-2.329 1.592-4.628 2.785-6.473 3.421c-.918.317-1.752.506-2.433.523c-.656.017-1.324-.125-1.688-.658c-.42-.614-.216-1.413.14-2.119c.379-.748 1.033-1.602 1.88-2.494l.725.69c-.815.857-1.396 1.63-1.712 2.256"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilPlanetRingCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPlanetRingCircleFilledIcon],svg[pepicons-pencil-planet-ring-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPlanetRingCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.126 6.923a5.976 5.976 0 1 0 0 11.952a5.976 5.976 0 0 0 0-11.952M6.15 12.9a6.976 6.976 0 1 1 13.951 0a6.976 6.976 0 0 1-13.951 0"></svg:path><svg:path d="M5.3 16.528c-.337.667-.288.985-.208 1.102c.067.098.276.238.838.224c.536-.014 1.26-.168 2.132-.469c1.739-.6 3.958-1.745 6.235-3.302c2.268-1.55 3.985-3.189 5.022-4.574c.52-.695.854-1.305 1.01-1.792c.16-.502.104-.772.017-.898c-.014-.021-.047-.063-.193-.078c-.162-.017-.402.008-.739.092c-.63.157-1.441.476-2.422.862l-.207.081l-.366-.93l.234-.093c.95-.374 1.822-.717 2.52-.89c.378-.094.75-.151 1.082-.117c.348.036.69.177.917.508c.345.505.306 1.152.109 1.768c-.203.632-.605 1.343-1.162 2.087c-1.117 1.492-2.922 3.203-5.258 4.8c-2.329 1.592-4.628 2.785-6.473 3.421c-.918.317-1.752.506-2.433.523c-.656.017-1.324-.125-1.688-.658c-.42-.614-.216-1.413.14-2.119c.379-.748 1.033-1.602 1.88-2.494l.725.69c-.815.857-1.396 1.63-1.712 2.256"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPlanetRingCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPlanetRingCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPlanetRingCircleOffIcon],svg[pepicons-pencil-planet-ring-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.126 6.923a5.976 5.976 0 1 0 0 11.952a5.976 5.976 0 0 0 0-11.952M6.15 12.9a6.976 6.976 0 1 1 13.951 0a6.976 6.976 0 0 1-13.951 0"></svg:path><svg:path d="M5.3 16.528c-.337.667-.288.985-.208 1.102c.067.098.276.238.838.224c.536-.014 1.26-.168 2.132-.469c1.739-.6 3.958-1.745 6.235-3.302c2.268-1.55 3.985-3.189 5.022-4.574c.52-.695.854-1.305 1.01-1.792c.16-.502.104-.772.017-.898c-.014-.021-.047-.063-.193-.078c-.162-.017-.402.008-.739.092c-.63.157-1.441.476-2.422.862l-.207.081l-.366-.93l.234-.093c.95-.374 1.822-.717 2.52-.89c.378-.094.75-.151 1.082-.117c.348.036.69.177.917.508c.345.505.306 1.152.109 1.768c-.203.632-.605 1.343-1.162 2.087c-1.117 1.492-2.922 3.203-5.258 4.8c-2.329 1.592-4.628 2.785-6.473 3.421c-.918.317-1.752.506-2.433.523c-.656.017-1.324-.125-1.688-.658c-.42-.614-.216-1.413.14-2.119c.379-.748 1.033-1.602 1.88-2.494l.725.69c-.815.857-1.396 1.63-1.712 2.256"></svg:path></svg:g><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPlanetRingCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPlanetRingOffIcon],svg[pepicons-pencil-planet-ring-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.126 3.923a5.976 5.976 0 1 0 0 11.952a5.976 5.976 0 0 0 0-11.952M3.15 9.9a6.976 6.976 0 1 1 13.951 0a6.976 6.976 0 0 1-13.951 0"></svg:path><svg:path d="M2.3 13.528c-.337.667-.288.985-.208 1.102c.067.098.276.238.838.223c.536-.013 1.26-.167 2.132-.468c1.739-.6 3.958-1.745 6.235-3.302c2.268-1.55 3.985-3.189 5.022-4.574c.52-.695.854-1.305 1.01-1.792c.16-.502.104-.772.017-.898c-.014-.021-.047-.063-.193-.078c-.162-.017-.402.008-.739.092c-.63.157-1.441.476-2.422.862l-.207.081l-.366-.93l.234-.093c.95-.374 1.822-.717 2.52-.89c.378-.094.75-.151 1.082-.117c.348.036.69.177.917.508c.345.505.306 1.152.109 1.768c-.203.632-.605 1.343-1.162 2.087c-1.117 1.492-2.922 3.203-5.258 4.8c-2.329 1.592-4.628 2.785-6.473 3.421c-.918.317-1.752.506-2.433.523c-.656.017-1.324-.125-1.688-.658c-.42-.614-.216-1.413.14-2.119c.379-.748 1.033-1.602 1.88-2.494l.725.69c-.815.857-1.396 1.63-1.712 2.256"></svg:path></svg:g><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPlanetRingOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPlayIcon],svg[pepicons-pencil-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6 15.321l9.014-4.883L6 4.804zm9.49-4.003a1 1 0 0 0 .054-1.728L6.53 3.956A1 1 0 0 0 5 4.804v10.517a1 1 0 0 0 1.476.88z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPencilPlayIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPlayCircleIcon],svg[pepicons-pencil-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="m9 18.321l9.014-4.883L9 7.804zm9.49-4.003a1 1 0 0 0 .054-1.728L9.53 6.956A1 1 0 0 0 8 7.804v10.517a1 1 0 0 0 1.476.88z"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilPlayCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPlayCircleFilledIcon],svg[pepicons-pencil-play-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPlayCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="m9 18.321l9.014-4.883L9 7.804zm9.49-4.003a1 1 0 0 0 .054-1.728L9.53 6.956A1 1 0 0 0 8 7.804v10.517a1 1 0 0 0 1.476.88z" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPlayCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPlayCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPlayCircleOffIcon],svg[pepicons-pencil-play-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m9 18.321l9.014-4.883L9 7.804zm9.49-4.003a1 1 0 0 0 .054-1.728L9.53 6.956A1 1 0 0 0 8 7.804v10.517a1 1 0 0 0 1.476.88z" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPlayCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPlayOffIcon],svg[pepicons-pencil-play-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m6 15.321l9.014-4.883L6 4.804zm9.49-4.003a1 1 0 0 0 .054-1.728L6.53 3.956A1 1 0 0 0 5 4.804v10.517a1 1 0 0 0 1.476.88z" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPlayOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPlusIcon],svg[pepicons-pencil-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 10.5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1z"></svg:path><svg:path d="M9.5 5a.5.5 0 0 1 1 0v10a.5.5 0 0 1-1 0z"></svg:path></svg:g>`,
})
export class PepiconsPencilPlusIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPlusCircleIcon],svg[pepicons-pencil-plus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 13.5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1z"></svg:path><svg:path d="M12.5 8a.5.5 0 0 1 1 0v10a.5.5 0 0 1-1 0z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPlusCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPlusCircleFilledIcon],svg[pepicons-pencil-plus-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPlusCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M8 13.5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1z"></svg:path><svg:path d="M12.5 8a.5.5 0 0 1 1 0v10a.5.5 0 0 1-1 0z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPlusCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPlusCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPlusCircleOffIcon],svg[pepicons-pencil-plus-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 13.5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1z"></svg:path><svg:path d="M12.5 8a.5.5 0 0 1 1 0v10a.5.5 0 0 1-1 0z"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPlusCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPlusOffIcon],svg[pepicons-pencil-plus-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 10.5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1z"></svg:path><svg:path d="M9.5 5a.5.5 0 0 1 1 0v10a.5.5 0 0 1-1 0z"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPlusOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPowerIcon],svg[pepicons-pencil-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4.477 5.46a.6.6 0 1 1 .854.842a6.02 6.02 0 0 0-1.731 4.24c0 3.312 2.643 5.992 5.9 5.992s5.9-2.68 5.9-5.992a6.02 6.02 0 0 0-1.731-4.24a.6.6 0 1 1 .854-.842a7.22 7.22 0 0 1 2.077 5.082c0 3.97-3.177 7.192-7.1 7.192s-7.1-3.222-7.1-7.192c0-1.93.756-3.743 2.077-5.082"></svg:path><svg:path d="M8.878 1.25a.6.6 0 0 1 1.2 0v7.085a.6.6 0 0 1-1.2 0z"></svg:path></svg:g>`,
})
export class PepiconsPencilPowerIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPowerCircleIcon],svg[pepicons-pencil-power-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.477 8.46a.6.6 0 1 1 .854.842a6.02 6.02 0 0 0-1.731 4.24c0 3.312 2.643 5.992 5.9 5.992s5.9-2.68 5.9-5.992a6.02 6.02 0 0 0-1.731-4.24a.6.6 0 1 1 .854-.842a7.22 7.22 0 0 1 2.077 5.082c0 3.97-3.177 7.192-7.1 7.192s-7.1-3.222-7.1-7.192c0-1.93.756-3.743 2.077-5.082"></svg:path><svg:path d="M11.878 4.25a.6.6 0 0 1 1.2 0v7.085a.6.6 0 0 1-1.2 0z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPowerCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPowerCircleFilledIcon],svg[pepicons-pencil-power-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPowerCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M7.477 8.46a.6.6 0 1 1 .854.842a6.02 6.02 0 0 0-1.731 4.24c0 3.312 2.643 5.992 5.9 5.992s5.9-2.68 5.9-5.992a6.02 6.02 0 0 0-1.731-4.24a.6.6 0 1 1 .854-.842a7.22 7.22 0 0 1 2.077 5.082c0 3.97-3.177 7.192-7.1 7.192s-7.1-3.222-7.1-7.192c0-1.93.756-3.743 2.077-5.082"></svg:path><svg:path d="M11.878 4.25a.6.6 0 0 1 1.2 0v7.085a.6.6 0 0 1-1.2 0z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPowerCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPowerCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPowerCircleOffIcon],svg[pepicons-pencil-power-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.477 8.46a.6.6 0 1 1 .854.842a6.02 6.02 0 0 0-1.731 4.24c0 3.312 2.643 5.992 5.9 5.992s5.9-2.68 5.9-5.992a6.02 6.02 0 0 0-1.731-4.24a.6.6 0 1 1 .854-.842a7.22 7.22 0 0 1 2.077 5.082c0 3.97-3.177 7.192-7.1 7.192s-7.1-3.222-7.1-7.192c0-1.93.756-3.743 2.077-5.082"></svg:path><svg:path d="M11.878 4.25a.6.6 0 0 1 1.2 0v7.085a.6.6 0 0 1-1.2 0z"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPowerCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPowerOffIcon],svg[pepicons-pencil-power-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4.477 5.46a.6.6 0 1 1 .854.842a6.02 6.02 0 0 0-1.731 4.24c0 3.312 2.643 5.992 5.9 5.992s5.9-2.68 5.9-5.992a6.02 6.02 0 0 0-1.731-4.24a.6.6 0 1 1 .854-.842a7.22 7.22 0 0 1 2.077 5.082c0 3.97-3.177 7.192-7.1 7.192s-7.1-3.222-7.1-7.192c0-1.93.756-3.743 2.077-5.082"></svg:path><svg:path d="M8.878 1.25a.6.6 0 0 1 1.2 0v7.085a.6.6 0 0 1-1.2 0z"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPowerOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPreviousTrackIcon],svg[pepicons-pencil-previous-track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.5 14.796L11.019 10L16.5 5.204zm-6.14-4.043a1 1 0 0 1 0-1.506l5.482-4.796c.646-.566 1.658-.106 1.658.753v9.592c0 .86-1.012 1.319-1.658.753z"></svg:path><svg:path d="M9.5 14.796L4.019 10L9.5 5.204zm-6.14-4.043a1 1 0 0 1 0-1.506l5.482-4.796c.646-.566 1.658-.106 1.658.753v9.592c0 .86-1.012 1.319-1.658.753z"></svg:path><svg:path d="M3 4.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"></svg:path></svg:g>`,
})
export class PepiconsPencilPreviousTrackIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPreviousTrackCircleIcon],svg[pepicons-pencil-previous-track-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M19.5 17.796L14.019 13L19.5 8.204zm-6.14-4.043a1 1 0 0 1 0-1.506l5.482-4.796c.646-.566 1.658-.106 1.658.753v9.592c0 .86-1.012 1.319-1.658.753z"></svg:path><svg:path d="M12.5 17.796L7.019 13L12.5 8.204zm-6.14-4.043a1 1 0 0 1 0-1.506l5.482-4.796c.646-.566 1.658-.106 1.658.753v9.592c0 .86-1.012 1.319-1.658.753z"></svg:path><svg:path d="M6 7.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 1 0V8a.5.5 0 0 0-.5-.5"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilPreviousTrackCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPreviousTrackCircleFilledIcon],svg[pepicons-pencil-previous-track-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPreviousTrackCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M19.5 17.796L14.019 13L19.5 8.204zm-6.14-4.043a1 1 0 0 1 0-1.506l5.482-4.796c.646-.566 1.658-.106 1.658.753v9.592c0 .86-1.012 1.319-1.658.753z"></svg:path><svg:path d="M12.5 17.796L7.019 13L12.5 8.204zm-6.14-4.043a1 1 0 0 1 0-1.506l5.482-4.796c.646-.566 1.658-.106 1.658.753v9.592c0 .86-1.012 1.319-1.658.753z"></svg:path><svg:path d="M6 7.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 1 0V8a.5.5 0 0 0-.5-.5"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPreviousTrackCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPreviousTrackCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPreviousTrackCircleOffIcon],svg[pepicons-pencil-previous-track-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M19.5 17.796L14.019 13L19.5 8.204zm-6.14-4.043a1 1 0 0 1 0-1.506l5.482-4.796c.646-.566 1.658-.106 1.658.753v9.592c0 .86-1.012 1.319-1.658.753z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.5 17.796L7.019 13L12.5 8.204zm-6.14-4.043a1 1 0 0 1 0-1.506l5.482-4.796c.646-.566 1.658-.106 1.658.753v9.592c0 .86-1.012 1.319-1.658.753z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6 7.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 1 0V8a.5.5 0 0 0-.5-.5" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPreviousTrackCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPreviousTrackOffIcon],svg[pepicons-pencil-previous-track-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M16.5 14.796L11.019 10L16.5 5.204zm-6.14-4.043a1 1 0 0 1 0-1.506l5.482-4.796c.646-.566 1.658-.106 1.658.753v9.592c0 .86-1.012 1.319-1.658.753z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.5 14.796L4.019 10L9.5 5.204zm-6.14-4.043a1 1 0 0 1 0-1.506l5.482-4.796c.646-.566 1.658-.106 1.658.753v9.592c0 .86-1.012 1.319-1.658.753z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3 4.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPreviousTrackOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPrinterIcon],svg[pepicons-pencil-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 6.5H4V2.1C4 1.234 4.612.5 5.417.5h9.166C15.388.5 16 1.234 16 2.1v4.4h-1V2.1c0-.35-.209-.6-.417-.6H5.417c-.208 0-.417.25-.417.6z"></svg:path><svg:path fill-rule="evenodd" d="M16 6H4a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3M2 9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" clip-rule="evenodd"></svg:path><svg:path d="M15 11.969h1v5.25c0 .97-.588 1.812-1.417 1.812H5.417C4.588 19.031 4 18.19 4 17.22v-5.25h1v5.25c0 .479.233.812.417.812h9.166c.184 0 .417-.333.417-.812z"></svg:path><svg:path d="M13.5 15.5a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zm0-2a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z"></svg:path></svg:g>`,
})
export class PepiconsPencilPrinterIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPrinterCircleIcon],svg[pepicons-pencil-printer-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 9.5H7V5.1c0-.866.612-1.6 1.417-1.6h9.166c.805 0 1.417.734 1.417 1.6v4.4h-1V5.1c0-.35-.209-.6-.417-.6H8.417c-.208 0-.417.25-.417.6z"></svg:path><svg:path fill-rule="evenodd" d="M19 9H7a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3M5 12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" clip-rule="evenodd"></svg:path><svg:path d="M18 14.969h1v5.25c0 .97-.588 1.812-1.417 1.812H8.417C7.588 22.031 7 21.19 7 20.22v-5.25h1v5.25c0 .479.233.812.417.812h9.166c.184 0 .417-.333.417-.812z"></svg:path><svg:path d="M16.5 18.5a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zm0-2a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPrinterCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPrinterCircleFilledIcon],svg[pepicons-pencil-printer-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPrinterCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#fff" d="M7.5 5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v4.5h-11z"></svg:path><svg:path fill="#000" d="M8 9.5H7V5.1c0-.866.612-1.6 1.417-1.6h9.166c.805 0 1.417.734 1.417 1.6v4.4h-1V5.1c0-.35-.209-.6-.417-.6H8.417c-.208 0-.417.25-.417.6z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M19 9H7a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3M5 12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" clip-rule="evenodd"></svg:path><svg:path fill="#fff" d="M18.5 20.531a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V14.97h11z"></svg:path><svg:path fill="#000" d="M18 14.969h1v5.25c0 .97-.588 1.812-1.417 1.812H8.417C7.588 22.031 7 21.19 7 20.22v-5.25h1v5.25c0 .479.233.812.417.812h9.166c.184 0 .417-.333.417-.812z"></svg:path><svg:path fill="#000" d="M16.5 18.5a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zm0-2a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPrinterCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPrinterCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPrinterCircleOffIcon],svg[pepicons-pencil-printer-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 9.5H7V5.1c0-.866.612-1.6 1.417-1.6h9.166c.805 0 1.417.734 1.417 1.6v4.4h-1V5.1c0-.35-.209-.6-.417-.6H8.417c-.208 0-.417.25-.417.6z"></svg:path><svg:path fill-rule="evenodd" d="M19 9H7a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3M5 12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" clip-rule="evenodd"></svg:path><svg:path d="M18 14.969h1v5.25c0 .97-.588 1.812-1.417 1.812H8.417C7.588 22.031 7 21.19 7 20.22v-5.25h1v5.25c0 .479.233.812.417.812h9.166c.184 0 .417-.333.417-.812z"></svg:path><svg:path d="M16.5 18.5a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zm0-2a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilPrinterCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPrinterOffIcon],svg[pepicons-pencil-printer-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 6.5H4V2.1C4 1.234 4.612.5 5.417.5h9.166C15.388.5 16 1.234 16 2.1v4.4h-1V2.1c0-.35-.209-.6-.417-.6H5.417c-.208 0-.417.25-.417.6z"></svg:path><svg:path fill-rule="evenodd" d="M16 6H4a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3M2 9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" clip-rule="evenodd"></svg:path><svg:path d="M15 11.969h1v5.25c0 .97-.588 1.812-1.417 1.812H5.417C4.588 19.031 4 18.19 4 17.22v-5.25h1v5.25c0 .479.233.812.417.812h9.166c.184 0 .417-.333.417-.812z"></svg:path><svg:path d="M13.5 15.5a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zm0-2a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPrinterOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilQrCodeIcon],svg[pepicons-pencil-qr-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.5 5.5v3h3v-3zm-.5-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5zm6.5 1v3h3v-3zm-.5-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5zm-5.5 7v3h3v-3zm-.5-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></svg:path><svg:path d="M10.5 11a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5z"></svg:path><svg:path fill-rule="evenodd" d="M11.5 11.5v3h3v-3zm-.5-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5zM2.5 3a.5.5 0 0 1 .5-.5h3.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3 2.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5m0 15a.5.5 0 0 1-.5-.5v-3.5a.5.5 0 0 1 1 0V17a.5.5 0 0 1-.5.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M2.5 17a.5.5 0 0 1 .5-.5h3.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m15 0a.5.5 0 0 1-.5.5h-3.5a.5.5 0 0 1 0-1H17a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17 17.5a.5.5 0 0 1-.5-.5v-3.5a.5.5 0 0 1 1 0V17a.5.5 0 0 1-.5.5m0-15a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17.5 3a.5.5 0 0 1-.5.5h-3.5a.5.5 0 0 1 0-1H17a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilQrCodeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilQrCodeCircleIcon],svg[pepicons-pencil-qr-code-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.5 8.5v3h3v-3zm-.5-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5zm6.5 1v3h3v-3zm-.5-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5zm-5.5 7v3h3v-3zm-.5-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></svg:path><svg:path d="M13.5 14a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5z"></svg:path><svg:path fill-rule="evenodd" d="M14.5 14.5v3h3v-3zm-.5-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5zM5.5 6a.5.5 0 0 1 .5-.5h3.5a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6 5.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m0 15a.5.5 0 0 1-.5-.5v-3.5a.5.5 0 0 1 1 0V20a.5.5 0 0 1-.5.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.5 20a.5.5 0 0 1 .5-.5h3.5a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5m15 0a.5.5 0 0 1-.5.5h-3.5a.5.5 0 0 1 0-1H20a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M20 20.5a.5.5 0 0 1-.5-.5v-3.5a.5.5 0 0 1 1 0V20a.5.5 0 0 1-.5.5m0-15a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M20.5 6a.5.5 0 0 1-.5.5h-3.5a.5.5 0 0 1 0-1H20a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilQrCodeCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilQrCodeCircleFilledIcon],svg[pepicons-pencil-qr-code-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilQrCodeCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M8.5 8.5v3h3v-3zm-.5-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5zm6.5 1v3h3v-3zm-.5-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5zm-5.5 7v3h3v-3zm-.5-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></svg:path><svg:path d="M13.5 14a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5z"></svg:path><svg:path fill-rule="evenodd" d="M14.5 14.5v3h3v-3zm-.5-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5zM5.5 6a.5.5 0 0 1 .5-.5h3.5a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6 5.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m0 15a.5.5 0 0 1-.5-.5v-3.5a.5.5 0 0 1 1 0V20a.5.5 0 0 1-.5.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.5 20a.5.5 0 0 1 .5-.5h3.5a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5m15 0a.5.5 0 0 1-.5.5h-3.5a.5.5 0 0 1 0-1H20a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M20 20.5a.5.5 0 0 1-.5-.5v-3.5a.5.5 0 0 1 1 0V20a.5.5 0 0 1-.5.5m0-15a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M20.5 6a.5.5 0 0 1-.5.5h-3.5a.5.5 0 0 1 0-1H20a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilQrCodeCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilQrCodeCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilQrCodeCircleOffIcon],svg[pepicons-pencil-qr-code-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.5 8.5v3h3v-3zm-.5-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5zm6.5 1v3h3v-3zm-.5-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5zm-5.5 7v3h3v-3zm-.5-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></svg:path><svg:path d="M13.5 14a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5z"></svg:path><svg:path fill-rule="evenodd" d="M14.5 14.5v3h3v-3zm-.5-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5zM5.5 6a.5.5 0 0 1 .5-.5h3.5a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6 5.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m0 15a.5.5 0 0 1-.5-.5v-3.5a.5.5 0 0 1 1 0V20a.5.5 0 0 1-.5.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.5 20a.5.5 0 0 1 .5-.5h3.5a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5m15 0a.5.5 0 0 1-.5.5h-3.5a.5.5 0 0 1 0-1H20a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M20 20.5a.5.5 0 0 1-.5-.5v-3.5a.5.5 0 0 1 1 0V20a.5.5 0 0 1-.5.5m0-15a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M20.5 6a.5.5 0 0 1-.5.5h-3.5a.5.5 0 0 1 0-1H20a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilQrCodeCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilQrCodeOffIcon],svg[pepicons-pencil-qr-code-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.5 5.5v3h3v-3zm-.5-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5zm6.5 1v3h3v-3zm-.5-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5zm-5.5 7v3h3v-3zm-.5-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></svg:path><svg:path d="M10.5 11a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5z"></svg:path><svg:path fill-rule="evenodd" d="M11.5 11.5v3h3v-3zm-.5-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5zM2.5 3a.5.5 0 0 1 .5-.5h3.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3 2.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5m0 15a.5.5 0 0 1-.5-.5v-3.5a.5.5 0 0 1 1 0V17a.5.5 0 0 1-.5.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M2.5 17a.5.5 0 0 1 .5-.5h3.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m15 0a.5.5 0 0 1-.5.5h-3.5a.5.5 0 0 1 0-1H17a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17 17.5a.5.5 0 0 1-.5-.5v-3.5a.5.5 0 0 1 1 0V17a.5.5 0 0 1-.5.5m0-15a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17.5 3a.5.5 0 0 1-.5.5h-3.5a.5.5 0 0 1 0-1H17a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilQrCodeOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilQuestionIcon],svg[pepicons-pencil-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 16.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill-rule="evenodd" d="M9.71 4.065c-.807 0-1.524.24-2.053.614c-.51.36-.825.826-.922 1.308a.75.75 0 1 1-1.47-.297c.186-.922.762-1.696 1.526-2.236c.796-.562 1.82-.89 2.919-.89c2.325 0 4.508 1.535 4.508 3.757c0 1.292-.768 2.376-1.834 3.029a.75.75 0 0 1-.784-1.28c.729-.446 1.118-1.093 1.118-1.749c0-1.099-1.182-2.256-3.008-2.256m0 5.265a.75.75 0 0 1 .75.75v1.502a.75.75 0 1 1-1.5 0V10.08a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.638 8.326a.75.75 0 0 1-.258 1.029l-2.285 1.368a.75.75 0 1 1-.77-1.287l2.285-1.368a.75.75 0 0 1 1.028.258" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilQuestionIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilQuestionCircleIcon],svg[pepicons-pencil-question-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 19.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill-rule="evenodd" d="M12.71 7.065c-.807 0-1.524.24-2.053.614c-.51.36-.825.826-.922 1.308a.75.75 0 1 1-1.47-.297c.186-.922.762-1.696 1.526-2.236c.796-.562 1.82-.89 2.919-.89c2.325 0 4.508 1.535 4.508 3.757c0 1.292-.768 2.376-1.834 3.029a.75.75 0 0 1-.784-1.28c.729-.446 1.118-1.093 1.118-1.749c0-1.099-1.182-2.256-3.008-2.256m0 5.265a.75.75 0 0 1 .75.75v1.502a.75.75 0 1 1-1.5 0V13.08a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15.638 11.326a.75.75 0 0 1-.258 1.029l-2.285 1.368a.75.75 0 1 1-.77-1.287l2.285-1.368a.75.75 0 0 1 1.028.258" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilQuestionCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilQuestionCircleFilledIcon],svg[pepicons-pencil-question-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilQuestionCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M14 19.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill-rule="evenodd" d="M12.71 7.065c-.807 0-1.524.24-2.053.614c-.51.36-.825.826-.922 1.308a.75.75 0 1 1-1.47-.297c.186-.922.762-1.696 1.526-2.236c.796-.562 1.82-.89 2.919-.89c2.325 0 4.508 1.535 4.508 3.757c0 1.292-.768 2.376-1.834 3.029a.75.75 0 0 1-.784-1.28c.729-.446 1.118-1.093 1.118-1.749c0-1.099-1.182-2.256-3.008-2.256m0 5.265a.75.75 0 0 1 .75.75v1.502a.75.75 0 1 1-1.5 0V13.08a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15.638 11.326a.75.75 0 0 1-.258 1.029l-2.285 1.368a.75.75 0 1 1-.77-1.287l2.285-1.368a.75.75 0 0 1 1.028.258" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilQuestionCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilQuestionCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilQuestionCircleOffIcon],svg[pepicons-pencil-question-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 19.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill-rule="evenodd" d="M12.71 7.065c-.807 0-1.524.24-2.053.614c-.51.36-.825.826-.922 1.308a.75.75 0 1 1-1.47-.297c.186-.922.762-1.696 1.526-2.236c.796-.562 1.82-.89 2.919-.89c2.325 0 4.508 1.535 4.508 3.757c0 1.292-.768 2.376-1.834 3.029a.75.75 0 0 1-.784-1.28c.729-.446 1.118-1.093 1.118-1.749c0-1.099-1.182-2.256-3.008-2.256m0 5.265a.75.75 0 0 1 .75.75v1.502a.75.75 0 1 1-1.5 0V13.08a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15.638 11.326a.75.75 0 0 1-.258 1.029l-2.285 1.368a.75.75 0 1 1-.77-1.287l2.285-1.368a.75.75 0 0 1 1.028.258" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilQuestionCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilQuestionOffIcon],svg[pepicons-pencil-question-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 16.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill-rule="evenodd" d="M9.71 4.065c-.807 0-1.524.24-2.053.614c-.51.36-.825.826-.922 1.308a.75.75 0 1 1-1.47-.297c.186-.922.762-1.696 1.526-2.236c.796-.562 1.82-.89 2.919-.89c2.325 0 4.508 1.535 4.508 3.757c0 1.292-.768 2.376-1.834 3.029a.75.75 0 0 1-.784-1.28c.729-.446 1.118-1.093 1.118-1.749c0-1.099-1.182-2.256-3.008-2.256m0 5.265a.75.75 0 0 1 .75.75v1.502a.75.75 0 1 1-1.5 0V10.08a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.638 8.326a.75.75 0 0 1-.258 1.029l-2.285 1.368a.75.75 0 1 1-.77-1.287l2.285-1.368a.75.75 0 0 1 1.028.258" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilQuestionOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRadioIcon],svg[pepicons-pencil-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M15 7H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path><svg:path d="M10 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill-rule="evenodd" d="M14.447 1.474a.5.5 0 0 1-.223.67l-10 5a.5.5 0 1 1-.448-.894l10-5a.5.5 0 0 1 .671.224M11 10.65a.35.35 0 0 1 .35-.35h3.3a.35.35 0 1 1 0 .7h-3.3a.35.35 0 0 1-.35-.35m0 1.5a.35.35 0 0 1 .35-.35h3.3a.35.35 0 1 1 0 .7h-3.3a.35.35 0 0 1-.35-.35m0 1.5a.35.35 0 0 1 .35-.35h3.3a.35.35 0 1 1 0 .7h-3.3a.35.35 0 0 1-.35-.35" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilRadioIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRadioCircleIcon],svg[pepicons-pencil-radio-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M18 10H8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2M8 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path><svg:path d="M13 15a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill-rule="evenodd" d="M17.447 4.474a.5.5 0 0 1-.223.67l-10 5a.5.5 0 1 1-.448-.894l10-5a.5.5 0 0 1 .671.224M14 13.65a.35.35 0 0 1 .35-.35h3.3a.35.35 0 1 1 0 .7h-3.3a.35.35 0 0 1-.35-.35m0 1.5a.35.35 0 0 1 .35-.35h3.3a.35.35 0 1 1 0 .7h-3.3a.35.35 0 0 1-.35-.35m0 1.5a.35.35 0 0 1 .35-.35h3.3a.35.35 0 1 1 0 .7h-3.3a.35.35 0 0 1-.35-.35" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilRadioCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRadioCircleFilledIcon],svg[pepicons-pencil-radio-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilRadioCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M18 10H8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2M8 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path><svg:path d="M13 15a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill-rule="evenodd" d="M17.447 4.474a.5.5 0 0 1-.223.67l-10 5a.5.5 0 1 1-.448-.894l10-5a.5.5 0 0 1 .671.224M14 13.65a.35.35 0 0 1 .35-.35h3.3a.35.35 0 1 1 0 .7h-3.3a.35.35 0 0 1-.35-.35m0 1.5a.35.35 0 0 1 .35-.35h3.3a.35.35 0 1 1 0 .7h-3.3a.35.35 0 0 1-.35-.35m0 1.5a.35.35 0 0 1 .35-.35h3.3a.35.35 0 1 1 0 .7h-3.3a.35.35 0 0 1-.35-.35" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilRadioCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilRadioCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRadioCircleOffIcon],svg[pepicons-pencil-radio-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M18 10H8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2M8 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path><svg:path d="M13 15a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill-rule="evenodd" d="M17.447 4.474a.5.5 0 0 1-.223.67l-10 5a.5.5 0 1 1-.448-.894l10-5a.5.5 0 0 1 .671.224M14 13.65a.35.35 0 0 1 .35-.35h3.3a.35.35 0 1 1 0 .7h-3.3a.35.35 0 0 1-.35-.35m0 1.5a.35.35 0 0 1 .35-.35h3.3a.35.35 0 1 1 0 .7h-3.3a.35.35 0 0 1-.35-.35m0 1.5a.35.35 0 0 1 .35-.35h3.3a.35.35 0 1 1 0 .7h-3.3a.35.35 0 0 1-.35-.35" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilRadioCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRadioOffIcon],svg[pepicons-pencil-radio-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M15 7H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path><svg:path d="M10 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill-rule="evenodd" d="M14.447 1.474a.5.5 0 0 1-.223.67l-10 5a.5.5 0 1 1-.448-.894l10-5a.5.5 0 0 1 .671.224M11 10.65a.35.35 0 0 1 .35-.35h3.3a.35.35 0 1 1 0 .7h-3.3a.35.35 0 0 1-.35-.35m0 1.5a.35.35 0 0 1 .35-.35h3.3a.35.35 0 1 1 0 .7h-3.3a.35.35 0 0 1-.35-.35m0 1.5a.35.35 0 0 1 .35-.35h3.3a.35.35 0 1 1 0 .7h-3.3a.35.35 0 0 1-.35-.35" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilRadioOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRaiseHandIcon],svg[pepicons-pencil-raise-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.5 5.5a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-4 3a4 4 0 1 1 8 0a4 4 0 0 1-8 0"></svg:path><svg:path d="M2.5 4a2 2 0 1 1 4 0v3.272c0 1 .35 1.967.99 2.735l1.394 1.673a.5.5 0 0 1-.768.64l-1.394-1.673A5.27 5.27 0 0 1 5.5 7.272V4a1 1 0 0 0-2 0v3.75a4.5 4.5 0 0 0 .53 2.118l3.411 6.397a.5.5 0 0 1-.882.47l-3.412-6.397A5.5 5.5 0 0 1 2.5 7.75z"></svg:path><svg:path d="M8 12a.5.5 0 0 1 .5-.5H11a5.5 5.5 0 0 1 5.5 5.5v2a.5.5 0 0 1-1 0v-2a4.5 4.5 0 0 0-4.5-4.5H8.5A.5.5 0 0 1 8 12m-1 4a.5.5 0 0 1 .5.5V19a.5.5 0 0 1-1 0v-2.5A.5.5 0 0 1 7 16"></svg:path></svg:g>`,
})
export class PepiconsPencilRaiseHandIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRaiseHandCircleIcon],svg[pepicons-pencil-raise-hand-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14.5 8.5a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-4 3a4 4 0 1 1 8 0a4 4 0 0 1-8 0"></svg:path><svg:path d="M5.5 7a2 2 0 1 1 4 0v3.272c0 1 .35 1.967.99 2.735l1.394 1.673a.5.5 0 0 1-.768.64l-1.394-1.673A5.27 5.27 0 0 1 8.5 10.272V7a1 1 0 0 0-2 0v3.75a4.5 4.5 0 0 0 .53 2.118l3.411 6.397a.5.5 0 0 1-.882.47l-3.412-6.397A5.5 5.5 0 0 1 5.5 10.75z"></svg:path><svg:path d="M11 15a.5.5 0 0 1 .5-.5H14a5.5 5.5 0 0 1 5.5 5.5v2a.5.5 0 0 1-1 0v-2a4.5 4.5 0 0 0-4.5-4.5h-2.5a.5.5 0 0 1-.5-.5m-1 4a.5.5 0 0 1 .5.5V22a.5.5 0 0 1-1 0v-2.5a.5.5 0 0 1 .5-.5"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilRaiseHandCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRaiseHandCircleFilledIcon],svg[pepicons-pencil-raise-hand-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilRaiseHandCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14.5 8.5a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-4 3a4 4 0 1 1 8 0a4 4 0 0 1-8 0"></svg:path><svg:path d="M5.5 7a2 2 0 1 1 4 0v3.272c0 1 .35 1.967.99 2.735l1.394 1.673a.5.5 0 0 1-.768.64l-1.394-1.673A5.27 5.27 0 0 1 8.5 10.272V7a1 1 0 0 0-2 0v3.75a4.5 4.5 0 0 0 .53 2.118l3.411 6.397a.5.5 0 0 1-.882.47l-3.412-6.397A5.5 5.5 0 0 1 5.5 10.75z"></svg:path><svg:path d="M11 15a.5.5 0 0 1 .5-.5H14a5.5 5.5 0 0 1 5.5 5.5v2a.5.5 0 0 1-1 0v-2a4.5 4.5 0 0 0-4.5-4.5h-2.5a.5.5 0 0 1-.5-.5m-1 4a.5.5 0 0 1 .5.5V22a.5.5 0 0 1-1 0v-2.5a.5.5 0 0 1 .5-.5"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilRaiseHandCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilRaiseHandCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRaiseHandCircleOffIcon],svg[pepicons-pencil-raise-hand-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14.5 8.5a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-4 3a4 4 0 1 1 8 0a4 4 0 0 1-8 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.5 7a2 2 0 1 1 4 0v3.272c0 1 .35 1.967.99 2.735l1.394 1.673a.5.5 0 0 1-.768.64l-1.394-1.673A5.27 5.27 0 0 1 8.5 10.272V7a1 1 0 0 0-2 0v3.75a4.5 4.5 0 0 0 .53 2.118l3.411 6.397a.5.5 0 0 1-.882.47l-3.412-6.397A5.5 5.5 0 0 1 5.5 10.75z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M11 15a.5.5 0 0 1 .5-.5H14a5.5 5.5 0 0 1 5.5 5.5v2a.5.5 0 0 1-1 0v-2a4.5 4.5 0 0 0-4.5-4.5h-2.5a.5.5 0 0 1-.5-.5m-1 4a.5.5 0 0 1 .5.5V22a.5.5 0 0 1-1 0v-2.5a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilRaiseHandCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRaiseHandOffIcon],svg[pepicons-pencil-raise-hand-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11.5 5.5a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-4 3a4 4 0 1 1 8 0a4 4 0 0 1-8 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M2.5 4a2 2 0 1 1 4 0v3.272c0 1 .35 1.967.99 2.735l1.394 1.673a.5.5 0 0 1-.768.64l-1.394-1.673A5.27 5.27 0 0 1 5.5 7.272V4a1 1 0 0 0-2 0v3.75a4.5 4.5 0 0 0 .53 2.118l3.411 6.397a.5.5 0 0 1-.882.47l-3.412-6.397A5.5 5.5 0 0 1 2.5 7.75z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8 12a.5.5 0 0 1 .5-.5H11a5.5 5.5 0 0 1 5.5 5.5v2a.5.5 0 0 1-1 0v-2a4.5 4.5 0 0 0-4.5-4.5H8.5A.5.5 0 0 1 8 12m-1 4a.5.5 0 0 1 .5.5V19a.5.5 0 0 1-1 0v-2.5A.5.5 0 0 1 7 16" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilRaiseHandOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRepeatIcon],svg[pepicons-pencil-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14.667 2.946a.5.5 0 0 1 .702.087l1.547 1.982a.5.5 0 0 1-.789.615l-1.546-1.982a.5.5 0 0 1 .086-.702"></svg:path><svg:path d="M16.826 4.926a.5.5 0 0 0-.701.092l-1.547 2.018a.5.5 0 0 0 .794.608l1.546-2.017a.5.5 0 0 0-.092-.701"></svg:path><svg:path d="M2.975 9.323a4.5 4.5 0 0 1 4.5-4.5h8.5a.5.5 0 0 1 0 1h-8.5a3.5 3.5 0 0 0-3.5 3.5v1.337a.5.5 0 1 1-1 0zm2.354 7.731a.5.5 0 0 1-.702-.087l-1.546-1.982a.5.5 0 0 1 .788-.615l1.547 1.982a.5.5 0 0 1-.087.702"></svg:path><svg:path d="M3.17 15.074a.5.5 0 0 0 .702-.092l1.546-2.018a.5.5 0 1 0-.793-.608l-1.547 2.017a.5.5 0 0 0 .093.701"></svg:path><svg:path d="M17.022 10.677a4.5 4.5 0 0 1-4.5 4.5h-8.5a.5.5 0 0 1 0-1h8.5a3.5 3.5 0 0 0 3.5-3.5V9.34a.5.5 0 1 1 1 0z"></svg:path></svg:g>`,
})
export class PepiconsPencilRepeatIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRepeatCircleIcon],svg[pepicons-pencil-repeat-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17.667 5.946a.5.5 0 0 1 .702.087l1.547 1.982a.5.5 0 0 1-.789.615l-1.546-1.982a.5.5 0 0 1 .086-.702"></svg:path><svg:path d="M19.826 7.926a.5.5 0 0 0-.701.092l-1.547 2.018a.5.5 0 0 0 .794.608l1.546-2.017a.5.5 0 0 0-.092-.701"></svg:path><svg:path d="M5.975 12.323a4.5 4.5 0 0 1 4.5-4.5h8.5a.5.5 0 0 1 0 1h-8.5a3.5 3.5 0 0 0-3.5 3.5v1.337a.5.5 0 1 1-1 0zm2.354 7.731a.5.5 0 0 1-.702-.087l-1.546-1.982a.5.5 0 0 1 .788-.615l1.547 1.982a.5.5 0 0 1-.087.702"></svg:path><svg:path d="M6.17 18.074a.5.5 0 0 0 .702-.093l1.546-2.017a.5.5 0 1 0-.793-.608l-1.547 2.017a.5.5 0 0 0 .093.701"></svg:path><svg:path d="M20.022 13.677a4.5 4.5 0 0 1-4.5 4.5h-8.5a.5.5 0 0 1 0-1h8.5a3.5 3.5 0 0 0 3.5-3.5V12.34a.5.5 0 1 1 1 0z"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilRepeatCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRepeatCircleFilledIcon],svg[pepicons-pencil-repeat-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilRepeatCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17.667 5.946a.5.5 0 0 1 .702.087l1.547 1.982a.5.5 0 0 1-.789.615l-1.546-1.982a.5.5 0 0 1 .086-.702"></svg:path><svg:path d="M19.826 7.926a.5.5 0 0 0-.701.092l-1.547 2.018a.5.5 0 0 0 .794.608l1.546-2.017a.5.5 0 0 0-.092-.701"></svg:path><svg:path d="M5.975 12.323a4.5 4.5 0 0 1 4.5-4.5h8.5a.5.5 0 0 1 0 1h-8.5a3.5 3.5 0 0 0-3.5 3.5v1.337a.5.5 0 1 1-1 0zm2.354 7.731a.5.5 0 0 1-.702-.087l-1.546-1.982a.5.5 0 0 1 .788-.615l1.547 1.982a.5.5 0 0 1-.087.702"></svg:path><svg:path d="M6.17 18.074a.5.5 0 0 0 .702-.093l1.546-2.017a.5.5 0 1 0-.793-.608l-1.547 2.017a.5.5 0 0 0 .093.701"></svg:path><svg:path d="M20.022 13.677a4.5 4.5 0 0 1-4.5 4.5h-8.5a.5.5 0 0 1 0-1h8.5a3.5 3.5 0 0 0 3.5-3.5V12.34a.5.5 0 1 1 1 0z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilRepeatCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilRepeatCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRepeatCircleOffIcon],svg[pepicons-pencil-repeat-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M17.667 5.946a.5.5 0 0 1 .702.087l1.547 1.982a.5.5 0 0 1-.789.615l-1.546-1.982a.5.5 0 0 1 .086-.702" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M19.826 7.926a.5.5 0 0 0-.701.092l-1.547 2.018a.5.5 0 0 0 .794.608l1.546-2.017a.5.5 0 0 0-.092-.701" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.975 12.323a4.5 4.5 0 0 1 4.5-4.5h8.5a.5.5 0 0 1 0 1h-8.5a3.5 3.5 0 0 0-3.5 3.5v1.337a.5.5 0 1 1-1 0zm2.354 7.731a.5.5 0 0 1-.702-.087l-1.546-1.982a.5.5 0 0 1 .788-.615l1.547 1.982a.5.5 0 0 1-.087.702" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.17 18.074a.5.5 0 0 0 .702-.093l1.546-2.017a.5.5 0 1 0-.793-.608l-1.547 2.017a.5.5 0 0 0 .093.701" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M20.022 13.677a4.5 4.5 0 0 1-4.5 4.5h-8.5a.5.5 0 0 1 0-1h8.5a3.5 3.5 0 0 0 3.5-3.5V12.34a.5.5 0 1 1 1 0z" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilRepeatCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRepeatOffIcon],svg[pepicons-pencil-repeat-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14.667 2.946a.5.5 0 0 1 .702.087l1.547 1.982a.5.5 0 0 1-.789.615l-1.546-1.982a.5.5 0 0 1 .086-.702" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M16.826 4.926a.5.5 0 0 0-.701.092l-1.547 2.018a.5.5 0 0 0 .794.608l1.546-2.017a.5.5 0 0 0-.092-.701" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M2.975 9.323a4.5 4.5 0 0 1 4.5-4.5h8.5a.5.5 0 0 1 0 1h-8.5a3.5 3.5 0 0 0-3.5 3.5v1.337a.5.5 0 1 1-1 0zm2.354 7.731a.5.5 0 0 1-.702-.087l-1.546-1.982a.5.5 0 0 1 .788-.615l1.547 1.982a.5.5 0 0 1-.087.702" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3.17 15.074a.5.5 0 0 0 .702-.092l1.546-2.018a.5.5 0 1 0-.793-.608l-1.547 2.017a.5.5 0 0 0 .093.701" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17.022 10.677a4.5 4.5 0 0 1-4.5 4.5h-8.5a.5.5 0 0 1 0-1h8.5a3.5 3.5 0 0 0 3.5-3.5V9.34a.5.5 0 1 1 1 0z" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilRepeatOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRewindIcon],svg[pepicons-pencil-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.5 14.796L11.019 10L16.5 5.204zm-6.14-4.043a1 1 0 0 1 0-1.506l5.482-4.796c.646-.566 1.658-.106 1.658.753v9.592c0 .86-1.012 1.319-1.658.753z"></svg:path><svg:path d="M9.5 14.796L4.019 10L9.5 5.204zm-6.14-4.043a1 1 0 0 1 0-1.506l5.481-4.796c.647-.566 1.659-.106 1.659.753v9.592a1 1 0 0 1-1.659.753z"></svg:path></svg:g>`,
})
export class PepiconsPencilRewindIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRewindCircleIcon],svg[pepicons-pencil-rewind-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M19.5 17.796L14.019 13L19.5 8.204zm-6.14-4.043a1 1 0 0 1 0-1.506l5.482-4.796c.646-.566 1.658-.106 1.658.753v9.592c0 .86-1.012 1.319-1.658.753z"></svg:path><svg:path d="M12.5 17.796L7.019 13L12.5 8.204zm-6.14-4.043a1 1 0 0 1 0-1.506l5.481-4.796c.647-.566 1.659-.106 1.659.753v9.592a1 1 0 0 1-1.659.753z"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilRewindCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRewindCircleFilledIcon],svg[pepicons-pencil-rewind-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilRewindCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M19.5 17.796L14.019 13L19.5 8.204zm-6.14-4.043a1 1 0 0 1 0-1.506l5.482-4.796c.646-.566 1.658-.106 1.658.753v9.592c0 .86-1.012 1.319-1.658.753z"></svg:path><svg:path d="M12.5 17.796L7.019 13L12.5 8.204zm-6.14-4.043a1 1 0 0 1 0-1.506l5.481-4.796c.647-.566 1.659-.106 1.659.753v9.592a1 1 0 0 1-1.659.753z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilRewindCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilRewindCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRewindCircleOffIcon],svg[pepicons-pencil-rewind-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M19.5 17.796L14.019 13L19.5 8.204zm-6.14-4.043a1 1 0 0 1 0-1.506l5.482-4.796c.646-.566 1.658-.106 1.658.753v9.592c0 .86-1.012 1.319-1.658.753z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.5 17.796L7.019 13L12.5 8.204zm-6.14-4.043a1 1 0 0 1 0-1.506l5.481-4.796c.647-.566 1.659-.106 1.659.753v9.592a1 1 0 0 1-1.659.753z" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilRewindCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRewindOffIcon],svg[pepicons-pencil-rewind-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M16.5 14.796L11.019 10L16.5 5.204zm-6.14-4.043a1 1 0 0 1 0-1.506l5.482-4.796c.646-.566 1.658-.106 1.658.753v9.592c0 .86-1.012 1.319-1.658.753z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.5 14.796L4.019 10L9.5 5.204zm-6.14-4.043a1 1 0 0 1 0-1.506l5.481-4.796c.647-.566 1.659-.106 1.659.753v9.592a1 1 0 0 1-1.659.753z" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilRewindOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRewindTimeIcon],svg[pepicons-pencil-rewind-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.604 5.45a6.44 6.44 0 0 0-1.883 5.278a.5.5 0 0 1-.994.105a7.44 7.44 0 0 1 2.175-6.096c2.937-2.897 7.675-2.85 10.582.098s2.888 7.685-.05 10.582a7.43 7.43 0 0 1-5.097 2.142a7.5 7.5 0 0 1-2.14-.271a.5.5 0 0 1 .266-.964a6.5 6.5 0 0 0 1.856.235a6.42 6.42 0 0 0 4.413-1.854c2.541-2.506 2.562-6.61.04-9.168s-6.627-2.594-9.168-.088"></svg:path><svg:path d="M3.594 11.363a.5.5 0 0 1-.706.04l-1.72-1.53a.5.5 0 1 1 .664-.746l1.72 1.53a.5.5 0 0 1 .042.706"></svg:path><svg:path d="M2.82 11.3a.5.5 0 0 0 .7.1l2-1.5a.5.5 0 1 0-.6-.8l-2 1.5a.5.5 0 0 0-.1.7M10 6.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5"></svg:path><svg:path d="M13.5 10.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5"></svg:path></svg:g>`,
})
export class PepiconsPencilRewindTimeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRewindTimeCircleIcon],svg[pepicons-pencil-rewind-time-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.604 8.45a6.44 6.44 0 0 0-1.882 5.278a.5.5 0 0 1-.995.105a7.44 7.44 0 0 1 2.175-6.096c2.937-2.897 7.675-2.85 10.582.098s2.888 7.685-.05 10.582a7.43 7.43 0 0 1-5.097 2.142a7.5 7.5 0 0 1-2.14-.271a.5.5 0 0 1 .266-.964a6.5 6.5 0 0 0 1.856.235a6.42 6.42 0 0 0 4.413-1.854c2.541-2.506 2.562-6.61.04-9.168s-6.627-2.594-9.168-.088"></svg:path><svg:path d="M6.594 14.363a.5.5 0 0 1-.706.04l-1.72-1.53a.5.5 0 1 1 .664-.746l1.72 1.53a.5.5 0 0 1 .042.706"></svg:path><svg:path d="M5.82 14.3a.5.5 0 0 0 .7.1l2-1.5a.5.5 0 1 0-.6-.8l-2 1.5a.5.5 0 0 0-.1.7M13 9.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V10a.5.5 0 0 1 .5-.5"></svg:path><svg:path d="M16.5 13.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilRewindTimeCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRewindTimeCircleFilledIcon],svg[pepicons-pencil-rewind-time-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilRewindTimeCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.604 8.45a6.44 6.44 0 0 0-1.882 5.278a.5.5 0 0 1-.995.105a7.44 7.44 0 0 1 2.175-6.096c2.937-2.897 7.675-2.85 10.582.098s2.888 7.685-.05 10.582a7.43 7.43 0 0 1-5.097 2.142a7.5 7.5 0 0 1-2.14-.271a.5.5 0 0 1 .266-.964a6.5 6.5 0 0 0 1.856.235a6.42 6.42 0 0 0 4.413-1.854c2.541-2.506 2.562-6.61.04-9.168s-6.627-2.594-9.168-.088"></svg:path><svg:path d="M6.594 14.363a.5.5 0 0 1-.706.04l-1.72-1.53a.5.5 0 1 1 .664-.746l1.72 1.53a.5.5 0 0 1 .042.706"></svg:path><svg:path d="M5.82 14.3a.5.5 0 0 0 .7.1l2-1.5a.5.5 0 1 0-.6-.8l-2 1.5a.5.5 0 0 0-.1.7M13 9.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V10a.5.5 0 0 1 .5-.5"></svg:path><svg:path d="M16.5 13.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilRewindTimeCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilRewindTimeCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRewindTimeCircleOffIcon],svg[pepicons-pencil-rewind-time-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.604 8.45a6.44 6.44 0 0 0-1.882 5.278a.5.5 0 0 1-.995.105a7.44 7.44 0 0 1 2.175-6.096c2.937-2.897 7.675-2.85 10.582.098s2.888 7.685-.05 10.582a7.43 7.43 0 0 1-5.097 2.142a7.5 7.5 0 0 1-2.14-.271a.5.5 0 0 1 .266-.964a6.5 6.5 0 0 0 1.856.235a6.42 6.42 0 0 0 4.413-1.854c2.541-2.506 2.562-6.61.04-9.168s-6.627-2.594-9.168-.088"></svg:path><svg:path d="M6.594 14.363a.5.5 0 0 1-.706.04l-1.72-1.53a.5.5 0 1 1 .664-.746l1.72 1.53a.5.5 0 0 1 .042.706"></svg:path><svg:path d="M5.82 14.3a.5.5 0 0 0 .7.1l2-1.5a.5.5 0 1 0-.6-.8l-2 1.5a.5.5 0 0 0-.1.7M13 9.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V10a.5.5 0 0 1 .5-.5"></svg:path><svg:path d="M16.5 13.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5"></svg:path></svg:g><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilRewindTimeCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRewindTimeOffIcon],svg[pepicons-pencil-rewind-time-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.604 5.45a6.44 6.44 0 0 0-1.883 5.278a.5.5 0 0 1-.994.105a7.44 7.44 0 0 1 2.175-6.096c2.937-2.897 7.675-2.85 10.582.098s2.888 7.685-.05 10.582a7.43 7.43 0 0 1-5.097 2.142a7.5 7.5 0 0 1-2.14-.271a.5.5 0 0 1 .266-.964a6.5 6.5 0 0 0 1.856.235a6.42 6.42 0 0 0 4.413-1.854c2.541-2.506 2.562-6.61.04-9.168s-6.627-2.594-9.168-.088"></svg:path><svg:path d="M3.594 11.363a.5.5 0 0 1-.706.04l-1.72-1.53a.5.5 0 1 1 .664-.746l1.72 1.53a.5.5 0 0 1 .042.706"></svg:path><svg:path d="M2.82 11.3a.5.5 0 0 0 .7.1l2-1.5a.5.5 0 1 0-.6-.8l-2 1.5a.5.5 0 0 0-.1.7M10 6.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5"></svg:path><svg:path d="M13.5 10.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5"></svg:path></svg:g><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilRewindTimeOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRulerIcon],svg[pepicons-pencil-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.31 13.626a.5.5 0 0 0 0 .708l3.536 3.535a.5.5 0 0 0 .707 0L17.867 6.555a.5.5 0 0 0 0-.707l-3.536-3.535a.5.5 0 0 0-.707 0l-1.06 1.06l1.709 1.71a.5.5 0 1 1-.708.706L11.857 4.08l-1.415 1.415l.884.884a.5.5 0 0 1-.707.707l-.884-.884l-1.414 1.414l1.709 1.709a.5.5 0 1 1-.707.707L7.614 8.323L6.2 9.737l.884.884a.5.5 0 1 1-.707.707l-.884-.884l-1.415 1.415l1.71 1.709a.5.5 0 1 1-.708.707l-1.709-1.71zm-.706 1.415a1.5 1.5 0 0 1 0-2.122L12.917 1.606a1.5 1.5 0 0 1 2.122 0l3.535 3.535a1.5 1.5 0 0 1 0 2.121L7.26 18.576a1.5 1.5 0 0 1-2.12 0z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPencilRulerIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRulerCircleIcon],svg[pepicons-pencil-ruler-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.31 16.626a.5.5 0 0 0 0 .707l3.536 3.536a.5.5 0 0 0 .707 0L20.867 9.555a.5.5 0 0 0 0-.707l-3.536-3.535a.5.5 0 0 0-.707 0l-1.06 1.06l1.709 1.71a.5.5 0 1 1-.708.706L14.857 7.08l-1.415 1.415l.884.884a.5.5 0 0 1-.707.707l-.884-.884l-1.414 1.414l1.709 1.709a.5.5 0 1 1-.707.707l-1.709-1.709L9.2 12.737l.884.884a.5.5 0 1 1-.707.707l-.884-.884l-1.415 1.415l1.71 1.709a.5.5 0 1 1-.708.707l-1.709-1.71zm-.706 1.415a1.5 1.5 0 0 1 0-2.122L15.917 4.606a1.5 1.5 0 0 1 2.122 0l3.535 3.535a1.5 1.5 0 0 1 0 2.121L10.26 21.576a1.5 1.5 0 0 1-2.12 0z"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilRulerCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRulerCircleFilledIcon],svg[pepicons-pencil-ruler-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilRulerCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M5.31 16.626a.5.5 0 0 0 0 .707l3.536 3.536a.5.5 0 0 0 .707 0L20.867 9.555a.5.5 0 0 0 0-.707l-3.536-3.535a.5.5 0 0 0-.707 0l-1.06 1.06l1.709 1.71a.5.5 0 1 1-.708.706L14.857 7.08l-1.415 1.415l.884.884a.5.5 0 0 1-.707.707l-.884-.884l-1.414 1.414l1.709 1.709a.5.5 0 1 1-.707.707l-1.709-1.709L9.2 12.737l.884.884a.5.5 0 1 1-.707.707l-.884-.884l-1.415 1.415l1.71 1.709a.5.5 0 1 1-.708.707l-1.709-1.71zm-.706 1.415a1.5 1.5 0 0 1 0-2.122L15.917 4.606a1.5 1.5 0 0 1 2.122 0l3.535 3.535a1.5 1.5 0 0 1 0 2.121L10.26 21.576a1.5 1.5 0 0 1-2.12 0z" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilRulerCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilRulerCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRulerCircleOffIcon],svg[pepicons-pencil-ruler-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.31 16.626a.5.5 0 0 0 0 .707l3.536 3.536a.5.5 0 0 0 .707 0L20.867 9.555a.5.5 0 0 0 0-.707l-3.536-3.535a.5.5 0 0 0-.707 0l-1.06 1.06l1.709 1.71a.5.5 0 1 1-.708.706L14.857 7.08l-1.415 1.415l.884.884a.5.5 0 0 1-.707.707l-.884-.884l-1.414 1.414l1.709 1.709a.5.5 0 1 1-.707.707l-1.709-1.709L9.2 12.737l.884.884a.5.5 0 1 1-.707.707l-.884-.884l-1.415 1.415l1.71 1.709a.5.5 0 1 1-.708.707l-1.709-1.71zm-.706 1.415a1.5 1.5 0 0 1 0-2.122L15.917 4.606a1.5 1.5 0 0 1 2.122 0l3.535 3.535a1.5 1.5 0 0 1 0 2.121L10.26 21.576a1.5 1.5 0 0 1-2.12 0z" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilRulerCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRulerOffIcon],svg[pepicons-pencil-ruler-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M2.31 13.626a.5.5 0 0 0 0 .708l3.536 3.535a.5.5 0 0 0 .707 0L17.867 6.555a.5.5 0 0 0 0-.707l-3.536-3.535a.5.5 0 0 0-.707 0l-1.06 1.06l1.709 1.71a.5.5 0 1 1-.708.706L11.857 4.08l-1.415 1.415l.884.884a.5.5 0 0 1-.707.707l-.884-.884l-1.414 1.414l1.709 1.709a.5.5 0 1 1-.707.707L7.614 8.323L6.2 9.737l.884.884a.5.5 0 1 1-.707.707l-.884-.884l-1.415 1.415l1.71 1.709a.5.5 0 1 1-.708.707l-1.709-1.71zm-.706 1.415a1.5 1.5 0 0 1 0-2.122L12.917 1.606a1.5 1.5 0 0 1 2.122 0l3.535 3.535a1.5 1.5 0 0 1 0 2.121L7.26 18.576a1.5 1.5 0 0 1-2.12 0z" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilRulerOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilScissorsIcon],svg[pepicons-pencil-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.5 8.5a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4" clip-rule="evenodd"></svg:path><svg:path d="M16.978 15.782a.5.5 0 0 1-.697.718L7.405 7.873a.5.5 0 1 1 .697-.717z"></svg:path><svg:path d="M7.146 13.146a.5.5 0 0 0 .708.708l9-9a.5.5 0 0 0-.708-.708z"></svg:path></svg:g>`,
})
export class PepiconsPencilScissorsIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilScissorsCircleIcon],svg[pepicons-pencil-scissors-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.5 11.5a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4" clip-rule="evenodd"></svg:path><svg:path d="M19.978 18.782a.5.5 0 0 1-.697.718l-8.876-8.627a.5.5 0 1 1 .697-.717z"></svg:path><svg:path d="M10.146 16.146a.5.5 0 0 0 .708.708l9-9a.5.5 0 0 0-.708-.708z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilScissorsCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilScissorsCircleFilledIcon],svg[pepicons-pencil-scissors-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilScissorsCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M8.5 11.5a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4" clip-rule="evenodd"></svg:path><svg:path d="M19.978 18.782a.5.5 0 0 1-.697.718l-8.876-8.627a.5.5 0 1 1 .697-.717z"></svg:path><svg:path d="M10.146 16.146a.5.5 0 0 0 .708.708l9-9a.5.5 0 0 0-.708-.708z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilScissorsCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilScissorsCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilScissorsCircleOffIcon],svg[pepicons-pencil-scissors-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.5 11.5a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4" clip-rule="evenodd"></svg:path><svg:path d="M19.978 18.782a.5.5 0 0 1-.697.718l-8.876-8.627a.5.5 0 1 1 .697-.717z"></svg:path><svg:path d="M10.146 16.146a.5.5 0 0 0 .708.708l9-9a.5.5 0 0 0-.708-.708z"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilScissorsCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilScissorsOffIcon],svg[pepicons-pencil-scissors-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.5 8.5a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4" clip-rule="evenodd"></svg:path><svg:path d="M16.978 15.782a.5.5 0 0 1-.697.718L7.405 7.873a.5.5 0 1 1 .697-.717z"></svg:path><svg:path d="M7.146 13.146a.5.5 0 0 0 .708.708l9-9a.5.5 0 0 0-.708-.708z"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilScissorsOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilSeedlingIcon],svg[pepicons-pencil-seedling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.8 10.802a.5.5 0 0 1 .5.5v5.5a.5.5 0 1 1-1 0v-5.5a.5.5 0 0 1 .5-.5"></svg:path><svg:path d="M2.39 6.445c.4 1.25 1.18 2.509 2.165 3.237c1.146.848 2.18 1.122 3.018 1.067A2.83 2.83 0 0 0 9.57 9.76c.415-.487.541-1.212.319-2.05c-.222-.836-.783-1.735-1.65-2.473c-.874-.745-2.163-1.413-3.357-1.735c-.596-.16-1.14-.227-1.582-.19s-.724.174-.884.361c-.172.202-.293.553-.305 1.06c-.012.498.083 1.092.28 1.712M1.11 4.71c.015-.625.164-1.238.544-1.684c.392-.46.969-.659 1.561-.71c.595-.05 1.262.043 1.926.222c1.327.357 2.751 1.091 3.746 1.938c1.002.854 1.687 1.922 1.967 2.978c.28 1.054.164 2.148-.524 2.956a3.83 3.83 0 0 1-2.692 1.338c-1.12.073-2.382-.302-3.678-1.26C2.763 9.6 1.882 8.14 1.438 6.748c-.223-.7-.343-1.406-.328-2.04"></svg:path><svg:path d="M17.342 9.327c-.489 1.123-1.301 2.209-2.262 2.738c-2.217 1.22-3.778.29-4.318-.571c-.227-.363-.277-1.034.01-1.82c.28-.765.85-1.549 1.707-2.086c.883-.552 2.115-.937 3.206-1.05c.545-.055 1.027-.04 1.396.04c.382.083.559.217.625.322c.079.126.14.412.084.883c-.054.45-.206.989-.448 1.544m1.44-1.425c.066-.544.034-1.113-.228-1.533c-.276-.44-.77-.661-1.261-.768c-.505-.11-1.1-.12-1.71-.057c-1.218.125-2.602.55-3.634 1.197a5.2 5.2 0 0 0-2.116 2.59c-.343.939-.374 1.966.081 2.693c.826 1.319 2.973 2.389 5.648.917c1.224-.674 2.158-1.977 2.697-3.215c.273-.625.456-1.259.524-1.824"></svg:path><svg:path d="M8.91 10.615a12 12 0 0 0-2.19-2.123L6 7.952a.5.5 0 1 1 .6-.8l.72.54C8.202 8.355 9 9.127 9.69 9.99a.5.5 0 0 1-.78.625m2.244 1.791a12 12 0 0 1 2.11-1.68l.801-.5a.5.5 0 1 0-.53-.848l-.8.5a13 13 0 0 0-2.288 1.82a.5.5 0 0 0 .707.708"></svg:path></svg:g>`,
})
export class PepiconsPencilSeedlingIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilSeedlingCircleIcon],svg[pepicons-pencil-seedling-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.8 13.802a.5.5 0 0 1 .5.5v5.5a.5.5 0 1 1-1 0v-5.5a.5.5 0 0 1 .5-.5"></svg:path><svg:path d="M5.39 9.445c.4 1.25 1.18 2.509 2.165 3.237c1.146.848 2.18 1.122 3.018 1.067a2.83 2.83 0 0 0 1.996-.989c.415-.487.541-1.212.319-2.05c-.222-.836-.783-1.735-1.65-2.473c-.874-.745-2.163-1.413-3.357-1.735c-.596-.16-1.14-.227-1.582-.19s-.724.174-.884.361c-.172.202-.293.553-.305 1.06c-.012.498.083 1.092.28 1.712M4.11 7.71c.015-.625.164-1.238.544-1.684c.392-.46.969-.659 1.561-.71c.595-.05 1.262.043 1.926.222c1.327.357 2.751 1.091 3.746 1.938c1.002.854 1.687 1.922 1.967 2.978c.28 1.054.164 2.148-.524 2.956a3.83 3.83 0 0 1-2.692 1.338c-1.12.073-2.382-.302-3.678-1.26c-1.197-.886-2.078-2.347-2.522-3.738c-.223-.7-.343-1.406-.328-2.04"></svg:path><svg:path d="M20.342 12.327c-.489 1.123-1.301 2.209-2.262 2.738c-2.217 1.22-3.778.29-4.318-.571c-.227-.363-.277-1.034.01-1.82c.28-.765.85-1.549 1.707-2.086c.883-.552 2.115-.937 3.206-1.05c.545-.055 1.027-.04 1.396.04c.382.083.559.217.625.322c.079.126.14.412.084.883c-.054.45-.206.989-.448 1.544m1.44-1.425c.066-.544.034-1.113-.228-1.533c-.276-.44-.77-.661-1.261-.768c-.505-.11-1.1-.12-1.71-.057c-1.218.125-2.602.55-3.634 1.197a5.2 5.2 0 0 0-2.116 2.59c-.343.939-.374 1.966.081 2.693c.826 1.319 2.973 2.389 5.648.917c1.224-.674 2.158-1.977 2.697-3.215c.273-.625.456-1.259.524-1.824"></svg:path><svg:path d="M11.91 13.615a12 12 0 0 0-2.19-2.123l-.72-.54a.5.5 0 1 1 .6-.8l.72.54c.883.663 1.68 1.435 2.37 2.298a.5.5 0 0 1-.78.625m2.244 1.791a12 12 0 0 1 2.11-1.68l.801-.5a.5.5 0 1 0-.53-.848l-.8.5a13 13 0 0 0-2.288 1.82a.5.5 0 0 0 .707.708"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilSeedlingCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilSeedlingCircleFilledIcon],svg[pepicons-pencil-seedling-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilSeedlingCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.8 13.802a.5.5 0 0 1 .5.5v5.5a.5.5 0 1 1-1 0v-5.5a.5.5 0 0 1 .5-.5"></svg:path><svg:path d="M5.39 9.445c.4 1.25 1.18 2.509 2.165 3.237c1.146.848 2.18 1.122 3.018 1.067a2.83 2.83 0 0 0 1.996-.989c.415-.487.541-1.212.319-2.05c-.222-.836-.783-1.735-1.65-2.473c-.874-.745-2.163-1.413-3.357-1.735c-.596-.16-1.14-.227-1.582-.19s-.724.174-.884.361c-.172.202-.293.553-.305 1.06c-.012.498.083 1.092.28 1.712M4.11 7.71c.015-.625.164-1.238.544-1.684c.392-.46.969-.659 1.561-.71c.595-.05 1.262.043 1.926.222c1.327.357 2.751 1.091 3.746 1.938c1.002.854 1.687 1.922 1.967 2.978c.28 1.054.164 2.148-.524 2.956a3.83 3.83 0 0 1-2.692 1.338c-1.12.073-2.382-.302-3.678-1.26c-1.197-.886-2.078-2.347-2.522-3.738c-.223-.7-.343-1.406-.328-2.04"></svg:path><svg:path d="M20.342 12.327c-.489 1.123-1.301 2.209-2.262 2.738c-2.217 1.22-3.778.29-4.318-.571c-.227-.363-.277-1.034.01-1.82c.28-.765.85-1.549 1.707-2.086c.883-.552 2.115-.937 3.206-1.05c.545-.055 1.027-.04 1.396.04c.382.083.559.217.625.322c.079.126.14.412.084.883c-.054.45-.206.989-.448 1.544m1.44-1.425c.066-.544.034-1.113-.228-1.533c-.276-.44-.77-.661-1.261-.768c-.505-.11-1.1-.12-1.71-.057c-1.218.125-2.602.55-3.634 1.197a5.2 5.2 0 0 0-2.116 2.59c-.343.939-.374 1.966.081 2.693c.826 1.319 2.973 2.389 5.648.917c1.224-.674 2.158-1.977 2.697-3.215c.273-.625.456-1.259.524-1.824"></svg:path><svg:path d="M11.91 13.615a12 12 0 0 0-2.19-2.123l-.72-.54a.5.5 0 1 1 .6-.8l.72.54c.883.663 1.68 1.435 2.37 2.298a.5.5 0 0 1-.78.625m2.244 1.791a12 12 0 0 1 2.11-1.68l.801-.5a.5.5 0 1 0-.53-.848l-.8.5a13 13 0 0 0-2.288 1.82a.5.5 0 0 0 .707.708"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilSeedlingCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilSeedlingCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilSeedlingCircleOffIcon],svg[pepicons-pencil-seedling-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.8 13.802a.5.5 0 0 1 .5.5v5.5a.5.5 0 1 1-1 0v-5.5a.5.5 0 0 1 .5-.5"></svg:path><svg:path d="M5.39 9.445c.4 1.25 1.18 2.509 2.165 3.237c1.146.848 2.18 1.122 3.018 1.067a2.83 2.83 0 0 0 1.996-.989c.415-.487.541-1.212.319-2.05c-.222-.836-.783-1.735-1.65-2.473c-.874-.745-2.163-1.413-3.357-1.735c-.596-.16-1.14-.227-1.582-.19s-.724.174-.884.361c-.172.202-.293.553-.305 1.06c-.012.498.083 1.092.28 1.712M4.11 7.71c.015-.625.164-1.238.544-1.684c.392-.46.969-.659 1.561-.71c.595-.05 1.262.043 1.926.222c1.327.357 2.751 1.091 3.746 1.938c1.002.854 1.687 1.922 1.967 2.978c.28 1.054.164 2.148-.524 2.956a3.83 3.83 0 0 1-2.692 1.338c-1.12.073-2.382-.302-3.678-1.26c-1.197-.886-2.078-2.347-2.522-3.738c-.223-.7-.343-1.406-.328-2.04"></svg:path><svg:path d="M20.342 12.327c-.489 1.123-1.301 2.209-2.262 2.738c-2.217 1.22-3.778.29-4.318-.571c-.227-.363-.277-1.034.01-1.82c.28-.765.85-1.549 1.707-2.086c.883-.552 2.115-.937 3.206-1.05c.545-.055 1.027-.04 1.396.04c.382.083.559.217.625.322c.079.126.14.412.084.883c-.054.45-.206.989-.448 1.544m1.44-1.425c.066-.544.034-1.113-.228-1.533c-.276-.44-.77-.661-1.261-.768c-.505-.11-1.1-.12-1.71-.057c-1.218.125-2.602.55-3.634 1.197a5.2 5.2 0 0 0-2.116 2.59c-.343.939-.374 1.966.081 2.693c.826 1.319 2.973 2.389 5.648.917c1.224-.674 2.158-1.977 2.697-3.215c.273-.625.456-1.259.524-1.824"></svg:path><svg:path d="M11.91 13.615a12 12 0 0 0-2.19-2.123l-.72-.54a.5.5 0 1 1 .6-.8l.72.54c.883.663 1.68 1.435 2.37 2.298a.5.5 0 0 1-.78.625m2.244 1.791a12 12 0 0 1 2.11-1.68l.801-.5a.5.5 0 1 0-.53-.848l-.8.5a13 13 0 0 0-2.288 1.82a.5.5 0 0 0 .707.708"></svg:path></svg:g><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilSeedlingCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilSeedlingOffIcon],svg[pepicons-pencil-seedling-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.8 10.802a.5.5 0 0 1 .5.5v5.5a.5.5 0 1 1-1 0v-5.5a.5.5 0 0 1 .5-.5"></svg:path><svg:path d="M2.39 6.445c.4 1.25 1.18 2.509 2.165 3.237c1.146.848 2.18 1.122 3.018 1.067A2.83 2.83 0 0 0 9.57 9.76c.415-.487.541-1.212.319-2.05c-.222-.836-.783-1.735-1.65-2.473c-.874-.745-2.163-1.413-3.357-1.735c-.596-.16-1.14-.227-1.582-.19s-.724.174-.884.361c-.172.202-.293.553-.305 1.06c-.012.498.083 1.092.28 1.712M1.11 4.71c.015-.625.164-1.238.544-1.684c.392-.46.969-.659 1.561-.71c.595-.05 1.262.043 1.926.222c1.327.357 2.751 1.091 3.746 1.938c1.002.854 1.687 1.922 1.967 2.978c.28 1.054.164 2.148-.524 2.956a3.83 3.83 0 0 1-2.692 1.338c-1.12.073-2.382-.302-3.678-1.26C2.763 9.6 1.882 8.14 1.438 6.748c-.223-.7-.343-1.406-.328-2.04"></svg:path><svg:path d="M17.342 9.327c-.489 1.123-1.301 2.209-2.262 2.738c-2.217 1.22-3.778.29-4.318-.571c-.227-.363-.277-1.034.01-1.82c.28-.765.85-1.549 1.707-2.086c.883-.552 2.115-.937 3.206-1.05c.545-.055 1.027-.04 1.396.04c.382.083.559.217.625.322c.079.126.14.412.084.883c-.054.45-.206.989-.448 1.544m1.44-1.425c.066-.544.034-1.113-.228-1.533c-.276-.44-.77-.661-1.261-.768c-.505-.11-1.1-.12-1.71-.057c-1.218.125-2.602.55-3.634 1.197a5.2 5.2 0 0 0-2.116 2.59c-.343.939-.374 1.966.081 2.693c.826 1.319 2.973 2.389 5.648.917c1.224-.674 2.158-1.977 2.697-3.215c.273-.625.456-1.259.524-1.824"></svg:path><svg:path d="M8.91 10.615a12 12 0 0 0-2.19-2.123L6 7.952a.5.5 0 1 1 .6-.8l.72.54C8.202 8.355 9 9.127 9.69 9.99a.5.5 0 0 1-.78.625m2.244 1.791a12 12 0 0 1 2.11-1.68l.801-.5a.5.5 0 1 0-.53-.848l-.8.5a13 13 0 0 0-2.288 1.82a.5.5 0 0 0 .707.708"></svg:path></svg:g><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilSeedlingOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilShareAndroidIcon],svg[pepicons-pencil-share-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5 12.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9-1a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m0 14a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3" clip-rule="evenodd"></svg:path><svg:path d="m6.754 9.18l-.508-.86l5.5-3.25l.508.86zM12 14.878l.479-.878l-5.5-3l-.479.878z"></svg:path></svg:g>`,
})
export class PepiconsPencilShareAndroidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilShareAndroidCircleIcon],svg[pepicons-pencil-share-android-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8 15.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9-1a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m0 14a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3" clip-rule="evenodd"></svg:path><svg:path d="m9.754 12.18l-.508-.86l5.5-3.25l.508.86zM15 17.878l.479-.878l-5.5-3l-.479.878z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilShareAndroidCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilShareAndroidCircleFilledIcon],svg[pepicons-pencil-share-android-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilShareAndroidCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M8 15.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9-1a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m0 14a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3" clip-rule="evenodd"></svg:path><svg:path d="m9.754 12.18l-.508-.86l5.5-3.25l.508.86zM15 17.878l.479-.878l-5.5-3l-.479.878z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilShareAndroidCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilShareAndroidCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilShareAndroidCircleOffIcon],svg[pepicons-pencil-share-android-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8 15.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9-1a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m0 14a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3" clip-rule="evenodd"></svg:path><svg:path d="m9.754 12.18l-.508-.86l5.5-3.25l.508.86zM15 17.878l.479-.878l-5.5-3l-.479.878z"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilShareAndroidCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilShareAndroidOffIcon],svg[pepicons-pencil-share-android-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5 12.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9-1a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m0 14a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3" clip-rule="evenodd"></svg:path><svg:path d="m6.754 9.18l-.508-.86l5.5-3.25l.508.86zM12 14.878l.479-.878l-5.5-3l-.479.878z"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilShareAndroidOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilShareIosIcon],svg[pepicons-pencil-share-ios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.998 2.5a.5.5 0 1 1 1 0L11 13a.5.5 0 1 1-1 0z"></svg:path><svg:path d="M10.82 2.884a.5.5 0 0 0-.64-.768l-3 2.5a.5.5 0 1 0 .64.768z"></svg:path><svg:path d="M10.18 2.884a.5.5 0 1 1 .64-.768l3 2.5a.5.5 0 0 1-.64.768zM13.248 9a.5.5 0 0 1 0-1h.917c1.271 0 2.333.891 2.333 2.039v6.923c0 1.147-1.062 2.038-2.333 2.038H6.832c-1.271 0-2.334-.891-2.334-2.038v-6.923C4.498 8.89 5.561 8 6.832 8h.916a.5.5 0 0 1 0 1h-.916c-.754 0-1.334.486-1.334 1.039v6.923c0 .552.58 1.038 1.334 1.038h7.333c.754 0 1.333-.486 1.333-1.038v-6.923c0-.553-.58-1.039-1.333-1.039z"></svg:path></svg:g>`,
})
export class PepiconsPencilShareIosIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilShareIosCircleIcon],svg[pepicons-pencil-share-ios-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.998 5.5a.5.5 0 1 1 1 0L14 16a.5.5 0 1 1-1 0z"></svg:path><svg:path d="M13.82 5.884a.5.5 0 0 0-.64-.768l-3 2.5a.5.5 0 1 0 .64.768z"></svg:path><svg:path d="M13.18 5.884a.5.5 0 1 1 .64-.768l3 2.5a.5.5 0 0 1-.64.768zM16.248 12a.5.5 0 0 1 0-1h.917c1.271 0 2.333.891 2.333 2.039v6.923c0 1.147-1.062 2.038-2.333 2.038H9.832c-1.271 0-2.334-.891-2.334-2.038v-6.923C7.498 11.89 8.561 11 9.832 11h.916a.5.5 0 0 1 0 1h-.916c-.754 0-1.334.486-1.334 1.039v6.923c0 .552.58 1.038 1.334 1.038h7.333c.754 0 1.333-.486 1.333-1.038v-6.923c0-.553-.58-1.039-1.333-1.039z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilShareIosCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilShareIosCircleFilledIcon],svg[pepicons-pencil-share-ios-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilShareIosCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M12.998 5.5a.5.5 0 1 1 1 0L14 16a.5.5 0 1 1-1 0z"></svg:path><svg:path d="M13.82 5.884a.5.5 0 0 0-.64-.768l-3 2.5a.5.5 0 1 0 .64.768z"></svg:path><svg:path d="M13.18 5.884a.5.5 0 1 1 .64-.768l3 2.5a.5.5 0 0 1-.64.768zM16.248 12a.5.5 0 0 1 0-1h.917c1.271 0 2.333.891 2.333 2.039v6.923c0 1.147-1.062 2.038-2.333 2.038H9.832c-1.271 0-2.334-.891-2.334-2.038v-6.923C7.498 11.89 8.561 11 9.832 11h.916a.5.5 0 0 1 0 1h-.916c-.754 0-1.334.486-1.334 1.039v6.923c0 .552.58 1.038 1.334 1.038h7.333c.754 0 1.333-.486 1.333-1.038v-6.923c0-.553-.58-1.039-1.333-1.039z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilShareIosCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilShareIosCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilShareIosCircleOffIcon],svg[pepicons-pencil-share-ios-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.998 5.5a.5.5 0 1 1 1 0L14 16a.5.5 0 1 1-1 0z"></svg:path><svg:path d="M13.82 5.884a.5.5 0 0 0-.64-.768l-3 2.5a.5.5 0 1 0 .64.768z"></svg:path><svg:path d="M13.18 5.884a.5.5 0 1 1 .64-.768l3 2.5a.5.5 0 0 1-.64.768zM16.248 12a.5.5 0 0 1 0-1h.917c1.271 0 2.333.891 2.333 2.039v6.923c0 1.147-1.062 2.038-2.333 2.038H9.832c-1.271 0-2.334-.891-2.334-2.038v-6.923C7.498 11.89 8.561 11 9.832 11h.916a.5.5 0 0 1 0 1h-.916c-.754 0-1.334.486-1.334 1.039v6.923c0 .552.58 1.038 1.334 1.038h7.333c.754 0 1.333-.486 1.333-1.038v-6.923c0-.553-.58-1.039-1.333-1.039z"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilShareIosCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilShareIosOffIcon],svg[pepicons-pencil-share-ios-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.998 2.5a.5.5 0 1 1 1 0L11 13a.5.5 0 1 1-1 0z"></svg:path><svg:path d="M10.82 2.884a.5.5 0 0 0-.64-.768l-3 2.5a.5.5 0 1 0 .64.768z"></svg:path><svg:path d="M10.18 2.884a.5.5 0 1 1 .64-.768l3 2.5a.5.5 0 0 1-.64.768zM13.248 9a.5.5 0 0 1 0-1h.917c1.271 0 2.333.891 2.333 2.039v6.923c0 1.147-1.062 2.038-2.333 2.038H6.832c-1.271 0-2.334-.891-2.334-2.038v-6.923C4.498 8.89 5.561 8 6.832 8h.916a.5.5 0 0 1 0 1h-.916c-.754 0-1.334.486-1.334 1.039v6.923c0 .552.58 1.038 1.334 1.038h7.333c.754 0 1.333-.486 1.333-1.038v-6.923c0-.553-.58-1.039-1.333-1.039z"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilShareIosOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilShieldIcon],svg[pepicons-pencil-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.558 2.332a3.5 3.5 0 0 0-3.115 0L4.807 4.14C3.707 4.686 2.99 5.75 3 6.935c.016 1.776.207 4.132.949 5.688c.824 1.728 2.8 3.456 4.368 4.625c1.007.75 2.357.75 3.364 0c1.567-1.169 3.544-2.897 4.368-4.626c.742-1.555.933-3.91.949-5.687c.01-1.184-.705-2.25-1.806-2.796zm-3.56-.895a4.5 4.5 0 0 1 4.004 0l3.636 1.806c1.402.697 2.375 2.09 2.36 3.7c-.015 1.783-.2 4.337-1.045 6.11c-.94 1.972-3.103 3.826-4.673 4.997a3.794 3.794 0 0 1-4.56 0c-1.57-1.171-3.733-3.025-4.673-4.997C2.2 11.28 2.017 8.726 2 6.943c-.014-1.61.96-3.003 2.361-3.7z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPencilShieldIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilShieldCheckIcon],svg[pepicons-pencil-shield-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.558 2.332a3.5 3.5 0 0 0-3.115 0L4.807 4.14C3.707 4.686 2.99 5.75 3 6.935c.016 1.776.207 4.132.949 5.688c.824 1.728 2.8 3.456 4.368 4.625c1.007.75 2.357.75 3.364 0c1.567-1.169 3.544-2.897 4.368-4.626c.742-1.555.933-3.91.949-5.687c.01-1.184-.705-2.25-1.806-2.796zm-3.56-.895a4.5 4.5 0 0 1 4.004 0l3.636 1.806c1.402.697 2.375 2.09 2.36 3.7c-.015 1.783-.2 4.337-1.045 6.11c-.94 1.972-3.103 3.826-4.673 4.997a3.794 3.794 0 0 1-4.56 0c-1.57-1.171-3.733-3.025-4.673-4.997C2.2 11.28 2.017 8.726 2 6.943c-.014-1.61.96-3.003 2.361-3.7z"></svg:path><svg:path d="M12.795 7.884c.212.178.24.494.065.707l-1.78 2.155a1.486 1.486 0 0 1-2.205.097l-1.208-1.22a.505.505 0 0 1-.001-.71a.495.495 0 0 1 .704.002l1.209 1.22c.207.21.548.194.735-.032l1.78-2.156a.495.495 0 0 1 .7-.063"></svg:path></svg:g>`,
})
export class PepiconsPencilShieldCheckIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilShieldCheckCircleIcon],svg[pepicons-pencil-shield-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14.558 5.332a3.5 3.5 0 0 0-3.115 0L7.807 7.14C6.707 7.686 5.99 8.75 6 9.935c.016 1.776.207 4.132.949 5.688c.824 1.728 2.8 3.456 4.368 4.625c1.007.75 2.357.75 3.364 0c1.567-1.169 3.544-2.897 4.368-4.626c.742-1.555.933-3.91.949-5.687c.01-1.184-.705-2.25-1.806-2.796zm-3.56-.895a4.5 4.5 0 0 1 4.005 0l3.635 1.806c1.402.697 2.375 2.09 2.36 3.7c-.015 1.783-.2 4.337-1.045 6.11c-.94 1.972-3.103 3.826-4.673 4.997a3.794 3.794 0 0 1-4.56 0c-1.57-1.171-3.733-3.025-4.673-4.997C5.2 14.28 5.017 11.726 5 9.943c-.014-1.61.96-3.003 2.361-3.7z"></svg:path><svg:path d="M15.795 10.884c.212.178.24.494.065.707l-1.78 2.155a1.486 1.486 0 0 1-2.205.097l-1.208-1.22a.505.505 0 0 1-.001-.71a.495.495 0 0 1 .704.002l1.209 1.22c.207.21.548.194.735-.032l1.78-2.156a.495.495 0 0 1 .7-.063"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilShieldCheckCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilShieldCheckCircleFilledIcon],svg[pepicons-pencil-shield-check-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilShieldCheckCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14.558 5.332a3.5 3.5 0 0 0-3.115 0L7.807 7.14C6.707 7.686 5.99 8.75 6 9.935c.016 1.776.207 4.132.949 5.688c.824 1.728 2.8 3.456 4.368 4.625c1.007.75 2.357.75 3.364 0c1.567-1.169 3.544-2.897 4.368-4.626c.742-1.555.933-3.91.949-5.687c.01-1.184-.705-2.25-1.806-2.796zm-3.56-.895a4.5 4.5 0 0 1 4.005 0l3.635 1.806c1.402.697 2.375 2.09 2.36 3.7c-.015 1.783-.2 4.337-1.045 6.11c-.94 1.972-3.103 3.826-4.673 4.997a3.794 3.794 0 0 1-4.56 0c-1.57-1.171-3.733-3.025-4.673-4.997C5.2 14.28 5.017 11.726 5 9.943c-.014-1.61.96-3.003 2.361-3.7z"></svg:path><svg:path d="M15.795 10.884c.212.178.24.494.065.707l-1.78 2.155a1.486 1.486 0 0 1-2.205.097l-1.208-1.22a.505.505 0 0 1-.001-.71a.495.495 0 0 1 .704.002l1.209 1.22c.207.21.548.194.735-.032l1.78-2.156a.495.495 0 0 1 .7-.063"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilShieldCheckCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilShieldCheckCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilShieldCheckCircleOffIcon],svg[pepicons-pencil-shield-check-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14.558 5.332a3.5 3.5 0 0 0-3.115 0L7.807 7.14C6.707 7.686 5.99 8.75 6 9.935c.016 1.776.207 4.132.949 5.688c.824 1.728 2.8 3.456 4.368 4.625c1.007.75 2.357.75 3.364 0c1.567-1.169 3.544-2.897 4.368-4.626c.742-1.555.933-3.91.949-5.687c.01-1.184-.705-2.25-1.806-2.796zm-3.56-.895a4.5 4.5 0 0 1 4.005 0l3.635 1.806c1.402.697 2.375 2.09 2.36 3.7c-.015 1.783-.2 4.337-1.045 6.11c-.94 1.972-3.103 3.826-4.673 4.997a3.794 3.794 0 0 1-4.56 0c-1.57-1.171-3.733-3.025-4.673-4.997C5.2 14.28 5.017 11.726 5 9.943c-.014-1.61.96-3.003 2.361-3.7z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15.795 10.884c.212.178.24.494.065.707l-1.78 2.155a1.486 1.486 0 0 1-2.205.097l-1.208-1.22a.505.505 0 0 1-.001-.71a.495.495 0 0 1 .704.002l1.209 1.22c.207.21.548.194.735-.032l1.78-2.156a.495.495 0 0 1 .7-.063" clip-rule="evenodd"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilShieldCheckCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilShieldCheckOffIcon],svg[pepicons-pencil-shield-check-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11.558 2.332a3.5 3.5 0 0 0-3.115 0L4.807 4.14C3.707 4.686 2.99 5.75 3 6.935c.016 1.776.207 4.132.949 5.688c.824 1.728 2.8 3.456 4.368 4.625c1.007.75 2.357.75 3.364 0c1.567-1.169 3.544-2.897 4.368-4.626c.742-1.555.933-3.91.949-5.687c.01-1.184-.705-2.25-1.806-2.796zm-3.56-.895a4.5 4.5 0 0 1 4.004 0l3.636 1.806c1.402.697 2.375 2.09 2.36 3.7c-.015 1.783-.2 4.337-1.045 6.11c-.94 1.972-3.103 3.826-4.673 4.997a3.794 3.794 0 0 1-4.56 0c-1.57-1.171-3.733-3.025-4.673-4.997C2.2 11.28 2.017 8.726 2 6.943c-.014-1.61.96-3.003 2.361-3.7z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.795 7.884c.212.178.24.494.065.707l-1.78 2.155a1.486 1.486 0 0 1-2.205.097l-1.208-1.22a.505.505 0 0 1-.001-.71a.495.495 0 0 1 .704.002l1.209 1.22c.207.21.548.194.735-.032l1.78-2.156a.495.495 0 0 1 .7-.063" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilShieldCheckOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilShieldCheckeredIcon],svg[pepicons-pencil-shield-checkered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11.558 2.332a3.5 3.5 0 0 0-3.115 0L4.807 4.14C3.707 4.686 2.99 5.75 3 6.935c.016 1.776.207 4.132.949 5.688c.824 1.728 2.8 3.456 4.368 4.625c1.007.75 2.357.75 3.364 0c1.567-1.169 3.544-2.897 4.368-4.626c.742-1.555.933-3.91.949-5.687c.01-1.184-.705-2.25-1.806-2.796zm-3.56-.895a4.5 4.5 0 0 1 4.004 0l3.636 1.806c1.402.697 2.375 2.09 2.36 3.7c-.015 1.783-.2 4.337-1.045 6.11c-.94 1.972-3.103 3.826-4.673 4.997a3.794 3.794 0 0 1-4.56 0c-1.57-1.171-3.733-3.025-4.673-4.997C2.2 11.28 2.017 8.726 2 6.943c-.014-1.61.96-3.003 2.361-3.7z" clip-rule="evenodd"></svg:path><svg:path d="m9.505 1.5l3.467 1l3.963 2.368l.496 2.632l-.496 2.5h-6.93a.5.5 0 0 1-.5-.5z"></svg:path><svg:path d="M2.57 9.5H9.5a.5.5 0 0 1 .5.5v8.5L5.542 16L3.56 12.5z"></svg:path></svg:g>`,
})
export class PepiconsPencilShieldCheckeredIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilShieldCheckeredCircleIcon],svg[pepicons-pencil-shield-checkered-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14.558 5.332a3.5 3.5 0 0 0-3.115 0L7.807 7.14C6.707 7.686 5.99 8.75 6 9.935c.016 1.776.207 4.132.949 5.688c.824 1.728 2.8 3.456 4.368 4.625c1.007.75 2.357.75 3.364 0c1.567-1.169 3.544-2.897 4.368-4.626c.742-1.555.933-3.91.949-5.687c.01-1.184-.705-2.25-1.806-2.796zm-3.56-.895a4.5 4.5 0 0 1 4.005 0l3.635 1.806c1.402.697 2.375 2.09 2.36 3.7c-.015 1.783-.2 4.337-1.045 6.11c-.94 1.972-3.103 3.826-4.673 4.997a3.794 3.794 0 0 1-4.56 0c-1.57-1.171-3.733-3.025-4.673-4.997C5.2 14.28 5.017 11.726 5 9.943c-.014-1.61.96-3.003 2.361-3.7z" clip-rule="evenodd"></svg:path><svg:path d="m12.505 4.5l3.467 1l3.963 2.368l.496 2.632l-.496 2.5h-6.93a.5.5 0 0 1-.5-.5z"></svg:path><svg:path d="M5.57 12.5h6.93a.5.5 0 0 1 .5.5v8.5L8.542 19L6.56 15.5z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilShieldCheckeredCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilShieldCheckeredCircleFilledIcon],svg[pepicons-pencil-shield-checkered-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilShieldCheckeredCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M14.558 5.332a3.5 3.5 0 0 0-3.115 0L7.807 7.14C6.707 7.686 5.99 8.75 6 9.935c.016 1.776.207 4.132.949 5.688c.824 1.728 2.8 3.456 4.368 4.625c1.007.75 2.357.75 3.364 0c1.567-1.169 3.544-2.897 4.368-4.626c.742-1.555.933-3.91.949-5.687c.01-1.184-.705-2.25-1.806-2.796zm-3.56-.895a4.5 4.5 0 0 1 4.005 0l3.635 1.806c1.402.697 2.375 2.09 2.36 3.7c-.015 1.783-.2 4.337-1.045 6.11c-.94 1.972-3.103 3.826-4.673 4.997a3.794 3.794 0 0 1-4.56 0c-1.57-1.171-3.733-3.025-4.673-4.997C5.2 14.28 5.017 11.726 5 9.943c-.014-1.61.96-3.003 2.361-3.7z" clip-rule="evenodd"></svg:path><svg:path d="m12.505 4.5l3.467 1l3.963 2.368l.496 2.632l-.496 2.5h-6.93a.5.5 0 0 1-.5-.5z"></svg:path><svg:path d="M5.57 12.5h6.93a.5.5 0 0 1 .5.5v8.5L8.542 19L6.56 15.5z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilShieldCheckeredCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilShieldCheckeredCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilShieldCheckeredCircleOffIcon],svg[pepicons-pencil-shield-checkered-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14.558 5.332a3.5 3.5 0 0 0-3.115 0L7.807 7.14C6.707 7.686 5.99 8.75 6 9.935c.016 1.776.207 4.132.949 5.688c.824 1.728 2.8 3.456 4.368 4.625c1.007.75 2.357.75 3.364 0c1.567-1.169 3.544-2.897 4.368-4.626c.742-1.555.933-3.91.949-5.687c.01-1.184-.705-2.25-1.806-2.796zm-3.56-.895a4.5 4.5 0 0 1 4.005 0l3.635 1.806c1.402.697 2.375 2.09 2.36 3.7c-.015 1.783-.2 4.337-1.045 6.11c-.94 1.972-3.103 3.826-4.673 4.997a3.794 3.794 0 0 1-4.56 0c-1.57-1.171-3.733-3.025-4.673-4.997C5.2 14.28 5.017 11.726 5 9.943c-.014-1.61.96-3.003 2.361-3.7z" clip-rule="evenodd"></svg:path><svg:path d="m12.505 4.5l3.467 1l3.963 2.368l.496 2.632l-.496 2.5h-6.93a.5.5 0 0 1-.5-.5z"></svg:path><svg:path d="M5.57 12.5h6.93a.5.5 0 0 1 .5.5v8.5L8.542 19L6.56 15.5z"></svg:path><svg:path d="M4.15 4.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilShieldCheckeredCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
