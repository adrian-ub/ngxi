import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityTalkBubblesOutlineBadgedIcon],svg[clarity-talk-bubbles-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 26a1 1 0 0 1-1 1H8c-.22 0-.43.2-.61.33L4 30V14a1 1 0 0 1 1-1h3.86v-2H5a3 3 0 0 0-3 3v18a1 1 0 0 0 .56.89a1 1 0 0 0 1-.1L8.71 29h13.44A2.77 2.77 0 0 0 25 26.13V25h-2Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:path><svg:path fill="currentColor" d="M32 13.22v9.72l-3.5-2.73a1 1 0 0 0-.61-.21H14a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.5a7.5 7.5 0 0 1 .28-2H14a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h13.55l4.78 3.71a1 1 0 0 0 1 .11a1 1 0 0 0 .57-.9V12.37a7.5 7.5 0 0 1-1.9.85" class="clr-i-outline--badged clr-i-outline-path-2--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTalkBubblesOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
