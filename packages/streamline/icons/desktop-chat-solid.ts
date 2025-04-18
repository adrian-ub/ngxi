import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDesktopChatSolidIcon],svg[streamline-desktop-chat-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.429 4.648a1 1 0 0 0 1 1h2.214v1.208a.5.5 0 0 0 .777.416l2.437-1.624H13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H6.429a1 1 0 0 0-1 1zM8.515 11H12.5A1.5 1.5 0 0 0 14 9.5V8a1 1 0 1 0-2 0v1H2V3h1a1 1 0 0 0 0-2H1.5A1.5 1.5 0 0 0 0 2.5v7A1.5 1.5 0 0 0 1.5 11h3.985l-.537 1.5H4A.75.75 0 0 0 4 14h6a.75.75 0 0 0 0-1.5h-.948z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineDesktopChatSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
