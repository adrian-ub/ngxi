import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifGhIcon],svg[cif-gh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#006B3F" d="M.5.5h300v200H.5"></svg:path><svg:path fill="#FCD116" d="M.5.5h300v133.333H.5"></svg:path><svg:path fill="#CE1126" d="M.5.5h300v66.667H.5"></svg:path><svg:path fill="#000" d="M114.5 92.5h70.667L128.5 133.833L149.834 66.5l22.666 67.333"></svg:path></svg:g>`,
})
export class CifGhIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
