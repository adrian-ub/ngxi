import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBookImageIcon],svg[zmdi-book-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 3q17 0 29.5 12.5T341 45v342q0 17-12.5 29.5T299 429H43q-18 0-30.5-12.5T0 387V45q0-17 12.5-29.5T43 3zM43 45v171l53-32l53 32V45zm0 320h256l-83-109l-64 82l-45-55z"></svg:path>`,
})
export class ZmdiBookImageIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
