import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeSchemeIcon],svg[material-icon-theme-scheme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f44336" d="M5.11 21.186L9.887 7.303L8.945 5.11H7.407V2.813h2.296c.483 0 .896.299 1.068.724l6.58 15.353h1.539v2.296h-2.297a1.14 1.14 0 0 1-1.068-.735L11.231 10.45L7.544 21.186z"></svg:path>`,
})
export class MaterialIconThemeSchemeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
