import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumBrightnessUpIcon],svg[circum-brightness-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17.5a5.5 5.5 0 1 1 5.5-5.5a5.506 5.506 0 0 1-5.5 5.5m0-10a4.5 4.5 0 1 0 4.5 4.5A4.505 4.505 0 0 0 12 7.5"></svg:path><svg:circle cx="12" cy="3.063" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="20.937" r="1" fill="currentColor"></svg:circle><svg:circle cx="20.937" cy="12" r="1" fill="currentColor"></svg:circle><svg:circle cx="3.063" cy="12" r="1" fill="currentColor"></svg:circle><svg:circle cx="18.319" cy="5.681" r="1" fill="currentColor"></svg:circle><svg:circle cx="5.681" cy="18.319" r="1" fill="currentColor"></svg:circle><svg:circle cx="18.319" cy="18.319" r="1" fill="currentColor"></svg:circle><svg:circle cx="5.681" cy="5.681" r="1" fill="currentColor"></svg:circle>`,
})
export class CircumBrightnessUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
