import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitBorderTopIcon],svg[uit-border-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1M3 4h18a.5.5 0 0 0 0-1H3a.5.5 0 0 0 0 1m5 14a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1M4 10a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0 2a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0 2a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m16-10a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m-4 6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0-10a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m4 6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0-6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0-10a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m-8 6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0 2a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1M8 10a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m4-2a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0-6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path>`,
})
export class UitBorderTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
