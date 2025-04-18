import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeHurlIcon],svg[material-icon-theme-hurl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ec407a" d="M11 2v2H2v2h9v2l4-3zM5 8l-4 3l4 3v-2h9v-2H5z"></svg:path>`,
})
export class MaterialIconThemeHurlIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
