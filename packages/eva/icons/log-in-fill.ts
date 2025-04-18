import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaLogInFillIcon],svg[eva-log-in-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4h-2a1 1 0 0 0 0 2h1v12h-1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-7.2 3.4a1 1 0 0 0-1.6 1.2L12 11H4a1 1 0 0 0 0 2h8.09l-1.72 2.44a1 1 0 0 0 .24 1.4a1 1 0 0 0 .58.18a1 1 0 0 0 .81-.42l2.82-4a1 1 0 0 0 0-1.18Z"></svg:path>`,
})
export class EvaLogInFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
