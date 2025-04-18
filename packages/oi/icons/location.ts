import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiLocationIcon],svg[oi-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0L0 4l3 1l1 3z"></svg:path>`,
})
export class OiLocationIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
