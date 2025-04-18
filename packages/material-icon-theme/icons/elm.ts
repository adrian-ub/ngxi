import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeElmIcon],svg[material-icon-theme-elm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFB300" d="m106.716 99.763l54.785 54.782l54.779-54.782z"></svg:path><svg:path fill="#64DD17" d="M96.881 89.93H216.83l-55.18-55.184H41.7zm131.546 11.593l59.705 59.704L228.16 221.2l-59.705-59.704z"></svg:path><svg:path fill="#00B8D4" d="m175.552 34.746l112.703 112.695V34.746z"></svg:path><svg:path fill="#455A64" d="m34.746 281.3l119.8-119.8l-119.8-119.8z"></svg:path><svg:path fill="#FFB300" d="m288.255 175.01l-53.148 53.149l53.148 53.14z"></svg:path><svg:path fill="#00B8D4" d="M281.3 288.254L161.5 168.455l-119.8 119.8z"></svg:path>`,
})
export class MaterialIconThemeElmIcon {
  readonly viewBox = input("0 0 323 323")
  readonly width = input("1em")
  readonly height = input("1em")
}
