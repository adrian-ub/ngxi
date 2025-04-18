import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRippleOffIcon],svg[tabler-ripple-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7q1.372-.915 2.746-1.272m4.212.22Q10.978 6.318 12 7q4.5 3 9 0M3 17q4.5-3 9 0q3.138 2.093 6.276 1.266M3 12q4.5-3 9 0m5.482 1.429Q19.241 13.173 21 12M3 3l18 18"></svg:path>`,
})
export class TablerRippleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
