import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsChatBubbleOvalLeft16SolidIcon],svg[heroicons-chat-bubble-oval-left-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 8c0-3.43 3.262-6 7-6s7 2.57 7 6s-3.262 6-7 6q-.635 0-1.241-.094c-.9.574-1.941.948-3.06 1.06a.75.75 0 0 1-.713-1.14a3.5 3.5 0 0 0 .469-1.26C1.979 11.486 1 9.86 1 8" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsChatBubbleOvalLeft16SolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
