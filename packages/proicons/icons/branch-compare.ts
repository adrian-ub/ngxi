import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBranchCompareIcon],svg[proicons-branch-compare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8.25 5.5a2.75 2.75 0 1 1-5.5 0a2.75 2.75 0 0 1 5.5 0m13 13a2.75 2.75 0 1 1-5.5 0a2.75 2.75 0 0 1 5.5 0"></svg:path><svg:path d="M5.5 8.25v7.25a3 3 0 0 0 3 3h4.336M10.75 16l1.793 1.793a1 1 0 0 1 .293.707M10.75 21l1.793-1.793a1 1 0 0 0 .293-.707m5.664-2.75V8.5a3 3 0 0 0-3-3h-4.336M13.25 8l-1.793-1.793a1 1 0 0 1-.293-.707M13.25 3l-1.793 1.793a1 1 0 0 0-.293.707"></svg:path></svg:g>`,
})
export class ProiconsBranchCompareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
