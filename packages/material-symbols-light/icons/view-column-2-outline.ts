import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewColumn2OutlineIcon],svg[material-symbols-light-view-column-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20q-.69 0-1.153-.462t-.462-1.153V5.615q0-.69.462-1.152T15 4h2.77q.69 0 1.152.463q.463.462.463 1.153v12.769q0 .69-.463 1.153Q18.46 20 17.77 20zm-.615-14.385v12.77q0 .23.192.423T15 19h2.77q.23 0 .422-.192t.193-.424V5.616q0-.231-.193-.424T17.77 5H15q-.23 0-.423.192t-.192.423M6.23 20q-.69 0-1.153-.462q-.463-.463-.463-1.153V5.615q0-.69.463-1.152Q5.541 4 6.231 4H9q.69 0 1.153.463t.463 1.153v12.769q0 .69-.463 1.153T9 20zM5.616 5.615v12.77q0 .23.192.423T6.23 19H9q.23 0 .423-.192q.193-.193.193-.424V5.616q0-.231-.193-.424Q9.231 5 9 5H6.23q-.23 0-.422.192t-.192.423M18.385 5h-4zm-8.77 0h-4z"></svg:path>`,
})
export class MaterialSymbolsLightViewColumn2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
