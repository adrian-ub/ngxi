import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsMouseIcon],svg[zondicons-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9V6A6 6 0 0 1 9 .08V9zm0 2v3a6 6 0 1 0 12 0v-3zm12-2V6a6 6 0 0 0-5-5.92V9z"></svg:path>`,
})
export class ZondiconsMouseIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
