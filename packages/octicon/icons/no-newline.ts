import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconNoNewlineIcon],svg[octicon-no-newline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M16 5v3c0 .55-.45 1-1 1h-3v2L9 8l3-3v2h2V5h2zM8 8c0 2.2-1.8 4-4 4s-4-1.8-4-4s1.8-4 4-4s4 1.8 4 4zM1.5 9.66L5.66 5.5C5.18 5.19 4.61 5 4 5C2.34 5 1 6.34 1 8c0 .61.19 1.17.5 1.66zM7 8c0-.61-.19-1.17-.5-1.66L2.34 10.5c.48.31 1.05.5 1.66.5c1.66 0 3-1.34 3-3z" fill="currentColor"></svg:path>`,
})
export class OcticonNoNewlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
