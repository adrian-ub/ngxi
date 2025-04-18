import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeQuokkaIcon],svg[material-icon-theme-quokka-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF6D00" d="M8 2v6H2v6h12V2z" paint-order="fill markers stroke"></svg:path>`,
})
export class MaterialIconThemeQuokkaIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
