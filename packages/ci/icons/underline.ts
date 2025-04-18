import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciUnderlineIcon],svg[ci-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 19h12M8 5v6a4 4 0 0 0 8 0V5"></svg:path>`,
})
export class CiUnderlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
