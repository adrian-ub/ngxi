import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMapPinAddLineIcon],svg[ri-map-pin-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 20.9l4.95-4.95a7 7 0 1 0-9.9 0zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0zM11 10V7h2v3h3v2h-3v3h-2v-3H8v-2z"></svg:path>`,
})
export class RiMapPinAddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
