import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riWeightFillIcon],svg[ri-weight-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.465 2a4 4 0 1 0-6.93 0H5.066a1 1 0 0 0-.986.832l-1.88 11A1 1 0 0 0 3.186 21h17.629a1 1 0 0 0 .986-1.169l-1.88-11A1 1 0 0 0 18.934 8z"></svg:path>`,
})
export class RiWeightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
