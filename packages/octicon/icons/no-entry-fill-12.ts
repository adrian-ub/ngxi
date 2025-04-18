import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconNoEntryFill12Icon],svg[octicon-no-entry-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0a6 6 0 1 1 0 12A6 6 0 0 1 6 0m3 5H3v2h6Z"></svg:path>`,
})
export class OcticonNoEntryFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
