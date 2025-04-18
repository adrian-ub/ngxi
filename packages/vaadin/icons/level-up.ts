import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinLevelUpIcon],svg[vaadin-level-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15H5V4H3l3-3l3 3H7v9h6z"></svg:path>`,
})
export class VaadinLevelUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
