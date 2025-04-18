import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiOneThirtyIcon],svg[twemoji-one-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="18" r="18" fill="#99AAB5"></svg:circle><svg:circle cx="18" cy="18" r="14" fill="#E1E8ED"></svg:circle><svg:path fill="#67757F" d="M18 31a1 1 0 0 1-1-1V18a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1"></svg:path><svg:path fill="#67757F" d="M17.999 19a1 1 0 0 1-.893-1.447l4-8a1.001 1.001 0 0 1 1.789.895l-4 8c-.176.35-.529.552-.896.552"></svg:path>`,
})
export class TwemojiOneThirtyIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
