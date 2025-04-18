import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidancePushIcon],svg[guidance-push-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M24 12h-8m3.429-4c0 .423.419 1.056.842 1.587a7.5 7.5 0 0 0 1.944 1.738c.56.342 1.239.67 1.785.67M19.43 16c0-.423.418-1.056.842-1.587a7.5 7.5 0 0 1 1.944-1.738c.56-.342 1.239-.67 1.785-.67M0 22.5h6a6.5 6.5 0 0 0 6.5-6.5V9.5H12A2.5 2.5 0 0 0 9.5 12v4V6A2.5 2.5 0 0 0 7 3.5h-.59M.5 16V3.5H1A2.5 2.5 0 0 1 3.5 6v6V1.5h.46A2.5 2.5 0 0 1 6.46 4v8"></svg:path>`,
})
export class GuidancePushIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
