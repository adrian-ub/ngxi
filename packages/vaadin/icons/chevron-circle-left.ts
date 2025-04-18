import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinChevronCircleLeftIcon],svg[vaadin-chevron-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8m2.8 11.6L9.4 13l-5-5l5-5l1.4 1.4L7.2 8z"></svg:path>`,
})
export class VaadinChevronCircleLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
