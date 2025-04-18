import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsGpsFixedDuotoneIcon],svg[lets-icons-gps-fixed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M12 2.4a.6.6 0 0 1 .6.6v2.025a7 7 0 0 1 6.375 6.375H21a.6.6 0 1 1 0 1.2h-2.025a7 7 0 0 1-6.376 6.375L12.6 19v2a.6.6 0 1 1-1.2 0v-2.025a7 7 0 0 1-6.375-6.376L5 12.6H3a.6.6 0 1 1 0-1.2h2.025A7 7 0 0 1 11.4 5.025V3a.6.6 0 0 1 .6-.6M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsGpsFixedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
