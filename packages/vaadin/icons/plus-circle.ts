import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinPlusCircleIcon],svg[vaadin-plus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8m5 9H9v4H7V9H3V7h4V3h2v4h4z"></svg:path>`,
})
export class VaadinPlusCircleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
