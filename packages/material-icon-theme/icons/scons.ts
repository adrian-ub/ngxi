import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeSconsIcon],svg[material-icon-theme-scons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#c62828" d="M1 12h6v3H1Zm8 0h6v3H9ZM1 8h3v3H1Zm11 0h3v3h-3ZM5 1h6v3H5Z"></svg:path><svg:path fill="#b0bec5" d="M8 11L6 8h1V5h2v3h1Z"></svg:path>`,
})
export class MaterialIconThemeSconsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
