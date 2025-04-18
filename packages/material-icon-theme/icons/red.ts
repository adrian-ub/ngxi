import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeRedIcon],svg[material-icon-theme-red-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fbc02d" d="M100 60.234V10.322L74.999 47.28z"></svg:path><svg:path fill="#b71c1c" d="m100 125.001l57.34-29.893l-25.002-36.958L100 75z"></svg:path><svg:path fill="#f9a825" d="M100 10.322v49.912l25.001-12.954z"></svg:path><svg:path fill="#b71c1c" d="M100 139.766v49.912l89.678-46.65l-25.001-36.959z"></svg:path><svg:path fill="#e53935" d="M100 139.766L35.323 106.07l-25.001 36.958L100 189.678zm0-14.765V75L67.662 58.15L42.66 95.108z"></svg:path>`,
})
export class MaterialIconThemeRedIcon {
  readonly viewBox = input("0 0 200 200")
  readonly width = input("1em")
  readonly height = input("1em")
}
