import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaArrowCircleLeftFillIcon],svg[eva-arrow-circle-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12a10 10 0 1 0-10 10a10 10 0 0 0 10-10m-11.86 3.69l-2.86-3a.5.5 0 0 1-.1-.15a.5.5 0 0 1-.1-.16a.94.94 0 0 1 0-.76a1 1 0 0 1 .21-.33l3-3a1 1 0 0 1 1.42 1.42L10.41 11H16a1 1 0 0 1 0 2h-5.66l1.25 1.31a1 1 0 0 1-1.45 1.38"></svg:path>`,
})
export class EvaArrowCircleLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
