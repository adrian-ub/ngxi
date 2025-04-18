import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCircleRight48FilledIcon],svg[fluent-arrow-circle-right-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24m19.866-8.634a1.25 1.25 0 0 0 0 1.768l5.616 5.616H15.25a1.25 1.25 0 1 0 0 2.5h14.232l-5.616 5.616a1.25 1.25 0 0 0 1.768 1.768l7.75-7.75a1.25 1.25 0 0 0 0-1.768l-7.75-7.75a1.25 1.25 0 0 0-1.768 0"></svg:path>`,
})
export class FluentArrowCircleRight48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
