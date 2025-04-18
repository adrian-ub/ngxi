import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifNlIcon],svg[cif-nl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#21468B" d="M.5.5h300v200H.5z"></svg:path><svg:path fill="#FFF" d="M.5.5h300v133.333H.5z"></svg:path><svg:path fill="#AE1C28" d="M.5.5h300v66.667H.5z"></svg:path></svg:g>`,
})
export class CifNlIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
