import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifNgIcon],svg[cif-ng-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#008751" d="M.5.5h300v150H.5z"></svg:path><svg:path fill="#FFF" d="M100.5.5h100v150h-100z"></svg:path></svg:g>`,
})
export class CifNgIcon {
  readonly viewBox = input("0 0 301 151")
  readonly width = input("2em")
  readonly height = input("1em")
}
