import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifChIcon],svg[cif-ch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="red" d="M.5.5h300v300H.5z"></svg:path><svg:path fill="#FFF" d="M56.75 122.375h187.5v56.25H56.75z"></svg:path><svg:path fill="#FFF" d="M122.375 56.75h56.25v187.5h-56.25z"></svg:path></svg:g>`,
})
export class CifChIcon {
  readonly viewBox = input("0 0 301 301")
  readonly width = input("1em")
  readonly height = input("1em")
}
