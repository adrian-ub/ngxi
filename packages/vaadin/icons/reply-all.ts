import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinReplyAllIcon],svg[vaadin-reply-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8c0-5-4.9-5-4.9-5H9V0L3 6l6 6V9h2.2c3.5 0 1.8 7 1.8 7s3-4.1 3-8"></svg:path><svg:path fill="currentColor" d="m0 6l6 6v-1.5L1.5 6L6 1.5V0z"></svg:path>`,
})
export class VaadinReplyAllIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
