import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifPwIcon],svg[cif-pw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#4AADD6" d="M.5.75h300v187.5H.5z"></svg:path><svg:circle cx="131.75" cy="94.5" r="56.25" fill="#FFDE00"></svg:circle></svg:g>`,
})
export class CifPwIcon {
  readonly viewBox = input("0 0 301 189")
  readonly width = input("1.6em")
  readonly height = input("1em")
}
