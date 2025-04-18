import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPersonioIcon],svg[arcticons-personio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.18 42.502h29.579M26.717 12.444l-6.454 24.083m-3.906-9.255c6.428.16 35.593-19.664 22.253-21.67C31.698 4.242 7.135 17.113 7.587 22.85c.052.667.8.761 1.866 1.114"></svg:path><svg:circle cx="30.733" cy="35.307" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsPersonioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
