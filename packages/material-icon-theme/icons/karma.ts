import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeKarmaIcon],svg[material-icon-theme-karma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#009688" d="m37.275 55.618l-20.29-26.686l9.53-7.247l20.29 26.686h.003l5.527 7.247z"></svg:path><svg:path fill="#4DB6AC" d="M34.4 8.378L23.638 22.533V8.403H11.665V22.22l7.84 33.234h4.132V42.308l.003.003l20.29-26.686l-.008-.006l5.504-7.24H34.558v.12z"></svg:path>`,
})
export class MaterialIconThemeKarmaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
