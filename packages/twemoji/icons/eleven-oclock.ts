import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiElevenOclockIcon],svg[twemoji-eleven-oclock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="18" r="18" fill="#99AAB5"></svg:circle><svg:circle cx="18" cy="18" r="14" fill="#E1E8ED"></svg:circle><svg:path fill="#67757F" d="M18 19a1 1 0 0 1-1-1V6a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1"></svg:path><svg:path fill="#67757F" d="M18.001 19a1 1 0 0 1-.896-.553l-4-8a1 1 0 0 1 1.789-.895l4 8A1 1 0 0 1 18.001 19"></svg:path>`,
})
export class TwemojiElevenOclockIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
