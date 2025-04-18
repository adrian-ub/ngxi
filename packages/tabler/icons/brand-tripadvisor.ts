import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandTripadvisorIcon],svg[tabler-brand-tripadvisor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m11 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0"></svg:path><svg:path d="M17.5 9a4.5 4.5 0 1 0 3.5 1.671L22 9zm-11 0A4.5 4.5 0 1 1 3 10.671L2 9z"></svg:path><svg:path d="m10.5 15.5l1.5 2l1.5-2M9 6.75q3-1 6 0"></svg:path></svg:g>`,
})
export class TablerBrandTripadvisorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
