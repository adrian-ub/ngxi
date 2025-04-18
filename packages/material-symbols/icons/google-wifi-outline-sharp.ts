import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGoogleWifiOutlineSharpIcon],svg[material-symbols-google-wifi-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.6 10h14.8l-.275-4H4.875zm-.125 2l-.325 5h15.7l-.325-5zM5 20l-.325-1H2L3 4h18l1 15h-2.675L19 20z"></svg:path>`,
})
export class MaterialSymbolsGoogleWifiOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
