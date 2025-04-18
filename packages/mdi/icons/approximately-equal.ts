import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiApproximatelyEqualIcon],svg[mdi-approximately-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.9 9.2c-.8.9-2.3 1.8-3.9 1.8c-1.5 0-2.4-.5-3.2-.9c-.8-.3-1.6-.8-2.9-.8c-1.2 0-2.3.7-2.9 1.3L5 9.1c.9-.9 2.3-1.9 3.9-1.9c1.5 0 2.4.6 3.2.9s1.6.9 2.9.9c1.2 0 2.3-.8 2.9-1.4zm.1 4.9c-.9.9-2.3 1.9-3.9 1.9c-1.5 0-2.4-.5-3.2-.9c-.8-.3-1.6-.9-2.9-.9c-1.2 0-2.3.8-2.9 1.4l-1-1.6c.9-.9 2.3-1.9 3.9-1.9c1.5 0 2.4.5 3.2.9c.8.3 1.6.8 2.9.8c1.2 0 2.3-.8 2.9-1.4z"></svg:path>`,
})
export class MdiApproximatelyEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
