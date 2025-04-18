import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeUvIcon],svg[material-icon-theme-uv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E040FB" d="M2 2v11c0 .5.5 1 1 1h8c.5 0 1-.5 1-1h1v1h1V2H8v8H7V2z"></svg:path>`,
})
export class MaterialIconThemeUvIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
