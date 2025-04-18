import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeGulpIcon],svg[material-icon-theme-gulp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e53935" d="M17.5 12V7.75l3.4-2.55a1.5 1.5 0 0 0-1.8-2.4l-4.6 3.45V12H8v2h2l1.38 16h9.255L22 14h2v-2Z"></svg:path>`,
})
export class MaterialIconThemeGulpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
