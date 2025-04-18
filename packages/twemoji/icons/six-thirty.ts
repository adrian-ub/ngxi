import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiSixThirtyIcon],svg[twemoji-six-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="18" r="18" fill="#99AAB5"></svg:circle><svg:circle cx="18" cy="18" r="14" fill="#E1E8ED"></svg:circle><svg:path fill="#66757F" d="M17 29a1 1 0 1 0 2 0V18a1 1 0 1 0-2 0z"></svg:path>`,
})
export class TwemojiSixThirtyIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
