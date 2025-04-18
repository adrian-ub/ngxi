import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceSettingScrewdriverScrewdriverScrewToolSettingsHandIcon],svg[streamline-interface-setting-screwdriver-screwdriver-screw-tool-settings-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.85 7.037L6.973 9.16a.49.49 0 0 1 0 .693l-3.125 3.125a2 2 0 0 1-2.829 0h0a2 2 0 0 1 0-2.828l3.126-3.126a.49.49 0 0 1 .707.014ZM5.91 8.09l4.48-4.48m.35.34l-.69-.69V1.88L12.12.5l1.38 1.38l-1.38 2.07h-1.38z"></svg:path>`,
})
export class StreamlineInterfaceSettingScrewdriverScrewdriverScrewToolSettingsHandIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
