import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsYoutubeShortsIcon],svg[proicons-youtube-shorts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M12.834 3.186a3.627 3.627 0 0 1 3.627 6.282l-.74.426a3.626 3.626 0 0 1 1.935 6.766l-7.02 4.053a3.626 3.626 0 1 1-3.627-6.28l.739-.428A3.627 3.627 0 0 1 5.814 7.24z"></svg:path><svg:path fill="currentColor" d="M13.992 11.016L11.2 9.271c-.74-.463-1.7.07-1.7.942v3.49c0 .873.96 1.405 1.7.943l2.792-1.746a1.11 1.11 0 0 0 0-1.884"></svg:path></svg:g>`,
})
export class ProiconsYoutubeShortsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
