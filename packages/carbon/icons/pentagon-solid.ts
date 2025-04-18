import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPentagonSolidIcon],svg[carbon-pentagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a1 1 0 0 0-.592.194l-13 9.544a1 1 0 0 0-.36 1.112l4.97 15.456A1 1 0 0 0 7.97 29h16.06a1 1 0 0 0 .952-.694l4.97-15.456a1 1 0 0 0-.36-1.112l-13-9.544A1 1 0 0 0 16 2"></svg:path>`,
})
export class CarbonPentagonSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
