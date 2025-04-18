import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsUnsubscribeOutlineSharpIcon],svg[material-symbols-unsubscribe-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13L4 8v10h8q0 .525.075 1.013T12.3 20H2V4h20v7.7q-.45-.225-.962-.375T20 11.1V8zm0-2l8-5H4zm7 12q-2.075 0-3.537-1.463T14 18t1.463-3.537T19 13t3.538 1.463T24 18t-1.463 3.538T19 23m-3-4.5h6v-1h-6zM4 18V6z"></svg:path>`,
})
export class MaterialSymbolsUnsubscribeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
