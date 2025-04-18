import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiChickenIcon],svg[twemoji-chicken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E1E8ED" d="M20.143 32.215a2.143 2.143 0 1 1-4.286 0a2.143 2.143 0 0 1 4.286 0"></svg:path><svg:path fill="#E1E8ED" d="M27.643 15.643C27.643 10.317 23.324 6 18 6a9.643 9.643 0 0 0-9.643 9.643c0 5.357-1.071 16.572-1.071 16.572a2.143 2.143 0 0 0 4.286 0a2.144 2.144 0 0 0 4.285 0h4.286a2.144 2.144 0 0 0 4.287 0a2.143 2.143 0 0 0 4.286 0c-.002 0-1.073-11.215-1.073-16.572"></svg:path><svg:path fill="#DD2E44" d="M20 3c0 2.209-1.447 6-2 6s-2-3.791-2-6s1.448-3 2-3c.553 0 2 .791 2 3m-4.365 30c0-2.612 1.711-8 2.365-8c.653 0 2.365 5.388 2.365 8S18.652 36 18 36c-.654 0-2.365-.388-2.365-3"></svg:path><svg:ellipse cx="18" cy="22.5" fill="#F4900C" rx="7" ry="4.5"></svg:ellipse><svg:path fill="#FFAC33" d="M25 22.5c0 1.5-14 1.5-14 0s4.791-4.5 7-4.5s7 3 7 4.5"></svg:path><svg:circle cx="11.5" cy="18.5" r="1.5" fill="#292F33"></svg:circle><svg:circle cx="24.5" cy="18.5" r="1.5" fill="#292F33"></svg:circle>`,
})
export class TwemojiChickenIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
