import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTrunksIcon],svg[arcticons-trunks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 9.2h-3.837L8.619 4.5l-2.457 9.075l1.13 10.882l11.226-3.707l3.318 22.75H24m0-34.3h3.837l11.544-4.7l2.457 9.075l-1.13 10.882l-11.226-3.707l-3.318 22.75H24"></svg:path><svg:circle cx="19.997" cy="14.573" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28.003" cy="14.573" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsTrunksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
