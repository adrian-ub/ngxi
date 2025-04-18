import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMimoDisconnectOutlineIcon],svg[material-symbols-light-mimo-disconnect-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.425 4.04l.96.96h-.77q-.23 0-.423.192T4 5.616v10.461q0 .27.173.442q.173.173.443.173H15.7L1.777 2.808l.708-.708l18.684 18.685l-.707.707l-3.723-3.8h-.7l.769.77V20H7.192v-1.538l.77-.77H4.616q-.691 0-1.153-.462T3 16.077V5.616q0-.714.463-1.145t.962-.43M19.385 4q.69 0 1.153.463T21 5.616v10.461q0 .323-.141.64q-.142.318-.409.518l-.45-.45V5.615q0-.269-.173-.442T19.385 5H8.215l-1-1zm-9.689 6.727"></svg:path>`,
})
export class MaterialSymbolsLightMimoDisconnectOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
