import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeHostsLightIcon],svg[material-icon-theme-hosts-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#455a64" d="m14 6l-3-3v2H7v2h4v2M5 7l-3 3l3 3v-2h4V9H5z"></svg:path>`,
})
export class MaterialIconThemeHostsLightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
