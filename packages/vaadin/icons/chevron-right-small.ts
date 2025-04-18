import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinChevronRightSmallIcon],svg[vaadin-chevron-right-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8L5.68 1.68L4 3.35L8.65 8L4 12.65l1.68 1.67z"></svg:path>`,
})
export class VaadinChevronRightSmallIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
