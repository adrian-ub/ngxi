import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceImageIcon],svg[guidance-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M22.5 18.5h-.304c-.94 0-1.877-.274-2.564-.917a11 11 0 0 1-2.061-2.624l-.82-1.459h-.5l-.822 1.459a11 11 0 0 1-1.75 2.32a4.6 4.6 0 0 1-1.919-1.062a15.3 15.3 0 0 1-2.868-3.674L7.75 10.5h-.498l-1.141 2.043a15.3 15.3 0 0 1-3.286 4.053a3.5 3.5 0 0 1-1.325.722m0 5.182v-21h21v21zm15-13a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"></svg:path>`,
})
export class GuidanceImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
