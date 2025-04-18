import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimBriefcaseIcon],svg[uim-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6V5h4v1h2V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1z"></svg:path><svg:path fill="currentColor" d="M9 15a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1m6 0a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1" opacity=".25"></svg:path><svg:path fill="currentColor" d="M20 6H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h4v-1a1 1 0 1 1 2 0v1h4v-1a1 1 0 1 1 2 0v1h4a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M20 13h-4v1a1 1 0 1 1-2 0v-1h-4v1a1 1 0 1 1-2 0v-1H4a2 2 0 0 1-2-2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 1-2 2"></svg:path>`,
})
export class UimBriefcaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
