import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeSnapcraftIcon],svg[material-icon-theme-snapcraft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#81c784" d="M.76.36L1 .48L.76.72zm-.48.8l.44-.4l-.2-.2zM.12.12l.6.6V.36z"></svg:path><svg:path fill="#ff6e40" d="M1.12.36L.76.32l.4.2z"></svg:path>`,
})
export class MaterialIconThemeSnapcraftIcon {
  readonly viewBox = input("0 0 1.28 1.28")
  readonly width = input("1em")
  readonly height = input("1em")
}
