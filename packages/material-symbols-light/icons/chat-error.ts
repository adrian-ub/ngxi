import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightChatErrorIcon],svg[material-symbols-light-chat-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20.077V4.616q0-.691.463-1.153T4.615 3h14.77q.69 0 1.152.463T21 4.616v10.769q0 .69-.463 1.153T19.385 17H6.077zm6.4-6.789l2.6-2.58l2.6 2.58l.688-.688l-2.58-2.6l2.58-2.6l-.688-.689L12 9.293l-2.6-2.58l-.689.688l2.581 2.6l-2.58 2.6z"></svg:path>`,
})
export class MaterialSymbolsLightChatErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
