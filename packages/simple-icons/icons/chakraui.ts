import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsChakrauiIcon],svg[simple-icons-chakraui-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0C5.352 0 0 5.352 0 12s5.352 12 12 12s12-5.352 12-12S18.648 0 12 0m2.8 4.333c.13-.004.248.136.171.278l-3.044 5.58a.187.187 0 0 0 .164.276h5.26c.17 0 .252.207.128.323l-9.22 8.605c-.165.154-.41-.063-.278-.246l4.364-6.021a.187.187 0 0 0-.151-.296H6.627a.187.187 0 0 1-.131-.32l8.18-8.123a.18.18 0 0 1 .125-.056z"></svg:path>`,
})
export class SimpleIconsChakrauiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
