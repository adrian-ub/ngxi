import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBowlSpoonIcon],svg[tabler-bowl-spoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5-2.517 5.573-4 6.5v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1c-1.687-1.054-4-5-4-6.5V12a1 1 0 0 1 1-1m4-4c1.657 0 3-.895 3-2S9.657 3 8 3s-3 .895-3 2s1.343 2 3 2m3-2h9"></svg:path>`,
})
export class TablerBowlSpoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
