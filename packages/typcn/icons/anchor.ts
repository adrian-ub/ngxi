import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnAnchorIcon],svg[typcn-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13.5a1 1 0 0 0-1 1a5.01 5.01 0 0 1-4 4.898V12h4a1 1 0 1 0 0-2h-4V8.816A2.99 2.99 0 0 0 15 6a3 3 0 1 0-6 0a2.99 2.99 0 0 0 2 2.816V10H7a1 1 0 1 0 0 2h4v7.398A5.01 5.01 0 0 1 7 14.5a1 1 0 1 0-2 0c0 3.859 3.141 7 7 7s7-3.141 7-7a1 1 0 0 0-1-1M12 5c.551 0 1 .449 1 1s-.449 1-1 1s-1-.449-1-1s.449-1 1-1"></svg:path>`,
})
export class TypcnAnchorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
