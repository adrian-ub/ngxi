import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinChevronCircleUpIcon],svg[vaadin-chevron-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8c0-4.4-3.6-8-8-8S0 3.6 0 8s3.6 8 8 8s8-3.6 8-8M4.4 10.8L3 9.4l5-5l5 5l-1.4 1.4L8 7.2z"></svg:path>`,
})
export class VaadinChevronCircleUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
