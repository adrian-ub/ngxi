import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinEllipsisCircleIcon],svg[vaadin-ellipsis-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8M6 9H4V7h2zm3 0H7V7h2zm3 0h-2V7h2z"></svg:path>`,
})
export class VaadinEllipsisCircleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
