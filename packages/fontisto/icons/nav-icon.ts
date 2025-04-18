import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoNavIconIcon],svg[fontisto-nav-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h27.65v5.219H0zm0 9.39h27.65v5.219H0zm0 9.391h27.65V24H0z"></svg:path>`,
})
export class FontistoNavIconIcon {
  readonly viewBox = input("0 0 28 24")
  readonly width = input("1.17em")
  readonly height = input("1em")
}
