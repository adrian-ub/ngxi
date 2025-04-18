import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeWindicssIcon],svg[material-icon-theme-windicss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#42a5f5" stroke-miterlimit="3.339" stroke-width="4" d="M22 12a4 4 0 1 1 4 4H2m14 10a4 4 0 1 0 4-4H10M8 6a4 4 0 1 1 4 4H2"></svg:path><svg:path fill="#42a5f5" d="M2 20h4v4H2z"></svg:path></svg:g>`,
})
export class MaterialIconThemeWindicssIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
