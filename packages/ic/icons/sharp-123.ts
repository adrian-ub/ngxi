import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharp123Icon],svg[ic-sharp-123-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15H5.5v-4.5H4V9h3zm6.5-1.5h-3v-1h3V9H9v1.5h3v1H9V15h4.5zm6 1.5V9H15v1.5h3v1h-2v1h2v1h-3V15z"></svg:path>`,
})
export class IcSharp123Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
