import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiMapTrailIcon],svg[ooui-map-trail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 6l-1-1l-1.5 1.5L16 5l-1 1l1.5 1.5L15 9l1 1l1.5-1.5L19 10l1-1l-1.5-1.5z"></svg:path><svg:circle cx="7.5" cy="14.5" r="3.5" fill="currentColor"></svg:circle><svg:circle cx="7" cy="3" r="2" fill="currentColor"></svg:circle><svg:circle cx="13" cy="7" r="1" fill="currentColor"></svg:circle><svg:circle cx="10" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="3" cy="3" r="1" fill="currentColor"></svg:circle><svg:circle cx="1" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="1" cy="9" r="1" fill="currentColor"></svg:circle><svg:circle cx="3" cy="12" r="1" fill="currentColor"></svg:circle>`,
})
export class OouiMapTrailIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
