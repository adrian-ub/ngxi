import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMarkUnreadChatAltSharpIcon],svg[material-symbols-light-mark-unread-chat-alt-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.002 6.462q-1.04 0-1.771-.729t-.731-1.77t.729-1.77t1.769-.731t1.771.728t.731 1.77t-.728 1.77t-1.77.732M3 20.077V3h11.6q-.061.25-.071.49t-.006.51q.029.729.235 1.354t.55 1.146H6.5v1h9.942q.495.462 1.161.712t1.397.25q.512 0 1.027-.125T21 7.962V17H6.077zM6.5 10.5h11v-1h-11zm0 3h7v-1h-7z"></svg:path>`,
})
export class MaterialSymbolsLightMarkUnreadChatAltSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
