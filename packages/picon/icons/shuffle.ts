import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconShuffleIcon],svg[picon-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1H0v1h2.5M8 5.5L6 4v1H4.5L4 6h2v1m2-5.5L6 0v1H4L2 5H0v1h3l2-4h1v1"></svg:path>`,
})
export class PiconShuffleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
