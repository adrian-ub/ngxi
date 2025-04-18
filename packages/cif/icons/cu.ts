import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifCuIcon],svg[cif-cu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#002A8F" d="M.5.5h300v150H.5z"></svg:path><svg:path fill="#FFF" d="M.5 30.5h300v30H.5zm0 60h300v30H.5z"></svg:path><svg:path fill="#CF142B" d="M.5.5v150l129.902-75z"></svg:path><svg:path fill="#FFF" d="M43.801 53L38.75 68.551H22.402l13.219 9.609l-5.051 15.539L43.8 84.09l13.23 9.609l-5.051-15.539l13.219-9.609H48.85z"></svg:path></svg:g>`,
})
export class CifCuIcon {
  readonly viewBox = input("0 0 301 151")
  readonly width = input("2em")
  readonly height = input("1em")
}
