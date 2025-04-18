import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWaterMediumIcon],svg[material-symbols-light-water-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.087 12.689q1.175-.595 2.428-.892t2.572-.297q.73 0 1.458.09t1.434.29q1.327.37 2.018.495q.692.125 1.5.125h.417l.951-8.5H5.115zM7.475 21q-.64 0-1.097-.404t-.513-1.025L4 3h16l-1.846 16.571q-.056.621-.513 1.025q-.456.404-1.097.404z"></svg:path>`,
})
export class MaterialSymbolsLightWaterMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
