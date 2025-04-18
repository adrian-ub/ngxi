import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFilterIcon],svg[lets-icons-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path d="M5 12V4m14 16v-3M5 20v-4m14-3V4m-7 3V4m0 16v-9"></svg:path><svg:circle cx="5" cy="14" r="2"></svg:circle><svg:circle cx="12" cy="9" r="2"></svg:circle><svg:circle cx="19" cy="15" r="2"></svg:circle></svg:g>`,
})
export class LetsIconsFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
