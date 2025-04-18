import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiChatSolidIcon],svg[mynaui-chat-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25A9.75 9.75 0 0 0 2.25 12c0 1.558.366 3.033 1.018 4.342c.104.21.114.523-.005 1.01a9 9 0 0 1-.22.729l-.03.086c-.074.22-.154.46-.214.683c-.382 1.427.924 2.733 2.35 2.351c.224-.06.463-.14.684-.214l.086-.03a9 9 0 0 1 .729-.22c.487-.12.8-.11 1.01-.005A9.7 9.7 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25"></svg:path>`,
})
export class MynauiChatSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
