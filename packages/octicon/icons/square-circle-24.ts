import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconSquareCircle24Icon],svg[octicon-square-circle-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11m0-1.5a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5A9.5 9.5 0 0 0 2.5 12a9.5 9.5 0 0 0 9.5 9.5"></svg:path><svg:path fill="currentColor" d="M7 8.75C7 7.784 7.784 7 8.75 7h6.5c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0 1 15.25 17h-6.5A1.75 1.75 0 0 1 7 15.25z"></svg:path>`,
})
export class OcticonSquareCircle24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
