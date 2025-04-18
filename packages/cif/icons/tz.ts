import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifTzIcon],svg[cif-tz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="cifTz0" d="M.5.5h300v200H.5z"></svg:path></svg:defs><svg:g fill="none" fill-rule="evenodd"><svg:path fill="#1EB53A" fill-rule="nonzero" d="M.5.5h300l-300 200"></svg:path><svg:path fill="#00A3DD" fill-rule="nonzero" d="M.5 200.5h300V.5"></svg:path><svg:mask id="cifTz1" fill="#fff"><svg:use href="#cifTz0"></svg:use></svg:mask><svg:path stroke="#FCD116" stroke-width="70" d="m.5 200.5l300-200" mask="url(#cifTz1)"></svg:path><svg:mask id="cifTz2" fill="#fff"><svg:use href="#cifTz0"></svg:use></svg:mask><svg:path stroke="#000" stroke-width="50" d="m.5 200.5l300-200" mask="url(#cifTz2)"></svg:path></svg:g>`,
})
export class CifTzIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
