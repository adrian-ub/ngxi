import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredIcon],svg[ph-chat-centered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h60.43l13.68 23.94a16 16 0 0 0 27.78 0L155.57 200H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 144h-65.07a8 8 0 0 0-7 4l-16 28l-16-28a8 8 0 0 0-7-4H40V56h176Z"></svg:path>`,
})
export class PhChatCenteredIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
