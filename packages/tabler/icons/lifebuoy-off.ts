import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLifebuoyOffIcon],svg[tabler-lifebuoy-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9.171 9.172a4 4 0 0 0 5.65 5.663M16 12a4 4 0 0 0-4-4"></svg:path><svg:path d="M5.64 5.632a9 9 0 1 0 12.73 12.725m1.667-2.301A9 9 0 0 0 7.96 3.956M15 15l3.35 3.35M9 15l-3.35 3.35m0-12.7L9 9m9.35-3.35L15 9M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerLifebuoyOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
