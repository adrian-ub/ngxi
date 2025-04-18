import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCopyrightIcon],svg[vaadin-copyright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1.5c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5S1.5 11.6 1.5 8S4.4 1.5 8 1.5M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8"></svg:path><svg:path fill="currentColor" d="M9.9 10.3c-.5.4-1.2.7-1.9.7c-1.7 0-3-1.3-3-3s1.3-3 3-3c.8 0 1.6.3 2.1.9l1.1-1.1c-.8-.8-2-1.3-3.2-1.3c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c1.1 0 2-.4 2.8-1z"></svg:path>`,
})
export class VaadinCopyrightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
