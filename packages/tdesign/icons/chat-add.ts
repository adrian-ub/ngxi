import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChatAddIcon],svg[tdesign-chat-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 0v3h3v2h-3v3h-2V5h-3V3h3V0zM1.5 2H14v2H3.5v14.296L6.124 16H20.5v-6h2v8H6.876L1.5 22.704z"></svg:path>`,
})
export class TdesignChatAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
