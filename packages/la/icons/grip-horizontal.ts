import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laGripHorizontalIcon],svg[la-grip-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v8h8V7zm10 0v8h8V7zm10 0v8h8V7zM4 9h4v4H4zm10 0h4v4h-4zm10 0h4v4h-4zM2 17v8h8v-8zm10 0v8h8v-8zm10 0v8h8v-8zM4 19h4v4H4zm10 0h4v4h-4zm10 0h4v4h-4z"></svg:path>`,
})
export class LaGripHorizontalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
