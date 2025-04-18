import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusItalicIcon],svg[nimbus-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 1.25V0H4.71v1.25h3.67l-2.02 13.5H2.5V16h8.79v-1.25H7.62l2.02-13.5z"></svg:path>`,
})
export class NimbusItalicIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
