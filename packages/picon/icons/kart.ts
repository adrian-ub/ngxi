import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconKartIcon],svg[picon-kart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5h1V4h1l1 2h4L6 3L5 4h1l2 2v1Q7 9 6 7H3Q2 9 1 7H0"></svg:path>`,
})
export class PiconKartIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
