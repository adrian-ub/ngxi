import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiEightOclockIcon],svg[twemoji-eight-oclock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="18" r="18" fill="#99AAB5"></svg:circle><svg:circle cx="18" cy="18" r="14" fill="#E1E8ED"></svg:circle><svg:path fill="#66757F" d="M17 18a1 1 0 1 0 2 0V7a1 1 0 1 0-2 0z"></svg:path><svg:path fill="#66757F" d="M9.34 23a1 1 0 0 0 1.365.367l7.795-4.5a1 1 0 1 0-1-1.732l-7.795 4.5A1 1 0 0 0 9.34 23"></svg:path>`,
})
export class TwemojiEightOclockIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
