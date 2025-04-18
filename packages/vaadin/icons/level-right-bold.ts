import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinLevelRightBoldIcon],svg[vaadin-level-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7L9 3v3H0v7l3-2V9h6v3z"></svg:path>`,
})
export class VaadinLevelRightBoldIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
