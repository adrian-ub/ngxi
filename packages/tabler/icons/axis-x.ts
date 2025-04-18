import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAxisXIcon],svg[tabler-axis-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 13v.01M4 9v.01M4 5v.01M17 20l3-3l-3-3M4 17h16"></svg:path>`,
})
export class TablerAxisXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
