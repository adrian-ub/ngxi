import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVitestIcon],svg[material-icon-theme-vitest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#689f38" d="M16.094 30.074a1.4 1.4 0 0 1-1.003-.416l-6.622-6.622a1.42 1.42 0 0 1 2.006-2.006l5.62 5.618l12.24-12.24a1.419 1.419 0 0 1 2.007 2.006L17.098 29.658a1.4 1.4 0 0 1-1.004.416"></svg:path><svg:path fill="#689f38" fill-opacity=".502" d="M16.089 30.074a1.4 1.4 0 0 0 1.003-.416l6.622-6.622a1.42 1.42 0 0 0-2.006-2.006l-5.62 5.618l-12.24-12.24a1.42 1.42 0 0 0-2.007 2.006l13.244 13.244a1.4 1.4 0 0 0 1.004.416"></svg:path><svg:path fill="#ffca28" d="M24 10h-6V2l-8 12h6v8z"></svg:path>`,
})
export class MaterialIconThemeVitestIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
