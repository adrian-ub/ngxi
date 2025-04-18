import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNotSentFilledIcon],svg[carbon-not-sent-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 28.59L3.41 2L2 3.41l8 8l-7.34 2.65a1 1 0 0 0 0 1.87l8.59 3.43L14.59 16L16 17.41l-3.37 3.37l3.44 8.59A1 1 0 0 0 17 30a1 1 0 0 0 .92-.66L20.6 22l8 8zm-7.51-11.76l3.45-9.49a1 1 0 0 0-1.28-1.28l-9.49 3.45z"></svg:path>`,
})
export class CarbonNotSentFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
