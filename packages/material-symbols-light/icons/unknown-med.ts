import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightUnknownMedIcon],svg[material-symbols-light-unknown-med-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12.5q-.417 0-.708-.291Q3 11.918 3 11.502t.292-.709T4 10.5h6q.417 0 .708.291q.292.291.292.707t-.292.709T10 12.5zm9.98 0q-.416 0-.707-.291q-.292-.291-.292-.707t.292-.709t.708-.293h6q.416 0 .708.291t.292.707t-.292.709t-.708.293z"></svg:path>`,
})
export class MaterialSymbolsLightUnknownMedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
