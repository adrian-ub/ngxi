import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiRoundPushpinIcon],svg[twemoji-round-pushpin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="18" cy="34.5" fill="#292F33" rx="4" ry="1.5"></svg:ellipse><svg:path fill="#99AAB5" d="M14.339 10.725S16.894 34.998 18.001 35s3.66-24.275 3.66-24.275z"></svg:path><svg:circle cx="18" cy="8" r="8" fill="#DD2E44"></svg:circle>`,
})
export class TwemojiRoundPushpinIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
