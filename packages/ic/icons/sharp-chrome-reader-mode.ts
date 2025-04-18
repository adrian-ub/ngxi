import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpChromeReaderModeIcon],svg[ic-sharp-chrome-reader-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM23 4H1v17h22zm-2 15h-9V6h9z"></svg:path>`,
})
export class IcSharpChromeReaderModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
