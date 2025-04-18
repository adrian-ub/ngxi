import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHeartSearchIcon],svg[tabler-heart-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m12 20l-.975-.966L4.5 12.572A5 5 0 1 1 12 6.006a5 5 0 0 1 8.37 5.428"></svg:path><svg:path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0m5.2 2.2L22 22"></svg:path></svg:g>`,
})
export class TablerHeartSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
