import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOfflineShareRoundedIcon],svg[material-symbols-light-offline-share-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.116 21.385q-.691 0-1.153-.463q-.463-.462-.463-1.153V6.04q0-.214.143-.357T6 5.538t.357.144t.143.356V19.77q0 .231.192.423t.423.193h8.116q.213 0 .357.143q.143.143.143.357q0 .213-.143.356q-.144.144-.357.144zm3-3q-.691 0-1.153-.463T8.5 16.769V4q0-.69.463-1.153t1.153-.462h6.769q.69 0 1.153.462T18.5 4v12.77q0 .69-.462 1.152t-1.153.463zm-.616-3.5h8v-9h-8zm5.054-4.674h-2.688v1.308q0 .19-.126.317t-.317.126t-.316-.126t-.126-.317v-1.5q0-.31.191-.5q.192-.192.501-.192h2.88l-.693-.694q-.13-.13-.139-.304q-.01-.175.139-.323q.148-.148.313-.148q.166 0 .314.148l1.47 1.471q.132.13.132.292t-.131.292l-1.472 1.472q-.128.128-.303.138t-.324-.138t-.148-.314t.148-.313z"></svg:path>`,
})
export class MaterialSymbolsLightOfflineShareRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
