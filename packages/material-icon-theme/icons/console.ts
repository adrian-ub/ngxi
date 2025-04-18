import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeConsoleIcon],svg[material-icon-theme-console-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff7043" d="M20 19V7H4v12zm0-16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-7 14v-2h5v2zm-3.42-4L5.57 9H8.4l3.3 3.3c.39.39.39 1.03 0 1.42L8.42 17H5.59z"></svg:path>`,
})
export class MaterialIconThemeConsoleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
