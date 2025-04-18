import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifHnIcon],svg[cif-hn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#0073CF" d="M.5.5h300v150H.5z"></svg:path><svg:path fill="#FFF" d="M.5 50.5h300v50H.5z"></svg:path><svg:path fill="#0073CF" d="m142.575 72.925l4.898 3.558l-1.871 5.759l4.898-3.559l4.898 3.559l-1.871-5.759l4.899-3.558h-6.055l-1.871-5.758l-1.871 5.758zm41.666-13.334l4.899 3.559l-1.871 5.758l4.898-3.559l4.898 3.559l-1.871-5.758l4.899-3.559h-6.055l-1.871-5.758l-1.871 5.758zm0 25l4.899 3.559l-1.871 5.758l4.898-3.559l4.898 3.559l-1.871-5.758l4.899-3.559h-6.055l-1.871-5.758l-1.871 5.758zm-83.333 0l4.898 3.559l-1.871 5.758l4.899-3.559l4.898 3.559l-1.871-5.758l4.898-3.559h-6.055l-1.87-5.758l-1.871 5.758zm0-25l4.898 3.559l-1.871 5.758l4.899-3.559l4.898 3.559l-1.871-5.758l4.898-3.559h-6.055l-1.87-5.758l-1.871 5.758z"></svg:path></svg:g>`,
})
export class CifHnIcon {
  readonly viewBox = input("0 0 301 151")
  readonly width = input("2em")
  readonly height = input("1em")
}
