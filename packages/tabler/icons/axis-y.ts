import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAxisYIcon],svg[tabler-axis-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 20h-.01M15 20h-.01M19 20h-.01M4 7l3-3l3 3M7 20V4"></svg:path>`,
})
export class TablerAxisYIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
