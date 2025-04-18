import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTrademarkIcon],svg[tabler-trademark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 9h5M7 9v6m6 0V9l3 4l3-4v6"></svg:path>`,
})
export class TablerTrademarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
