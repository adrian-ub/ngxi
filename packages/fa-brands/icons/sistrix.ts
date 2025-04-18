import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsSistrixIcon],svg[fa-brands-sistrix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 449L301.2 300.2c20-27.9 31.9-62.2 31.9-99.2c0-93.1-74.7-168.9-166.5-168.9C74.7 32 0 107.8 0 200.9s74.7 168.9 166.5 168.9c39.8 0 76.3-14.2 105-37.9l146 148.1zM166.5 330.8c-70.6 0-128.1-58.3-128.1-129.9S95.9 71 166.5 71s128.1 58.3 128.1 129.9s-57.4 129.9-128.1 129.9"></svg:path>`,
})
export class FaBrandsSistrixIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
