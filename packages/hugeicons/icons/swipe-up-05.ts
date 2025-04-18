import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSwipeUp05Icon],svg[hugeicons-swipe-up-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 8h1a2 2 0 0 1 2 2m0 0v1m0-1a1 1 0 0 1 1-1a2 2 0 0 1 2 2m0 0v1m0-1c0-.524.47-.922.987-.836l.342.058a2 2 0 0 1 1.671 1.972v1.473c0 2.173 0 3.26-.331 4.125c-.192.502-.699 1.142-1.104 1.604a2.2 2.2 0 0 0-.565 1.44V22m-7-12V3.5a1.5 1.5 0 1 0-3 0v9.962l-1.62-1.625a1.683 1.683 0 0 0-2.51.14a1.696 1.696 0 0 0-.033 2.072l3.6 4.598C7.626 19.527 8 20.883 8 22M18.5 2v6m0-6c-.7 0-2.009 1.994-2.5 2.5M18.5 2c.7 0 2.009 1.994 2.5 2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsSwipeUp05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
