import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpFlashOnIcon],svg[ic-sharp-flash-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2v11h3v9l7-12h-4l3-8z"></svg:path>`,
})
export class IcSharpFlashOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
