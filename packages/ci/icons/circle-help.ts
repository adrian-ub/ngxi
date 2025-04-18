import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciCircleHelpIcon],svg[ci-circle-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.146 9.074a2.998 2.998 0 0 1 5.28-.838A3 3 0 0 1 12 13v1m0 7a9 9 0 1 1 0-18a9 9 0 0 1 0 18m.05-4v.1h-.1V17z"></svg:path>`,
})
export class CiCircleHelpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
