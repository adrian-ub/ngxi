import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifNeIcon],svg[cif-ne-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#0DB02B" d="M.5.928h300v257.143H.5z"></svg:path><svg:path fill="#FFF" d="M.5.928h300v171.429H.5z"></svg:path><svg:path fill="#E05206" d="M.5.928h300v85.714H.5z"></svg:path><svg:circle cx="150.5" cy="129.5" r="36.429" fill="#E05206"></svg:circle></svg:g>`,
})
export class CifNeIcon {
  readonly viewBox = input("0 0 301 259")
  readonly width = input("1.17em")
  readonly height = input("1em")
}
