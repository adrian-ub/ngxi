import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGitCompareIcon],svg[tabler-git-compare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M11 6h5a2 2 0 0 1 2 2v8"></svg:path><svg:path d="m14 9l-3-3l3-3m-1 15H8a2 2 0 0 1-2-2V8"></svg:path><svg:path d="m10 15l3 3l-3 3"></svg:path></svg:g>`,
})
export class TablerGitCompareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
