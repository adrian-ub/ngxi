import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsGpsFixedDuotoneLineIcon],svg[lets-icons-gps-fixed-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-4a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18.4 12a6.4 6.4 0 0 1-6.4 6.4v1.2a7.6 7.6 0 0 0 7.6-7.6zM12 5.6a6.4 6.4 0 0 1 6.4 6.4h1.2A7.6 7.6 0 0 0 12 4.4zM5.6 12A6.4 6.4 0 0 1 12 5.6V4.4A7.6 7.6 0 0 0 4.4 12zm6.4 6.4A6.4 6.4 0 0 1 5.6 12H4.4a7.6 7.6 0 0 0 7.6 7.6zm2.4-6.4a2.4 2.4 0 0 1-2.4 2.4v1.2a3.6 3.6 0 0 0 3.6-3.6zM12 9.6a2.4 2.4 0 0 1 2.4 2.4h1.2A3.6 3.6 0 0 0 12 8.4zM9.6 12A2.4 2.4 0 0 1 12 9.6V8.4A3.6 3.6 0 0 0 8.4 12zm2.4 2.4A2.4 2.4 0 0 1 9.6 12H8.4a3.6 3.6 0 0 0 3.6 3.6z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M12 5V3m7 9h2m-9 9v-2m-9-7h2"></svg:path></svg:g>`,
})
export class LetsIconsGpsFixedDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
