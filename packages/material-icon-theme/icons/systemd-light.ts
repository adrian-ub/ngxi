import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeSystemdLightIcon],svg[material-icon-theme-systemd-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00c853" d="m9 8l3-2v4z"></svg:path><svg:circle cx="6" cy="8" r="2" fill="#00c853"></svg:circle><svg:path fill="#455a64" d="M3 5H1v6h2v-1H2V6h1zm10 0h2v6h-2v-1h1V6h-1z"></svg:path>`,
})
export class MaterialIconThemeSystemdLightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
