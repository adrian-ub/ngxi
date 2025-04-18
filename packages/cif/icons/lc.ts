import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifLcIcon],svg[cif-lc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#6CF" d="M.5.5h300v150H.5z"></svg:path><svg:path fill="#FFF" d="m100.5 137.5l50-7l50 7l-50-123.5z"></svg:path><svg:path fill="#000" d="m107.25 137.5l43.25-7l43.25 7l-43.25-107z"></svg:path><svg:path fill="#FCD116" d="M100.5 137.5h100l-50-62z"></svg:path></svg:g>`,
})
export class CifLcIcon {
  readonly viewBox = input("0 0 301 151")
  readonly width = input("2em")
  readonly height = input("1em")
}
