import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSectionSignIcon],svg[tabler-section-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9.172 19A3 3 0 1 0 12 15m2.83-10A3 3 0 1 0 12 9"></svg:path><svg:path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></svg:path></svg:g>`,
})
export class TablerSectionSignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
