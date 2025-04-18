import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLandscapeRoundedIcon],svg[material-symbols-landscape-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.2 16.4l4-5.325q.15-.2.363-.3t.437-.1t.438.1t.362.3l3.4 4.525q.15.2.35.3t.45.1q.625 0 .9-.562t-.1-1.063L10.7 11.6q-.2-.275-.2-.6t.2-.6l2.5-3.325q.15-.2.363-.3t.437-.1t.438.1t.362.3l7 9.325q.375.5.1 1.05T21 18H3q-.625 0-.9-.55t.1-1.05"></svg:path>`,
})
export class MaterialSymbolsLandscapeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
