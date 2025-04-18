import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsStopAndPlayIcon],svg[lets-icons-stop-and-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path stroke-linejoin="round" d="M11.427 11.126L4.594 7.33A.4.4 0 0 0 4 7.68v8.64a.4.4 0 0 0 .594.35l6.833-3.796a1 1 0 0 0 0-1.748"></svg:path><svg:path d="M16 17V7m4 10V7"></svg:path></svg:g>`,
})
export class LetsIconsStopAndPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
