import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifLvIcon],svg[cif-lv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#9E3039" d="M.5.5h300v150H.5z"></svg:path><svg:path fill="#FFF" d="M.5 60.5h300v30H.5z"></svg:path></svg:g>`,
})
export class CifLvIcon {
  readonly viewBox = input("0 0 301 151")
  readonly width = input("2em")
  readonly height = input("1em")
}
