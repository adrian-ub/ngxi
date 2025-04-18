import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeJuliaIcon],svg[material-icon-theme-julia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g transform="translate(.21 -247.01)"><svg:circle cx="13.497" cy="281.63" r="9.555" fill="#C62828"></svg:circle><svg:circle cx="36.081" cy="281.63" r="9.555" fill="#7E57C2"></svg:circle><svg:circle cx="24.722" cy="262.39" r="9.555" fill="#388E3C"></svg:circle></svg:g>`,
})
export class MaterialIconThemeJuliaIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
