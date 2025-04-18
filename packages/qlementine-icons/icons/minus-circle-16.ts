import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsMinusCircle16Icon],svg[qlementine-icons-minus-circle-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 14a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0 1c4.14 0 7.5-3.36 7.5-7.5S11.64 0 7.5 0S0 3.36 0 7.5S3.36 15 7.5 15" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11 7.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h6a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsMinusCircle16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
