import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCircleUp48FilledIcon],svg[fluent-arrow-circle-up-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 44C12.954 44 4 35.046 4 24S12.954 4 24 4s20 8.954 20 20s-8.954 20-20 20m-8.634-19.866a1.25 1.25 0 0 0 1.768 0l5.616-5.616V32.75a1.25 1.25 0 1 0 2.5 0V18.518l5.616 5.616a1.25 1.25 0 0 0 1.768-1.768l-7.75-7.75a1.25 1.25 0 0 0-1.768 0l-7.75 7.75a1.25 1.25 0 0 0 0 1.768"></svg:path>`,
})
export class FluentArrowCircleUp48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
