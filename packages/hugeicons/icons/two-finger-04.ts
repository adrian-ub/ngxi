import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTwoFinger04Icon],svg[hugeicons-two-finger-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.708 14.022V9.47m0 0l.039-3.362c0-.961.63-1.592 1.402-1.625c.94-.04 1.605.564 1.605 1.525l.022 4.458l-.022-6.396c0-.96.645-1.57 1.494-1.57c.85 0 1.5.562 1.5 1.523v2.942l.012 3.544v-1q0-.093-.009-.185m-6.043.146l-1.84 1.84c-.494.568-1.078 1.24-1.263 1.577c-.39.709-.448 1.334-.217 2.071c.26.664.496 1.14.972 1.761c.348.454.686 1.1 1.038 1.552c.507.65.784 1.062 1.09 1.462q.05.065.097.119c.434.503 1.041.83 1.625 1.149l.224.122c.763.248 1.83.46 3.572.348c1.28 0 2.747.136 3.717-.398q.063-.035.13-.062l.3-.125c1.414-.706 2.4-2.21 2.548-3.78c.068-.715.041-1.496.042-2.282v-3.238c-.162-1.223-.796-2.013-3.233-2.059m-2.759-.203l-.006-.051m.006.051c.006.029-.01-.08-.006-.051m0 0c0-1.19 2.053-.992 2.765.254m.237 1.98v-1.144a1.8 1.8 0 0 0-.237-.836" color="currentColor"></svg:path>`,
})
export class HugeiconsTwoFinger04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
