import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinPlusIcon],svg[vaadin-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></svg:path>`,
})
export class VaadinPlusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
