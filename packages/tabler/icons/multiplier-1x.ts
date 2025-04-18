import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMultiplier1xIcon],svg[tabler-multiplier-1x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 16V8l-2 2m6 6l4-4m0 4l-4-4"></svg:path>`,
})
export class TablerMultiplier1xIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
