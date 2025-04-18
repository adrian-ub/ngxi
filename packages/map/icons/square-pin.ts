import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapSquarePinIcon],svg[map-square-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M45 1H5v40h15.093l5.439 8.05l5.44-8.05H45z"></svg:path>`,
})
export class MapSquarePinIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
