import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciSwichtRightIcon],svg[ci-swicht-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 18h8a6 6 0 0 0 0-12H8a6 6 0 1 0 0 12"></svg:path><svg:path d="M16 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></svg:path></svg:g>`,
})
export class CiSwichtRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
