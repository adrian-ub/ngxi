import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifJpIcon],svg[cif-jp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFF" d="M.5.5h300v200H.5z"></svg:path><svg:circle cx="150.5" cy="100.5" r="60" fill="#BC002D"></svg:circle></svg:g>`,
})
export class CifJpIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
