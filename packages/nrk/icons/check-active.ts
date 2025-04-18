import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkCheckActiveIcon],svg[nrk-check-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11M9.305 18.11l9.402-9.403l-1.414-1.414l-7.883 7.883l-2.476-3.01l-1.511 1.31l3.882 4.633z"></svg:path>`,
})
export class NrkCheckActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
