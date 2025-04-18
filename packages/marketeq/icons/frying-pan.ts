import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqFryingPanIcon],svg[marketeq-frying-pan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.458 28.688L41.5 34.25a5.207 5.207 0 0 1-1.197 9.17a5.21 5.21 0 0 1-6.053-1.92l-5.583-8.062"></svg:path><svg:path stroke="#306CFE" d="M20.833 35.417c8.055 0 14.584-6.53 14.584-14.584S28.887 6.25 20.833 6.25S6.25 12.78 6.25 20.833c0 8.055 6.53 14.584 14.583 14.584"></svg:path></svg:g>`,
})
export class MarketeqFryingPanIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
