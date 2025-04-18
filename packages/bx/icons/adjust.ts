import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxAdjustIcon],svg[bx-adjust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2S2 6.486 2 12s4.486 10 10 10m0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8s-8-3.589-8-8s3.589-8 8-8"></svg:path><svg:path fill="currentColor" d="M19 12a7 7 0 0 0-7-7v14a7 7 0 0 0 7-7"></svg:path>`,
})
export class BxAdjustIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
