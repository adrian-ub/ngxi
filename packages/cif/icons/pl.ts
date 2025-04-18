import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifPlIcon],svg[cif-pl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFF" d="M.5.75h300v187.5H.5z"></svg:path><svg:path fill="#DC143C" d="M.5 94.5h300v93.75H.5z"></svg:path></svg:g>`,
})
export class CifPlIcon {
  readonly viewBox = input("0 0 301 189")
  readonly width = input("1.6em")
  readonly height = input("1em")
}
