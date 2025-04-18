import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeSnowpackLightIcon],svg[material-icon-theme-snowpack-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#607d8b" d="M600.53 440.27L344.04 41.29a28.5 28.5 0 0 0-48.092 0L39.458 440.27a28.499 28.499 0 0 0 24.046 43.639h512.98a28.499 28.499 0 0 0 24.046-43.639M320 108.97l75.7 118.45H320l-56.998 56.998l-33.842-33.842z"></svg:path>`,
})
export class MaterialIconThemeSnowpackLightIcon {
  readonly viewBox = input("-30 -94 700 700")
  readonly width = input("1em")
  readonly height = input("1em")
}
