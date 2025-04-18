import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowRotaryStraightIcon],svg[tabler-arrow-rotary-straight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 13a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3 3v5m0-18v7M9 7l4-4l4 4"></svg:path>`,
})
export class TablerArrowRotaryStraightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
