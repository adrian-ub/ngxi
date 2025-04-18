import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinInsertIcon],svg[vaadin-insert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 16V5l-1 1v9H1V3h9l1-1H0v14z"></svg:path><svg:path fill="currentColor" d="M16 1.4L14.6 0L7.8 6.8L6 5v5h5L9.2 8.2z"></svg:path>`,
})
export class VaadinInsertIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
