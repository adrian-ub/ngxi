import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatRollOfPaperIcon],svg[fluent-emoji-flat-roll-of-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#9B9B9B" d="M15.028 14h10v10h-10z"></svg:path><svg:path fill="#F4F4F4" d="M25.028 24c2.761 0 5-4.477 5-10s-2.239-10-5-10h-5v10c0 5.523 2.238 10 5 10"></svg:path><svg:path fill="#D3D3D3" d="M7.028 4h18c-2.762 0-5 4.477-5 10v14a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V14c0-9 4.5-10 5-10"></svg:path><svg:path fill="#7D4533" d="M27.028 14c0 2.21-.896 4-2 4s-2-1.79-2-4s.895-4 2-4s2 1.79 2 4"></svg:path></svg:g>`,
})
export class FluentEmojiFlatRollOfPaperIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
