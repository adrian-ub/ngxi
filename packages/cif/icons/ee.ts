import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifEeIcon],svg[cif-ee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#4891D9" d="M.5.5h300v190H.5z"></svg:path><svg:path fill="#000" d="M.5 63.833h300V190.5H.5z"></svg:path><svg:path fill="#FFF" d="M.5 127.166h300v63.333H.5z"></svg:path></svg:g>`,
})
export class CifEeIcon {
  readonly viewBox = input("0 0 301 191")
  readonly width = input("1.58em")
  readonly height = input("1em")
}
