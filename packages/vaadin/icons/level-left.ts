import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinLevelLeftIcon],svg[vaadin-level-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 12V6H4V4L1 7l3 3V8h9v6z"></svg:path>`,
})
export class VaadinLevelLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
