import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPinFilledIcon],svg[carbon-pin-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.586 13.314L30 11.9L20 2l-1.314 1.415l1.186 1.186L8.38 14.322l-1.716-1.715L5.25 14l5.657 5.677L2 28.583L3.41 30l8.911-8.909L18 26.748l1.393-1.414l-1.716-1.716l9.724-11.49Z"></svg:path>`,
})
export class CarbonPinFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
