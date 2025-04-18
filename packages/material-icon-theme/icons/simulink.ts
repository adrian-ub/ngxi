import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeSimulinkIcon],svg[material-icon-theme-simulink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9e9e9e" d="M.53 1.323v.264h2.38v.794h.265V1.323z"></svg:path><svg:path fill="#ff6e40" d="M2.381 2.381h1.323v1.323H2.381z"></svg:path><svg:path fill="#64b5f6" d="m2.381 1.455l-1.587.926V.53z"></svg:path>`,
})
export class MaterialIconThemeSimulinkIcon {
  readonly viewBox = input("0 0 4.233 4.233")
  readonly width = input("1em")
  readonly height = input("1em")
}
