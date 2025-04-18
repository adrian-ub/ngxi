import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBaselineDensitySmallIcon],svg[tabler-baseline-density-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 3h16M4 9h16M4 15h16M4 21h16"></svg:path>`,
})
export class TablerBaselineDensitySmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
