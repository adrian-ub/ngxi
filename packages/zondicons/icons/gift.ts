import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsGiftIcon],svg[zondicons-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.83 4H20v6h-1v10H1V10H0V4h5.17A3 3 0 0 1 10 .76A3 3 0 0 1 14.83 4M8 10H3v8h5zm4 0v8h5v-8zM8 6H2v2h6zm4 0v2h6V6zM8 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class ZondiconsGiftIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
