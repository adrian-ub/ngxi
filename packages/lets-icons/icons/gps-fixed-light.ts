import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsGpsFixedLightIcon],svg[lets-icons-gps-fixed-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="7"></svg:circle><svg:circle cx="12" cy="12" r="2" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" d="M12 5V3m7 9h2m-9 9v-2m-9-7h2"></svg:path></svg:g>`,
})
export class LetsIconsGpsFixedLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
