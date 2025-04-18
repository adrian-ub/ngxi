import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiHeartExclamationIcon],svg[twemoji-heart-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#DD2E44" d="M18 4C14.875-2.375 6-.731 6 7c0 7.062 12 17 12 17s12-9.938 12-17c0-7.731-8.875-9.375-12-3"></svg:path><svg:circle cx="18" cy="31" r="5" fill="#DD2E44"></svg:circle>`,
})
export class TwemojiHeartExclamationIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
