import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifBwIcon],svg[cif-bw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#75AADB" d="M.5.5h300v200H.5z"></svg:path><svg:path fill="#FFF" d="M.5 75.5h300v50H.5z"></svg:path><svg:path fill="#000" d="M.5 83.833h300v33.333H.5z"></svg:path></svg:g>`,
})
export class CifBwIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
