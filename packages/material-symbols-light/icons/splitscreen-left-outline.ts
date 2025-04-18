import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSplitscreenLeftOutlineIcon],svg[material-symbols-light-splitscreen-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.23 20q-.69 0-1.152-.462t-.463-1.153V5.615q0-.69.463-1.152T6.23 4H9q.69 0 1.153.463t.462 1.152v12.77q0 .69-.462 1.152T9 20zM15 20q-.69 0-1.153-.462t-.462-1.153V5.615q0-.69.462-1.152T15 4h2.77q.69 0 1.152.463t.463 1.152v12.77q0 .69-.463 1.152T17.77 20zm3.385-14.385q0-.23-.193-.423T17.77 5H15q-.23 0-.423.192t-.192.423v12.77q0 .23.192.423T15 19h2.77q.23 0 .422-.192t.193-.423zm-4 13.385h4z"></svg:path>`,
})
export class MaterialSymbolsLightSplitscreenLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
