import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSeedlingOffIcon],svg[tabler-seedling-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.412 7.407a6.03 6.03 0 0 0-2.82-2.82M4 4H3v2a6 6 0 0 0 6 6h3m0 2a6 6 0 0 1 .255-1.736m1.51-2.514A5.98 5.98 0 0 1 18 8h3v1c0 2.158-1.14 4.05-2.85 5.107M15 15h-3m0 5v-8M3 3l18 18"></svg:path>`,
})
export class TablerSeedlingOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
