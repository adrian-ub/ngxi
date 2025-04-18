import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeHackIcon],svg[material-icon-theme-hack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#607d8b" d="m14 9l-8 8V9l8-8zm12 12L16 31v-8l10-10z"></svg:path><svg:path fill="#ffa000" d="m6 20l8-8v8"></svg:path><svg:path fill="#607d8b" d="m6 30l8-8H6"></svg:path><svg:path fill="#eceff1" d="m16 20l10-10H16"></svg:path>`,
})
export class MaterialIconThemeHackIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
