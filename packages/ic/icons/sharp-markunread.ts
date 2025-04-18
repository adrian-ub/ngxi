import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpMarkunreadIcon],svg[ic-sharp-markunread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H2v16h20zm-2 4l-8 5l-8-5V6l8 5l8-5z"></svg:path>`,
})
export class IcSharpMarkunreadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
