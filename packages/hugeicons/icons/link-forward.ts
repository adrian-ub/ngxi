import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLinkForwardIcon],svg[hugeicons-link-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.192 9.441L17.227 7.47c-1.417-1.421-1.972-2.185-2.738-1.915c-.957.337-.642 2.463-.642 3.18c-1.486 0-3.032-.131-4.497.144C4.513 9.787 3 13.715 3 18c1.37-.97 2.737-2.003 4.382-2.452c2.054-.562 4.348-.294 6.465-.294c0 .718-.314 2.844.642 3.181c.868.306 1.321-.494 2.738-1.915l1.965-1.972C20.397 13.338 21 12.733 21 11.995c0-.74-.603-1.344-1.808-2.554" color="currentColor"></svg:path>`,
})
export class HugeiconsLinkForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
