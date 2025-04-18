import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifSrIcon],svg[cif-sr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#377E3F" d="M.5.5h300v200H.5z"></svg:path><svg:path fill="#FFF" d="M.5 40.5h300v120H.5z"></svg:path><svg:path fill="#B40A2D" d="M.5 60.5h300v80H.5z"></svg:path><svg:path fill="#ECC81D" d="m150.5 64.319l23.511 72.361l-61.554-44.721h76.085l-61.554 44.721z"></svg:path></svg:g>`,
})
export class CifSrIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
