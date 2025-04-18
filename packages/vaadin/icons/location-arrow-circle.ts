import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinLocationArrowCircleIcon],svg[vaadin-location-arrow-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8M7 14V9H2l10-5z"></svg:path>`,
})
export class VaadinLocationArrowCircleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
