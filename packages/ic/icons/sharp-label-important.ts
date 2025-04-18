import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpLabelImportantIcon],svg[ic-sharp-label-important-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18.99h12.04L21 12l-4.97-7H4l5 7z"></svg:path>`,
})
export class IcSharpLabelImportantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
