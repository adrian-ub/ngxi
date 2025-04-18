import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiHollowRedCircleIcon],svg[twemoji-hollow-red-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#DD2E44" d="M18 0C8.059 0 0 8.059 0 18s8.059 18 18 18s18-8.059 18-18S27.941 0 18 0m0 30c-6.627 0-12-5.373-12-12S11.373 6 18 6s12 5.373 12 12s-5.373 12-12 12"></svg:path>`,
})
export class TwemojiHollowRedCircleIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
