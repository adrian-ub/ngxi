import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTerminalRoundedIcon],svg[material-symbols-light-terminal-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm0-1h14.769q.23 0 .423-.192t.192-.424V8H4v9.385q0 .23.192.423t.423.192m4.772-5L7.14 10.754q-.146-.146-.153-.354t.16-.354q.145-.14.353-.133t.354.153l2.369 2.369q.242.242.242.565t-.242.566l-2.389 2.388q-.14.14-.34.134t-.348-.153q-.14-.14-.14-.335t.14-.334zM13 16.5q-.213 0-.357-.143T12.5 16t.143-.357T13 15.5h4q.214 0 .357.143T17.5 16t-.143.357T17 16.5z"></svg:path>`,
})
export class MaterialSymbolsLightTerminalRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
