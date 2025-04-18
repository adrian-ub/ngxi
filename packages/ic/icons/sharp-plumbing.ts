import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPlumbingIcon],svg[ic-sharp-plumbing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.16 5.64l3.54 3.54a3 3 0 0 0 0-4.24L16.16 1.4l-4.24 4.24l2.12 2.12zM4.842 12.708l3.535-3.535l2.122 2.12l-3.536 3.536z"></svg:path><svg:path fill="currentColor" d="m15.45 7.76l-1.41 1.41l-4.25-4.24l-2.12 2.12l4.24 4.24l-8.49 8.49l2.83 2.83L16.86 12l.71.71l1.41-1.41z"></svg:path>`,
})
export class IcSharpPlumbingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
