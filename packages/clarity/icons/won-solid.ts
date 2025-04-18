import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityWonSolidIcon],svg[clarity-won-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.74 16l-.52 2h1.63l-.53-2z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M11.94 18h2.69l.53-2h-3.75z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="currentColor" d="m13.29 23.1l.81-3.1h-1.63z" class="clr-i-solid clr-i-solid-path-3"></svg:path><svg:path fill="currentColor" d="M21.44 18h2.69l.53-2h-3.75z" class="clr-i-solid clr-i-solid-path-4"></svg:path><svg:path fill="currentColor" d="m22.78 23.1l.82-3.1h-1.63z" class="clr-i-solid clr-i-solid-path-5"></svg:path><svg:path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m11 18h-2.81L24 28.32a1.25 1.25 0 0 1-2.42 0L19.38 20h-2.69l-2.19 8.32a1.25 1.25 0 0 1-2.42 0L9.88 20H7a1 1 0 0 1 0-2h2.35l-.53-2H7a1 1 0 0 1 0-2h1.3l-1-3.68a1.25 1.25 0 0 1 2.42-.64L10.88 14h4.8l1.14-4.32a1.25 1.25 0 0 1 2.42 0L20.38 14h4.8l1.14-4.32a1.25 1.25 0 0 1 2.42.64l-1 3.68H29a1 1 0 0 1 0 2h-1.76l-.53 2H29a1 1 0 0 1 0 2" class="clr-i-solid clr-i-solid-path-6"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityWonSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
