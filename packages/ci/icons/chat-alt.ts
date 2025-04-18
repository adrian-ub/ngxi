import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciChatAltIcon],svg[ci-chat-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a2 2 0 0 1 2 2H4v11.177a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12Z"></svg:path><svg:path fill="currentColor" d="m14 22l-2.667-2.823H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9.177a2 2 0 0 1-2 2h-3.333L14 22Zm1.805-4.823H20V8H8v9.177h4.195L14 19.087l1.805-1.91Z"></svg:path>`,
})
export class CiChatAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
