import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifMvIcon],svg[cif-mv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#D21034" d="M.5.5h300v200H.5z"></svg:path><svg:path fill="#007E3A" d="M50.5 50.5h200v100h-200z"></svg:path><svg:circle cx="163" cy="100.5" r="33.333" fill="#FFF"></svg:circle><svg:circle cx="175.5" cy="100.5" r="33.333" fill="#007E3A"></svg:circle></svg:g>`,
})
export class CifMvIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
