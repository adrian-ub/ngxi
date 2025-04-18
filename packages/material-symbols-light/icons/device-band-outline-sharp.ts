import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDeviceBandOutlineSharpIcon],svg[material-symbols-light-device-band-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.866 21V8.73h-.693V6.77h.693V3h6.25v3.77h.692v1.96h-.692V21zm1-12.75V20h4.25V8.25zm0-1h4.25V4h-4.25zm0 1h4.25zm0-1h4.25z"></svg:path>`,
})
export class MaterialSymbolsLightDeviceBandOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
