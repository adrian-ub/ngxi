import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSubscriptIcon],svg[tabler-subscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 7l8 10m-8 0l8-10m8 13h-4l3.5-4a1.73 1.73 0 0 0-3.5-2"></svg:path>`,
})
export class TablerSubscriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
