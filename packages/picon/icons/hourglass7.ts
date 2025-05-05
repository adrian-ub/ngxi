import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHourglass7Icon],svg[picon-hourglass7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2H1v4h1l2-2m0 1L2 7H0V1h2l2 2l2-2h2v6H6"></svg:path>`,
})
export class PiconHourglass7Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
