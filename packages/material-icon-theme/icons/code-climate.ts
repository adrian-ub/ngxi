import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCodeClimateIcon],svg[material-icon-theme-code-climate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#eee" d="m196.19 75.562l-51.846 51.561l30.766 30.766l21.08-21.08l59.252 59.537l30.481-30.766zm-61.246 60.961l-30.481-30.481l-78.053 78.053l-11.964 11.964l30.766 30.766l11.964-12.249l39.596-39.312l7.691-7.691l30.481 30.48l28.772 28.773l30.766-30.766l-28.772-28.772z"></svg:path>`,
})
export class MaterialIconThemeCodeClimateIcon {
  readonly viewBox = input("0 0 300 300")
  readonly width = input("1em")
  readonly height = input("1em")
}
