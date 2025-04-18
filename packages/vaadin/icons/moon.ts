import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinMoonIcon],svg[vaadin-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8m0 15c-3.9 0-7-3.1-7-7c0-2.4 1.2-4.6 3.2-5.9C4.1 2.7 4 3.4 4 4c0 4.9 4 8.9 8.9 9c-1.3 1.3-3 2-4.9 2"></svg:path>`,
})
export class VaadinMoonIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
