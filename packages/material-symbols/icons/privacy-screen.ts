import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPrivacyScreenIcon],svg[material-symbols-privacy-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11.6L9.6 4H4q-.825 0-1.413.588T2 6v5.6Zm0 7L16.575 4H12.4L2 14.425V18.6ZM3.4 20H20q.825 0 1.413-.588T22 18V6q0-.825-.588-1.413T20 4h-.6l-16 16Z"></svg:path>`,
})
export class MaterialSymbolsPrivacyScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
