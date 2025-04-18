import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggBriefcaseIcon],svg[gg-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 11h-4v2h4z"></svg:path><svg:path fill-rule="evenodd" d="M7 5V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1h3a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zm2-1h6v1H9zM4 7a1 1 0 0 0-1 1v6h18V8a1 1 0 0 0-1-1zM3 18v-2h18v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgBriefcaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
