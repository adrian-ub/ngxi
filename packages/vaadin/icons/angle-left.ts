import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinAngleLeftIcon],svg[vaadin-angle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13h-2L5 8l5-5h2L7 8z"></svg:path>`,
})
export class VaadinAngleLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
