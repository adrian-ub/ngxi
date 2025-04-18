import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinGavelIcon],svg[vaadin-gavel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.4 4.1c-.4-.4-.4-.9-.1-1.2L8.9.3c.3-.3.8-.3 1.2 0l.1.1c.3.3.3.8 0 1.2L7.6 4.1c-.3.3-.9.3-1.2 0M12 9.7c-.4-.4-.4-.9-.1-1.3l2.6-2.6c.3-.3.8-.3 1.2 0l.1.1c.3.3.3.8 0 1.2l-2.6 2.6c-.4.3-.9.3-1.2 0m-2-2L8.3 6c-.4-.4-.4-1 0-1.4l2.3-2.3c.4-.4 1-.4 1.4 0L13.7 4c.4.4.4 1 0 1.4l-2.3 2.3c-.4.4-1 .4-1.4 0m-6 6.5c.6-.6 4-5.6 4.5-5.3c.4.2 1-.5 1-.5L7.6 6.5s-.7.6-.5 1c.3.5-4.7 3.9-5.3 4.5c0 0-2.8 2.2-1.4 3.6S4 14.2 4 14.2"></svg:path>`,
})
export class VaadinGavelIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
