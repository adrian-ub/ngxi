import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifDkIcon],svg[cif-dk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#C60C30" d="M.5.5h300v226H.5z"></svg:path><svg:path fill="#FFF" d="M96.791.5h32.354v226H96.791z"></svg:path><svg:path fill="#FFF" d="M300.5 97.323v32.354H.5V97.323z"></svg:path></svg:g>`,
})
export class CifDkIcon {
  readonly viewBox = input("0 0 301 227")
  readonly width = input("1.33em")
  readonly height = input("1em")
}
