import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsGpsFixedFillIcon],svg[lets-icons-gps-fixed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-4a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 5V3m7 9h2m-9 9v-2m-9-7h2"></svg:path></svg:g>`,
})
export class LetsIconsGpsFixedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
