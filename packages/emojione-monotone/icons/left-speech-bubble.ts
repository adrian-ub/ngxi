import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneLeftSpeechBubbleIcon],svg[emojione-monotone-left-speech-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11.517v29.794c0 3.598 2.937 6.517 6.563 6.517H38.13L48.52 59V47.827h6.918c3.624 0 6.563-2.919 6.563-6.517V11.517C62 7.918 59.062 5 55.438 5H8.563C4.937 5 2 7.918 2 11.517m41.794 14.896c0-2.313 1.888-4.189 4.219-4.189s4.219 1.876 4.219 4.189c0 2.315-1.888 4.19-4.219 4.19s-4.219-1.874-4.219-4.19m-16.013 0c0-2.313 1.89-4.189 4.219-4.189s4.219 1.876 4.219 4.189c0 2.315-1.89 4.19-4.219 4.19s-4.219-1.874-4.219-4.19m-16.012 0c0-2.313 1.89-4.189 4.219-4.189c2.331 0 4.219 1.876 4.219 4.189c0 2.315-1.888 4.19-4.219 4.19c-2.33.001-4.219-1.874-4.219-4.19"></svg:path>`,
})
export class EmojioneMonotoneLeftSpeechBubbleIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
