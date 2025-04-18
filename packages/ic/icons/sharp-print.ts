import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPrintIcon],svg[ic-sharp-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8H2v9h4v4h12v-4h4zm-6 11H8v-5h8zm3-7c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m-1-9H6v4h12z"></svg:path>`,
})
export class IcSharpPrintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
