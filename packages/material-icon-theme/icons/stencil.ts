import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeStencilIcon],svg[material-icon-theme-stencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#448aff" d="m8 12l-6 8h22l6-8zm6.5-8L10 10h11l4.5-6zm3 24l4.5-6H11l-4.5 6z"></svg:path>`,
})
export class MaterialIconThemeStencilIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
