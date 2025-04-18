import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeWepyIcon],svg[material-icon-theme-wepy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4caf50" d="M16 2A14 14 0 0 0 2 16v12a2 2 0 0 0 2 2h12a14 14 0 0 0 0-28m0 24a10 10 0 1 1 10-10a10.01 10.01 0 0 1-10 10"></svg:path>`,
})
export class MaterialIconThemeWepyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
