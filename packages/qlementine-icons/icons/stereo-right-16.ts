import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsStereoRight16Icon],svg[qlementine-icons-stereo-right-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 12c2.21 0 4-1.79 4-4S7.21 4 5 4S1 5.79 1 8s1.79 4 4 4m0 1c2.76 0 5-2.24 5-5S7.76 3 5 3S0 5.24 0 8s2.24 5 5 5" clip-rule="evenodd" opacity=".4"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 1c2.76 0 5-2.24 5-5s-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsStereoRight16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
