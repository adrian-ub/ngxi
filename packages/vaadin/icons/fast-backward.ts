import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinFastBackwardIcon],svg[vaadin-fast-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 15V1L9 8zm-7 0V1L2 8zM0 1h2v14H0z"></svg:path>`,
})
export class VaadinFastBackwardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
