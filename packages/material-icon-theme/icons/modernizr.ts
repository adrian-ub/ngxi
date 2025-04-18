import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeModernizrIcon],svg[material-icon-theme-modernizr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e91e63" d="M10 10v4H6v4H2v4h12V10zm8 0v12h12a12 12 0 0 0-12-12"></svg:path>`,
})
export class MaterialIconThemeModernizrIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
