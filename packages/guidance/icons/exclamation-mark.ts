import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceExclamationMarkIcon],svg[guidance-exclamation-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12 19.5a2 2 0 1 1 0 4a2 2 0 0 1 0-4Zm2-3h-4v-.129A62 62 0 0 0 8.033.88L8 .75V.5h8v.25l-.033.129A62 62 0 0 0 14 16.37z"></svg:path>`,
})
export class GuidanceExclamationMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
