import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTrainIcon],svg[tabler-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 13c0-3.87-3.37-7-10-7H3m0 9h16a2 2 0 0 0 2-2"></svg:path><svg:path d="M3 6v5h17.5M3 11v4m5-4V6m5 5V6.5M3 19h18"></svg:path></svg:g>`,
})
export class TablerTrainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
