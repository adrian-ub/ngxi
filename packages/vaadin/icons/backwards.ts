import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinBackwardsIcon],svg[vaadin-backwards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 15V1L8 8zm-8 0V1L0 8z"></svg:path>`,
})
export class VaadinBackwardsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
