import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSumIcon],svg[tabler-sum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 16v2a1 1 0 0 1-1 1H6l6-7l-6-7h11a1 1 0 0 1 1 1v2"></svg:path>`,
})
export class TablerSumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
