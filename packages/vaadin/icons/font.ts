import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinFontIcon],svg[vaadin-font-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16h3L9 0H7L1 16h3l1.9-5h4.2zM6.7 9L8 5.4L9.3 9z"></svg:path>`,
})
export class VaadinFontIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
