import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredDuotoneIcon],svg[ph-chat-centered-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v128a8 8 0 0 1-8 8h-65.07l-16 28a8 8 0 0 1-13.9 0l-16-28H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h60.43l13.68 23.94a16 16 0 0 0 27.78 0L155.57 200H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 144h-65.07a8 8 0 0 0-7 4l-16 28l-16-28a8 8 0 0 0-7-4H40V56h176Z"></svg:path></svg:g>`,
})
export class PhChatCenteredDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
