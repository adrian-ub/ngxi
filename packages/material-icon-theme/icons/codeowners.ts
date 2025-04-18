import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCodeownersIcon],svg[material-icon-theme-codeowners-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#afb42b" d="m20.35 12.25l1.4 1.41l-6.53 6.59l-3.47-3.5l1.4-1.41l2.07 2.08zm-11.1 4.5l3 3h-10v-2c0-2.21 3.58-4 8-4l1.89.11zm1-13a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4"></svg:path>`,
})
export class MaterialIconThemeCodeownersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
