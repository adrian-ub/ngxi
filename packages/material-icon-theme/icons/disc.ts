import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDiscIcon],svg[material-icon-theme-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b0bec5" d="M16 12a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-10a14 14 0 1 0 14 14A14 14 0 0 0 16 2"></svg:path>`,
})
export class MaterialIconThemeDiscIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
