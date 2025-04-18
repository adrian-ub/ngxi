import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClockUpIcon],svg[tabler-clock-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.983 12.548a9 9 0 1 0-8.45 8.436M19 22v-6m3 3l-3-3l-3 3"></svg:path><svg:path d="M12 7v5l2.5 2.5"></svg:path></svg:g>`,
})
export class TablerClockUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
