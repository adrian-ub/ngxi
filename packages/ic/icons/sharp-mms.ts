import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpMmsIcon],svg[ic-sharp-mms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20l4-4h16zM5 14l3.5-4.5l2.5 3.01L14.5 8l4.5 6z"></svg:path>`,
})
export class IcSharpMmsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
