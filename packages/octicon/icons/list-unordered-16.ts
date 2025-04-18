import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconListUnordered16Icon],svg[octicon-list-unordered-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 2.5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5m0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5m0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5M2 14a1 1 0 1 1 0-2a1 1 0 0 1 0 2m1-6a1 1 0 1 1-2 0a1 1 0 0 1 2 0M2 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class OcticonListUnordered16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
