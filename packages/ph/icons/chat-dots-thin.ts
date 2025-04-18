import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChatDotsThinIcon],svg[ph-chat-dots-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 128a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-52-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m88 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m56-56v128a12 12 0 0 1-12 12H81.49l-33.73 29.13A11.9 11.9 0 0 1 40 236a12.2 12.2 0 0 1-5.1-1.14A11.89 11.89 0 0 1 28 224V64a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v160a4 4 0 0 0 6.56 3.08L77.38 197a4 4 0 0 1 2.62-1h136a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhChatDotsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
