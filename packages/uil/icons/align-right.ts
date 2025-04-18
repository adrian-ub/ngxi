import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilAlignRightIcon],svg[uil-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m18 10H7a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2m0-8H7a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2m0 4H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
