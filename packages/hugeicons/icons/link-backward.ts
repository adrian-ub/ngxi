import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLinkBackwardIcon],svg[hugeicons-link-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.808 9.441L6.774 7.47C8.19 6.048 8.744 5.284 9.51 5.554c.957.337.642 2.463.642 3.18c1.486 0 3.032-.131 4.497.144C19.487 9.787 21 13.715 21 18c-1.37-.97-2.737-2.003-4.382-2.452c-2.054-.562-4.348-.294-6.465-.294c0 .718.314 2.844-.642 3.181c-.868.306-1.321-.494-2.737-1.915l-1.966-1.972C3.603 13.338 3 12.733 3 11.995c0-.74.603-1.344 1.808-2.554" color="currentColor"></svg:path>`,
})
export class HugeiconsLinkBackwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
