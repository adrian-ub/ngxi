import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconDiff16Icon],svg[octicon-diff-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 1.75V5H12a.75.75 0 0 1 0 1.5H8.75v3.25a.75.75 0 0 1-1.5 0V6.5H4A.75.75 0 0 1 4 5h3.25V1.75a.75.75 0 0 1 1.5 0M4 13h8a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 4 13"></svg:path>`,
})
export class OcticonDiff16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
