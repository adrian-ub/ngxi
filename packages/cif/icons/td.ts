import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifTdIcon],svg[cif-td-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#002664" d="M.5.5h300v200H.5z"></svg:path><svg:path fill="#FECB00" d="M100.5.5h200v200h-200z"></svg:path><svg:path fill="#C60C30" d="M200.5.5h100v200h-100z"></svg:path></svg:g>`,
})
export class CifTdIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
