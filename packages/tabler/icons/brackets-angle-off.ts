import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBracketsAngleOffIcon],svg[tabler-brackets-angle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4h.01M6.453 6.474L3 12l5 8m8-16l5 8l-1.917 3.067m-1.548 2.477L16 20M3 3l18 18"></svg:path>`,
})
export class TablerBracketsAngleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
