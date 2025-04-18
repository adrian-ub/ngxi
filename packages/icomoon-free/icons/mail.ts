import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeMailIcon],svg[icomoon-free-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.333 0H2.667A2.675 2.675 0 0 0 0 2.667v10.666C0 14.8 1.2 16 2.667 16h10.666C14.801 16 16 14.8 16 13.333V2.667A2.674 2.674 0 0 0 13.333 0M4 4h8q.216.001.409.088L8 9.231L3.591 4.088A1 1 0 0 1 4 4m-1 7V5l.002-.063l2.932 3.421l-2.9 2.9A1 1 0 0 1 3 11m9 1H4q-.133 0-.258-.034L6.588 9.12l1.413 1.648L9.414 9.12l2.846 2.846a1 1 0 0 1-.258.034zm1-1q0 .133-.034.258l-2.9-2.9l2.932-3.421L13 5z"></svg:path>`,
})
export class IcomoonFreeMailIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
