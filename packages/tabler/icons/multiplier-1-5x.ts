import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMultiplier15xIcon],svg[tabler-multiplier-1-5x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16V8l-2 2m8 6h2a2 2 0 1 0 0-4h-2V8h4m-7 8v.01M17 16l4-4m0 4l-4-4"></svg:path>`,
})
export class TablerMultiplier15xIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
