import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifBhIcon],svg[cif-bh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFF" d="M.5.5h300v180H.5"></svg:path><svg:path fill="#CE1126" d="M300.5.5h-226l46 18l-46 18l46 18l-46 18l46 18l-46 18l46 18l-46 18l46 18l-46 18h226"></svg:path></svg:g>`,
})
export class CifBhIcon {
  readonly viewBox = input("0 0 301 181")
  readonly width = input("1.67em")
  readonly height = input("1em")
}
