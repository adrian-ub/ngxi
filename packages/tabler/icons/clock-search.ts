import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClockSearchIcon],svg[tabler-clock-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.993 11.646a9 9 0 1 0-9.318 9.348"></svg:path><svg:path d="M12 7v5l1 1m2 5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m5.2 2.2L22 22"></svg:path></svg:g>`,
})
export class TablerClockSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
