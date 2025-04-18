import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineIcecreamIcon],svg[ic-baseline-icecream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.79 12.4l3.26 6.22l3.17-6.21c-.11-.08-.21-.16-.3-.25c-.84.53-1.85.84-2.92.84s-2.08-.31-2.92-.84c-.09.09-.19.17-.29.24m-1.96.59A2.995 2.995 0 0 1 4 10a3 3 0 0 1 2.52-2.96C6.75 4.22 9.12 2 12 2s5.25 2.22 5.48 5.04A3 3 0 0 1 20 10c0 1.59-1.24 2.9-2.81 2.99L12.07 23z"></svg:path>`,
})
export class IcBaselineIcecreamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
