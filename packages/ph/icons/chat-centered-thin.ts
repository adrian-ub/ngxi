import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredThinIcon],svg[ph-chat-centered-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h62.75l14.83 26a12 12 0 0 0 20.84 0l14.83-26H216a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 140a4 4 0 0 1-4 4h-65.07a4 4 0 0 0-3.47 2l-16 28a4 4 0 0 1-6.94 0l-16-28a4 4 0 0 0-3.47-2H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhChatCenteredThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
