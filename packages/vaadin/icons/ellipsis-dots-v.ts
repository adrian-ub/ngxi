import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinEllipsisDotsVIcon],svg[vaadin-ellipsis-dots-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a2 2 0 1 1-3.999.001A2 2 0 0 1 10 2m0 6a2 2 0 1 1-3.999.001A2 2 0 0 1 10 8m0 6a2 2 0 1 1-3.999.001A2 2 0 0 1 10 14"></svg:path>`,
})
export class VaadinEllipsisDotsVIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
