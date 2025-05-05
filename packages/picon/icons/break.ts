import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBreakIcon],svg[picon-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7q-2-3 0-6l1 1Q0 4 2 6m5-5q2 3 0 6L6 6q2-2 0-4M3 1h2v3H3m0 1h2v2H3"></svg:path>`,
})
export class PiconBreakIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
