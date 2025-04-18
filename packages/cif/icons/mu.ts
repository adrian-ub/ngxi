import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifMuIcon],svg[cif-mu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#EA2839" d="M.5.5h300v50H.5z"></svg:path><svg:path fill="#1A206D" d="M.5 50.5h300v50H.5z"></svg:path><svg:path fill="#FFD500" d="M.5 100.5h300v50H.5z"></svg:path><svg:path fill="#00A551" d="M.5 150.5h300v50H.5z"></svg:path></svg:g>`,
})
export class CifMuIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
