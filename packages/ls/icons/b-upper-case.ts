import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsBUpperCaseIcon],svg[ls-b-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h175c58 0 109 27 141 71c23 30 35 66 35 105s-12 75-35 104c-3 5-7 10-10 15c34 12 63 31 88 58c38 40 61 96 61 155c0 60-23 114-61 155c-41 44-100 72-166 72H0zm72 280h108c55-2 99-48 99-104S235 74 180 71H72zm0 73v310h158c85-1 153-70 153-155s-68-155-153-155z"></svg:path>`,
})
export class LsBUpperCaseIcon {
  readonly viewBox = input("0 0 455 735")
  readonly width = input("0.62em")
  readonly height = input("1em")
}
