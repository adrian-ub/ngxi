import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBaselineIcon],svg[tabler-baseline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20h16M8 16V8a4 4 0 1 1 8 0v8m-8-6h8"></svg:path>`,
})
export class TablerBaselineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
