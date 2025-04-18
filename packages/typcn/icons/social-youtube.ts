import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnSocialYoutubeIcon],svg[typcn-social-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.8 8.6c-.2-1.5-.4-2.6-1-3C21.2 5.1 16 5 12 5s-9.2.1-9.8.6c-.6.4-.8 1.5-1 3S1 11 1 12s0 1.9.2 3.4s.4 2.6 1 3c.6.5 5.8.6 9.8.6s9.2-.1 9.8-.6c.6-.4.8-1.5 1-3S23 13 23 12s0-1.9-.2-3.4m-12.8 7V8.4l6 3.6z"></svg:path>`,
})
export class TypcnSocialYoutubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
