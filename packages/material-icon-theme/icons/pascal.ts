import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemePascalIcon],svg[material-icon-theme-pascal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288d1" d="m8.863 14.765l-1.158 6.597H3.937L7.191 2.637l6.559.013q3.035 0 4.77 1.685q1.737 1.685 1.518 4.398q-.205 2.752-2.302 4.398q-2.083 1.646-5.324 1.646zm.527-3.125l3.138.026q1.517 0 2.52-.785q1.003-.784 1.196-2.122t-.437-2.135q-.617-.797-1.839-.848l-3.55-.013z"></svg:path>`,
})
export class MaterialIconThemePascalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
