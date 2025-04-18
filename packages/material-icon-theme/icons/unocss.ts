import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeUnocssIcon],svg[material-icon-theme-unocss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="6" fill="#78909c"></svg:circle><svg:path fill="#546e7a" d="M2 18v6a6 6 0 0 0 12 0v-6Z"></svg:path><svg:path fill="#b0bec5" d="M30 14V8a6 6 0 0 0-12 0v6Z"></svg:path>`,
})
export class MaterialIconThemeUnocssIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
