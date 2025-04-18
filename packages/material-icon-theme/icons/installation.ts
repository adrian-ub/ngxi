import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeInstallationIcon],svg[material-icon-theme-installation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5722" d="M12 7h-2V2H6v5H4l4 4zm-9 5.5V14h10v-1.5z"></svg:path>`,
})
export class MaterialIconThemeInstallationIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
