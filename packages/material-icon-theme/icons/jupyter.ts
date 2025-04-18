import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeJupyterIcon],svg[material-icon-theme-jupyter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f57c00" d="M6.2 18a22.7 22.7 0 0 0 9.8 2a22.7 22.7 0 0 0 9.8-2a10.002 10.002 0 0 1-19.6 0m19.6-4a22.7 22.7 0 0 0-9.8-2a22.7 22.7 0 0 0-9.8 2a10.002 10.002 0 0 1 19.6 0"></svg:path><svg:circle cx="27" cy="5" r="3" fill="#757575"></svg:circle><svg:circle cx="5" cy="27" r="3" fill="#9e9e9e"></svg:circle><svg:circle cx="5" cy="5" r="3" fill="#616161"></svg:circle>`,
})
export class MaterialIconThemeJupyterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
