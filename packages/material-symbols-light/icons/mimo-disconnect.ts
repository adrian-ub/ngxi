import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMimoDisconnectIcon],svg[material-symbols-light-mimo-disconnect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.425 4.04l-.192 1.224l-2.456-2.456l.708-.708l18.684 18.685l-.707.707l-3.8-3.8h-.623l.769.77V20H7.192v-1.538l.77-.77H4.616q-.691 0-1.153-.462T3 16.077V5.616q0-.714.463-1.145t.962-.43M20.45 17.235L7.158 4h12.227q.69 0 1.153.463T21 5.616v10.461q0 .439-.16.708q-.161.269-.39.45"></svg:path>`,
})
export class MaterialSymbolsLightMimoDisconnectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
