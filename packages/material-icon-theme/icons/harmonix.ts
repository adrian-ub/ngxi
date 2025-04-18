import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeHarmonixIcon],svg[material-icon-theme-harmonix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#536dfe" d="M27 13L16 2L5 13l8 8l-6 6l3 3l6-6l6 6l3-3l-6-6zm-17 0l6-6l6 6l-6 6z"></svg:path>`,
})
export class MaterialIconThemeHarmonixIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
