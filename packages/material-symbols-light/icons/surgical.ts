import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSurgicalIcon],svg[material-symbols-light-surgical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.65 14.58l-2.327-2.326l7.03-7.031q.243-.242.569-.242t.569.242l1.19 1.19q.242.243.242.569t-.242.568zm1.196 4.632l1-1h8.289v1zm-7.136.019q-.689 0-1.338-.2t-1.218-.596l5.106-5.1l1.888 1.888q.216.215.348.483q.133.267.133.575t-.123.587t-.339.495l-.475.495q-.665.684-1.554 1.028t-1.828.345z"></svg:path>`,
})
export class MaterialSymbolsLightSurgicalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
