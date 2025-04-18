import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifNoIcon],svg[cif-no-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#EF2B2D" d="M.5.409h300v218.182H.5z"></svg:path><svg:path fill="#FFF" d="M82.318.409h54.545v218.182H82.318z"></svg:path><svg:path fill="#FFF" d="M.5 82.227h300v54.545H.5z"></svg:path><svg:path fill="#002868" d="M95.955.409h27.273v218.182H95.955z"></svg:path><svg:path fill="#002868" d="M.5 95.863h300v27.273H.5z"></svg:path></svg:g>`,
})
export class CifNoIcon {
  readonly viewBox = input("0 0 301 219")
  readonly width = input("1.38em")
  readonly height = input("1em")
}
