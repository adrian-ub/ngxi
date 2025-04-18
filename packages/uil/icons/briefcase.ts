import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilBriefcaseIcon],svg[uil-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6h-4V5a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1H3a1 1 0 0 0-1 1v4a3 3 0 0 0 1 2.22V19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.78A3 3 0 0 0 22 11V7a1 1 0 0 0-1-1M9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9Zm10 14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-5h2v1a1 1 0 0 0 2 0v-1h6v1a1 1 0 0 0 2 0v-1h2Zm1-8a1 1 0 0 1-1 1h-2v-1a1 1 0 0 0-2 0v1H9v-1a1 1 0 0 0-2 0v1H5a1 1 0 0 1-1-1V8h16Z"></svg:path>`,
})
export class UilBriefcaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
