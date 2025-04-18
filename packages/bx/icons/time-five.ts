import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxTimeFiveIcon],svg[bx-time-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="M13 7h-2v5.414l3.293 3.293l1.414-1.414L13 11.586z"></svg:path>`,
})
export class BxTimeFiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
