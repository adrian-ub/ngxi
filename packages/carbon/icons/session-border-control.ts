import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSessionBorderControlIcon],svg[carbon-session-border-control-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m26 8l-1.41 1.41L27.17 12H16a5.97 5.97 0 0 0-4 1.54V6.83l2.59 2.58L16 8l-5-5l-5 5l1.41 1.41L10 6.83V18a5.97 5.97 0 0 0 1.54 4H4.83l2.58-2.59L6 18l-5 5l5 5l1.41-1.41L4.83 24H16a5.99 5.99 0 0 0 4.46-10h6.71l-2.58 2.59L26 18l5-5Zm-6 10a4 4 0 1 1-4-4a4.005 4.005 0 0 1 4 4"></svg:path>`,
})
export class CarbonSessionBorderControlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
