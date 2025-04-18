import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSwipeLeft06Icon],svg[hugeicons-swipe-left-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 4.5h6m-6 0c0-.7 1.995-2.008 2.5-2.5M15 4.5c0 .7 1.995 2.008 2.5 2.5M6.512 13.515V3.486a1.489 1.489 0 0 1 2.98 0v5.202m0 0v2.324m0-2.324c.804-1.118 2.607-.746 2.99.993q.01.043.016.087m.015 1.24v-1.003a2 2 0 0 0-.015-.237m0 0c.493-1.35 2.758-.835 3.004 1.093m0 0v1.146m0-1.146c.404-1.49 3.056-.449 2.999 1.294v3.178c-.003 1.726-.291 2.978-1.318 4.007c-.948 1.132-.724 1.766-.748 2.662M6.512 8.99c-1.319 1.194-2.816 2.825-3.007 3.212c-.889 1.352-.573 2.413.691 4.215c.94 1.34 2.202 2.836 2.268 2.91c.673.762.541 1.368.541 2.663" color="currentColor"></svg:path>`,
})
export class HugeiconsSwipeLeft06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
