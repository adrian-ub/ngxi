import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconFilterRemove16Icon],svg[octicon-filter-remove-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.384 4.57a.75.75 0 0 0 1.061 0a.75.75 0 0 0 0-1.061l-.884-.884l.883-.884A.75.75 0 0 0 14.384.68l-.884.884l-.884-.884a.75.75 0 0 0-1.06 1.061l.883.884l-.883.884a.75.75 0 0 0 1.06 1.061l.884-.884zM.75 3a.75.75 0 0 0 0 1.5H9A.75.75 0 0 0 9 3zM3 7.75A.75.75 0 0 1 3.75 7h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 7.75m3 4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class OcticonFilterRemove16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
