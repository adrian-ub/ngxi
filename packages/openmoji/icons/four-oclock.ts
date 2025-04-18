import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFourOclockIcon],svg[openmoji-four-oclock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiFourOclock0" d="M36 18.989v17m10.057 5.791l-10-5.774"></svg:path></svg:defs><svg:g fill="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="35.958" cy="35.99" r="23"></svg:circle><svg:use href="#openmojiFourOclock0"></svg:use></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="35.958" cy="35.99" r="23"></svg:circle><svg:use href="#openmojiFourOclock0"></svg:use></svg:g>`,
})
export class OpenmojiFourOclockIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
