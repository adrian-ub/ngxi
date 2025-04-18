import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinLineVIcon],svg[vaadin-line-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0h1v16H8z"></svg:path>`,
})
export class VaadinLineVIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
