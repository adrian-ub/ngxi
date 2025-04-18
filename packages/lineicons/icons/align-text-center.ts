import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsAlignTextCenterIcon],svg[lineicons-align-text-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.523 4.5a.75.75 0 1 1 0 1.5h-11a.75.75 0 1 1 0-1.5zm2.5 4.5a.75.75 0 1 1 0 1.5h-16a.75.75 0 0 1 0-1.5zm0 9a.75.75 0 1 1 0 1.5h-16a.75.75 0 0 1 0-1.5zm-1.75-3.75a.75.75 0 0 0-.75-.75h-11a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 .75-.75"></svg:path>`,
})
export class LineiconsAlignTextCenterIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
