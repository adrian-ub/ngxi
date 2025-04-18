import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciTextAlignLeftIcon],svg[ci-text-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 18h10M4 14h16M4 10h10M4 6h16"></svg:path>`,
})
export class CiTextAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
