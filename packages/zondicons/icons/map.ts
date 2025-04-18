import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsMapIcon],svg[zondicons-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 0l6 4l8-4l6 4v16l-6-4l-8 4l-6-4zm7 6v11l6-3V3z"></svg:path>`,
})
export class ZondiconsMapIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
