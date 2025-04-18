import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMarkChatUnreadSharpIcon],svg[material-symbols-light-mark-chat-unread-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.002 6.462q-1.04 0-1.771-.729t-.731-1.77t.729-1.77t1.769-.731t1.771.728t.731 1.77t-.728 1.77t-1.77.732M3 20.077V3h11.6q-.061.25-.071.49t-.006.51q.08 1.956 1.379 3.209Q17.2 8.46 19 8.46q.512 0 1.027-.125T21 7.961V17H6.077z"></svg:path>`,
})
export class MaterialSymbolsLightMarkChatUnreadSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
