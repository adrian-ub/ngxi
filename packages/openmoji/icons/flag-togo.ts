import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagTogoIcon],svg[openmoji-flag-togo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fcea2b" d="M5 17h62v38H5z"></svg:path><svg:path fill="#5c9e31" d="M5 32h62v8H5zm0 15h62v8H5zm0-30h62v8H5z"></svg:path><svg:path fill="#d22f27" d="M5 17h23v23H5z"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="m14.415 33l2.655-8l2.289 7.878L13 28.131l8-.198z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagTogoIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
