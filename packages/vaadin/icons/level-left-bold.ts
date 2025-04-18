import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinLevelLeftBoldIcon],svg[vaadin-level-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 7l7-4v3h9v7l-3-2V9H7v3z"></svg:path>`,
})
export class VaadinLevelLeftBoldIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
