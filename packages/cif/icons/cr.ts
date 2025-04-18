import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifCrIcon],svg[cif-cr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#002B7F" d="M.5.5h300v180H.5z"></svg:path><svg:path fill="#FFF" d="M.5 30.5h300v120H.5z"></svg:path><svg:path fill="#CE1126" d="M.5 60.5h300v60H.5z"></svg:path></svg:g>`,
})
export class CifCrIcon {
  readonly viewBox = input("0 0 301 181")
  readonly width = input("1.67em")
  readonly height = input("1em")
}
