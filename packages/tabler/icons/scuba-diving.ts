import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerScubaDivingIcon],svg[tabler-scuba-diving-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12a1 1 0 1 0 2 0a1 1 0 0 0-2 0M2 2l3 3l1.5 4l3.5 2l6 2l1 4l2.5 3M11 8l4.5 1.5"></svg:path>`,
})
export class TablerScubaDivingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
