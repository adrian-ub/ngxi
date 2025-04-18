import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconXCircle16Icon],svg[octicon-x-circle-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.344 2.343a8 8 0 0 1 11.314 11.314A8.002 8.002 0 0 1 .234 10.089a8 8 0 0 1 2.11-7.746m1.06 10.253a6.5 6.5 0 1 0 9.108-9.275a6.5 6.5 0 0 0-9.108 9.275M6.03 4.97L8 6.94l1.97-1.97a.749.749 0 0 1 1.275.326a.75.75 0 0 1-.215.734L9.06 8l1.97 1.97a.749.749 0 0 1-.326 1.275a.75.75 0 0 1-.734-.215L8 9.06l-1.97 1.97a.749.749 0 0 1-1.275-.326a.75.75 0 0 1 .215-.734L6.94 8L4.97 6.03a.75.75 0 0 1 .018-1.042a.75.75 0 0 1 1.042-.018"></svg:path>`,
})
export class OcticonXCircle16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
