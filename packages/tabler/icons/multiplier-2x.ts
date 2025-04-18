import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMultiplier2xIcon],svg[tabler-multiplier-2x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 16l4-4m0 4l-4-4m-8-2a2 2 0 1 1 4 0c0 .591-.417 1.318-.816 1.858L6 16.001h4"></svg:path>`,
})
export class TablerMultiplier2xIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
