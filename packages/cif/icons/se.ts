import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifSeIcon],svg[cif-se-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#005293" d="M.5.75h300v187.5H.5z"></svg:path><svg:path fill="#FECB00" d="M94.25.75h37.5v187.5h-37.5z"></svg:path><svg:path fill="#FECB00" d="M.5 75.75h300v37.5H.5z"></svg:path></svg:g>`,
})
export class CifSeIcon {
  readonly viewBox = input("0 0 301 189")
  readonly width = input("1.6em")
  readonly height = input("1em")
}
