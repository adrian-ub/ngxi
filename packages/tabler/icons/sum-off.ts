import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSumOffIcon],svg[tabler-sum-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 18a1 1 0 0 1-1 1H6l6-7M9 5h8a1 1 0 0 1 1 1v2M3 3l18 18"></svg:path>`,
})
export class TablerSumOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
