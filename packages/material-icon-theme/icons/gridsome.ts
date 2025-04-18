import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeGridsomeIcon],svg[material-icon-theme-gridsome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="16" r="2" fill="#00bfa5"></svg:circle><svg:path fill="#00bfa5" d="M27.96 14H22v4h3.798A9.998 9.998 0 1 1 18 6.202V2.159A13.994 13.994 0 1 0 30 16v-.02A2.02 2.02 0 0 0 27.96 14"></svg:path>`,
})
export class MaterialIconThemeGridsomeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
