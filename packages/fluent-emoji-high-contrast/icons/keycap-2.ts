import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastKeycap2Icon],svg[fluent-emoji-high-contrast-keycap-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.95 12.075c.55-.655 1.04-.808 1.35-.823a1.25 1.25 0 0 1 .946.386c.272.271.453.664.452 1.121c-.002.44-.177 1.068-.843 1.784c-.631.677-1.467 1.551-2.333 2.457c-1.205 1.26-2.47 2.583-3.321 3.522c-1.346 1.484-.221 3.728 1.66 3.728h7.019a1.75 1.75 0 1 0 0-3.5h-4.1l1.191-1.246c.871-.91 1.735-1.813 2.445-2.576c2.443-2.624 2.207-5.867.302-7.768c-.913-.911-2.194-1.474-3.593-1.404c-1.423.071-2.776.785-3.854 2.067a1.75 1.75 0 1 0 2.68 2.252"></svg:path><svg:path d="M6 1a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastKeycap2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
