import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkSpinnerIcon],svg[nrk-spinner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1v2a9 9 0 1 0 9 9z"></svg:path>`,
})
export class NrkSpinnerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
