import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiReferenceIcon],svg[ooui-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 10l-2.78-2.78L9.44 10V1H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2z"></svg:path>`,
})
export class OouiReferenceIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
