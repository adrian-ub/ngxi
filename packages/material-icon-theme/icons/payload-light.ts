import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemePayloadLightIcon],svg[material-icon-theme-payload-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#455A64" d="m11.617 2l9.163 5.508v10.455l-6.9 3.991V11.5L4.706 6zm-.703 11.216v8.159L4 17.215z"></svg:path>`,
})
export class MaterialIconThemePayloadLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
