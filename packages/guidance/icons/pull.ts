import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidancePullIcon],svg[guidance-pull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M11 5h3v.5a3 3 0 0 1-3 3H7h5.25a1.75 1.75 0 1 1 0 3.5H10h1.25a1.75 1.75 0 1 1 0 3.5H10h.25a1.75 1.75 0 1 1 0 3.5H0M8 5H3.5A3.5 3.5 0 0 1 0 8.5m9.5 0v-8h5M9.5 19v4.5h5M16 12h8m-3.429-4c0 .423-.419 1.056-.842 1.587a7.5 7.5 0 0 1-1.944 1.738c-.56.342-1.239.67-1.785.67M20.572 16c0-.423-.42-1.056-.843-1.587a7.5 7.5 0 0 0-1.944-1.738c-.56-.342-1.239-.67-1.785-.67"></svg:path>`,
})
export class GuidancePullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
