import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCallRinging01Icon],svg[hugeicons-call-ringing-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.713 13.594c1.48.39 2.51.885 3.446 1.49c1.384.896 1.978 2.51 1.815 4.068c-.07.658-.6.973-1.215.802l-1.389-.384c-1.1-.305-1.65-.457-1.986-.86s-.375-.959-.454-2.07zm0 0c-2.997-.791-6.426-.792-9.426 0m0 0c-1.48.39-2.51.885-3.446 1.49c-1.384.896-1.978 2.51-1.815 4.068c.07.658.6.973 1.215.802l1.389-.384c1.1-.305 1.65-.457 1.986-.86s.375-.959.454-2.07zM12 4v2.857m6 .714L15.6 9M6 7.571L8.4 9" color="currentColor"></svg:path>`,
})
export class HugeiconsCallRinging01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
