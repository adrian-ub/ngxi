import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNerdIcon],svg[hugeicons-nerd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M8 15a5 5 0 0 0 4 2a5 5 0 0 0 4-2m-6-6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 0c.56-.56 1.164-1 2-1s1.44.44 2 1m7-1h-3.268M6.268 8H3m11 1a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></svg:path></svg:g>`,
})
export class HugeiconsNerdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
