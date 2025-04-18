import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibRubygemsIcon],svg[cib-rubygems-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.411 10.531l-3.958 3.938l9.589 9.573l3.943-3.938l5.63-5.635l-3.948-3.948v-.016H10.401zM16 0L2.042 8v16L16 32l13.958-8V8zm11.292 22.469L16 28.974L4.708 22.469V9.495L16 2.985l11.292 6.51z"></svg:path>`,
})
export class CibRubygemsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
