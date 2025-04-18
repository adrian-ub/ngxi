import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifCgIcon],svg[cif-cg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#009543" d="M.5.5h300v200H.5z"></svg:path><svg:path fill="#FBDE4A" d="m.5 200.5l200-200h100v200z"></svg:path><svg:path fill="#DC241F" d="M300.5.5v200h-200z"></svg:path></svg:g>`,
})
export class CifCgIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
