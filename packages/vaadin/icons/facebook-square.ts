import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinFacebookSquareIcon],svg[vaadin-facebook-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h16V0zm12.9 8.4h-2.1V14H8.7V8.4H7.2v-2h1.5V4.7c0-1.5.9-2.7 2.9-2.7c.8 0 1.4.1 1.4.1V4h-1.3c-.7 0-.8.3-.8.9v1.5H13z"></svg:path>`,
})
export class VaadinFacebookSquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
