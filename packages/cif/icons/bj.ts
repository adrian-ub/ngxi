import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifBjIcon],svg[cif-bj-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FCD116" d="M.5.5h300v200H.5z"></svg:path><svg:path fill="#E8112D" d="M.5 100.5h300v100H.5z"></svg:path><svg:path fill="#008751" d="M.5.5h120v200H.5z"></svg:path></svg:g>`,
})
export class CifBjIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
