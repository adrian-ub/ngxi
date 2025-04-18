import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiTwoOclockIcon],svg[twemoji-two-oclock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="18" r="18" fill="#99AAB5"></svg:circle><svg:circle cx="18" cy="18" r="14" fill="#E1E8ED"></svg:circle><svg:path fill="#66757F" d="M19 18a1 1 0 1 1-2 0V7a1 1 0 0 1 2 0z"></svg:path><svg:path fill="#66757F" d="M26.661 13a1 1 0 0 1-.366 1.366l-7.795 4.5a1 1 0 0 1-1-1.732l7.795-4.5a1 1 0 0 1 1.366.366"></svg:path>`,
})
export class TwemojiTwoOclockIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
