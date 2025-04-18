import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiSpoonIcon],svg[twemoji-spoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#99AAB5" d="M24 10c0-4.971-2.91-10-6.5-10S11 5.029 11 10c0 3.744 1.651 6.385 4 7.461V33.5a2.5 2.5 0 1 0 5 0V17.461c2.349-1.076 4-3.717 4-7.461"></svg:path>`,
})
export class TwemojiSpoonIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
