import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineChatTwoBubblesOvalSolidIcon],svg[streamline-chat-two-bubbles-oval-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.515 0A5.515 5.515 0 0 0 .921 8.565l-.737 1.972a.3.3 0 0 0 .335.4l2.583-.465q.385.188.792.314a5.75 5.75 0 0 1 6.897-6.89A5.51 5.51 0 0 0 5.515 0m7.167 6.318a4.5 4.5 0 0 0-6.705.379a4.5 4.5 0 0 0 5.493 6.848l2.012.362a.3.3 0 0 0 .334-.4l-.568-1.519a4.5 4.5 0 0 0-.566-5.67" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChatTwoBubblesOvalSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
