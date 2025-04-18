import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeHostsIcon],svg[material-icon-theme-hosts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#cfd8dc" d="m14 6l-3-3v2H7v2h4v2M5 7l-3 3l3 3v-2h4V9H5z"></svg:path>`,
})
export class MaterialIconThemeHostsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
