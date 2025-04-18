import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ToggleThumbIcon],svg[fluent-mdl2-toggle-thumb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1031 0q143 0 274 36t244 103t205 161t157 208t101 245t36 273q0 140-36 270t-103 243t-159 208t-206 160t-243 104t-270 37q-140 0-271-36t-245-104t-209-160t-163-207t-105-244t-38-271q0-143 37-274t104-246t161-207t208-159T756 37t275-37"></svg:path>`,
})
export class FluentMdl2ToggleThumbIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
