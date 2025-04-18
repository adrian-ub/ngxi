import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClockRecordIcon],svg[tabler-clock-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 12.3a9 9 0 1 0-8.683 8.694"></svg:path><svg:path d="M12 7v5l2 2m2 5a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></svg:path></svg:g>`,
})
export class TablerClockRecordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
