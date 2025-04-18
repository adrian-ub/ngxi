import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemePostcssIcon],svg[material-icon-theme-postcss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e53935" d="M20 12v8h-8v-8zm2-2H10v12h12z"></svg:path><svg:path fill="#e53935" d="M16 5.488L26.159 20H5.84zM16 2L2 22h28z"></svg:path><svg:path fill="#e53935" d="M16 13a3 3 0 1 1-3 3a3.003 3.003 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5"></svg:path><svg:path fill="#e53935" d="M16 4A12 12 0 1 1 4 16A12.014 12.014 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2"></svg:path>`,
})
export class MaterialIconThemePostcssIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
