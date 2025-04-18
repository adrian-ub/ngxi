import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifMgIcon],svg[cif-mg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFF" d="M.5.5h300v200H.5z"></svg:path><svg:path fill="#FC3D32" d="M100.5.5h200v100h-200z"></svg:path><svg:path fill="#007E3A" d="M100.5 100.5h200v100h-200z"></svg:path></svg:g>`,
})
export class CifMgIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
