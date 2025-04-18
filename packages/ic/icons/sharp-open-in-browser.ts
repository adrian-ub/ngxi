import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpOpenInBrowserIcon],svg[ic-sharp-open-in-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4v16h6v-2H5V8h14v10h-4v2h6V4zm9 6l-4 4h3v6h2v-6h3z"></svg:path>`,
})
export class IcSharpOpenInBrowserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
