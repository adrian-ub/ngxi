import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOfflineShareOutlineIcon],svg[material-symbols-light-offline-share-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.116 21.385q-.691 0-1.153-.463q-.463-.462-.463-1.153V5.54h1v14.23q0 .231.192.423t.423.193h8.616v1zm3-3q-.691 0-1.153-.463T8.5 16.769V4q0-.69.463-1.153t1.153-.462h6.769q.69 0 1.153.462T18.5 4v12.77q0 .69-.462 1.152t-1.153.463zm-.616-2.5v.884q0 .231.192.423t.423.193h6.77q.23 0 .423-.193t.192-.423v-.884zm0-1h8v-9h-8zm1.48-2.924V10.02q0-.31.192-.5q.192-.192.501-.192h2.88L13.546 8.32l.627-.627L16.25 9.77l-2.077 2.077l-.627-.627l1.008-1.008h-2.688v1.75zM9.5 4.885h8V4q0-.23-.192-.423q-.193-.192-.424-.192h-6.768q-.231 0-.424.192T9.5 4zm0 0v-1.5zm0 11v1.5z"></svg:path>`,
})
export class MaterialSymbolsLightOfflineShareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
