import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsArrowLeftCircleSolidIcon],svg[teenyicons-arrow-left-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 7.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-8.5 2.707L3.793 7.5L6.5 4.793l.707.707l-1.5 1.5H11v1H5.707l1.5 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsArrowLeftCircleSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
