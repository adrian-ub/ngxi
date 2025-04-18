import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGMobiledataIcon],svg[material-symbols-light-g-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.116 16.616q-.691 0-1.153-.463T7.5 15V9q0-.69.463-1.153t1.153-.463H14q.46 0 .826.27q.366.271.366.73H9.116q-.27 0-.443.174Q8.5 8.73 8.5 9v6q0 .27.173.442q.173.173.443.173h4.769q.269 0 .442-.173T14.5 15v-2.5h-2.384v-1H15.5V15q0 .69-.462 1.153t-1.154.463z"></svg:path>`,
})
export class MaterialSymbolsLightGMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
