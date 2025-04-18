import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDeviceBandSharpIcon],svg[material-symbols-light-device-band-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.866 21V8.73h-.693V6.77h.693V3h6.25v3.77h.692v1.96h-.692V21z"></svg:path>`,
})
export class MaterialSymbolsLightDeviceBandSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
