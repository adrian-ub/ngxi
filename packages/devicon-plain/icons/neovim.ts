import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainNeovimIcon],svg[devicon-plain-neovim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88.963 0v70.438l22.906 34.445l4.658-5.059l-.185-72.312zM38.97.008L19.283 19.895l70.26 106.918l19.65-19.65ZM16.615 21.855l-5.142 5.192v72.988L39.496 128V55.93Zm-.152 1.592l22.02 32.791v69.32L12.487 99.616V27.463Z"></svg:path>`,
})
export class DeviconPlainNeovimIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
