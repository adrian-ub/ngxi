import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumBrightnessDownIcon],svg[circum-brightness-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17.5a5.5 5.5 0 1 1 5.5-5.5a5.506 5.506 0 0 1-5.5 5.5m0-10a4.5 4.5 0 1 0 4.5 4.5A4.505 4.505 0 0 0 12 7.5"></svg:path><svg:circle cx="12" cy="2.813" r=".75" fill="currentColor"></svg:circle><svg:circle cx="12" cy="21.187" r=".75" fill="currentColor"></svg:circle><svg:circle cx="21.187" cy="12" r=".75" fill="currentColor"></svg:circle><svg:circle cx="2.813" cy="12" r=".75" fill="currentColor"></svg:circle><svg:circle cx="18.496" cy="5.504" r=".75" fill="currentColor"></svg:circle><svg:circle cx="5.504" cy="18.496" r=".75" fill="currentColor"></svg:circle><svg:circle cx="18.496" cy="18.496" r=".75" fill="currentColor"></svg:circle><svg:circle cx="5.504" cy="5.504" r=".75" fill="currentColor"></svg:circle>`,
})
export class CircumBrightnessDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
