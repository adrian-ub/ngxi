import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagMicronesiaIcon],svg[openmoji-flag-micronesia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#92d3f5" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="m41.523 34.356l4.954 1.689l-4.878 1.456l2.939-4.045l.122 5.088zm-11.046 3.288l-4.954-1.689l4.878-1.456l-2.939 4.045l-.122-5.088zm3.879-7.167l1.689-4.954l1.456 4.878l-4.045-2.939l5.088-.122zm3.288 11.046l-1.689 4.954l-1.456-4.878l4.045 2.939l-5.088.122z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagMicronesiaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
