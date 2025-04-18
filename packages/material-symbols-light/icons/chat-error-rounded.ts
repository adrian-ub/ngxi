import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightChatErrorRoundedIcon],svg[material-symbols-light-chat-error-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.077 17l-1.704 1.704q-.379.379-.876.174T3 18.133V4.616q0-.691.463-1.153T4.616 3h14.769q.69 0 1.153.463T21 4.616v10.769q0 .69-.462 1.153T19.385 17zM12 10.708l2.266 2.246q.14.14.343.13q.204-.009.345-.15t.14-.334t-.14-.334L12.708 10l2.246-2.266q.14-.14.13-.344q-.009-.204-.15-.344t-.334-.14t-.334.14L12 9.292L9.734 7.046q-.14-.14-.343-.13q-.204.009-.345.15t-.14.334t.14.335L11.292 10l-2.246 2.266q-.14.14-.13.343q.009.204.15.345t.334.14t.335-.14z"></svg:path>`,
})
export class MaterialSymbolsLightChatErrorRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
