import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhEggplantIcon],svg[whh-eggplant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 64q-41 0-86 55q54 48 54 105q0 72-23 159.5t-64 176T772 732T643 880.5t-153.5 104T320 1024q-87 0-160.5-43T43 864.5T0 704t43-160.5T159.5 427T320 384q45 0 87.5-17t72-41.5t52-52T565 224t11-32q0-42 30.5-72T679 77t89-13q34 0 72 14q24-26 59.5-45T958 7t31-7q15 0 25 9.5t10 23t-9 22.5t-23 9"></svg:path>`,
})
export class WhhEggplantIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
