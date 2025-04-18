import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifIeIcon],svg[cif-ie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#009B48" d="M.5.5h100v150H.5z"></svg:path><svg:path fill="#FFF" d="M100.5.5h100v150h-100z"></svg:path><svg:path fill="#FF7900" d="M200.5.5h100v150h-100z"></svg:path></svg:g>`,
})
export class CifIeIcon {
  readonly viewBox = input("0 0 301 151")
  readonly width = input("2em")
  readonly height = input("1em")
}
