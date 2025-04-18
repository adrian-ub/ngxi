import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiBullseyeIcon],svg[twemoji-bullseye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="18" r="18" fill="#DD2E44"></svg:circle><svg:circle cx="18" cy="18" r="13.5" fill="#FFF"></svg:circle><svg:circle cx="18" cy="18" r="10" fill="#DD2E44"></svg:circle><svg:circle cx="18" cy="18" r="6" fill="#FFF"></svg:circle><svg:circle cx="18" cy="18" r="3" fill="#DD2E44"></svg:circle><svg:path d="m18.24 18.282l13.144 11.754s-2.647 3.376-7.89 5.109L17.579 18.42z" opacity=".2"></svg:path><svg:path fill="#FFAC33" d="M18.294 19a.994.994 0 0 1-.704-1.699l.563-.563a.995.995 0 0 1 1.408 1.407l-.564.563a1 1 0 0 1-.703.292"></svg:path><svg:path fill="#55ACEE" d="M24.016 6.981c-.403 2.079 0 4.691 0 4.691l7.054-7.388c.291-1.454-.528-3.932-1.718-4.238s-4.079.803-5.336 6.935m5.003 5.003c-2.079.403-4.691 0-4.691 0l7.388-7.054c1.454-.291 3.932.528 4.238 1.718s-.803 4.079-6.935 5.336"></svg:path><svg:path fill="#3A87C2" d="M32.798 4.485L21.176 17.587c-.362.362-1.673.882-2.51.046s-.419-2.08-.057-2.443L31.815 3.501s.676-.635 1.159-.152s-.176 1.136-.176 1.136"></svg:path>`,
})
export class TwemojiBullseyeIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
