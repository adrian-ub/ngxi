import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifZaIcon],svg[cif-za-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="cifZa0" d="M0 0h300v200H0z"></svg:path><svg:path id="cifZa1" d="m0 0l150 100L0 200"></svg:path></svg:defs><svg:g fill="none" fill-rule="evenodd"><svg:mask id="cifZa2" fill="#fff"><svg:use href="#cifZa0"></svg:use></svg:mask><svg:g mask="url(#cifZa2)"><svg:path fill="#002395" fill-rule="nonzero" d="M0 0v200h300V0z"></svg:path><svg:path fill="#DE3831" fill-rule="nonzero" d="M0 0v100h300V0z"></svg:path><svg:path fill="#000" fill-rule="nonzero" stroke="#FFF" stroke-width="66.667" d="m0 0l150 100L0 200m146-100h154"></svg:path><svg:mask id="cifZa3" fill="#fff"><svg:use href="#cifZa1"></svg:use></svg:mask><svg:path fill="#000" fill-rule="nonzero" stroke="#FFB612" stroke-width="60" d="m0 0l150 100L0 200" mask="url(#cifZa3)"></svg:path><svg:path stroke="#007A4D" stroke-width="40" d="m0 0l150 100L0 200m150-100h150"></svg:path></svg:g></svg:g>`,
})
export class CifZaIcon {
  readonly viewBox = input("0 0 300 200")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
