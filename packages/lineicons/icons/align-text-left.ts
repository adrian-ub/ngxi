import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsAlignTextLeftIcon],svg[lineicons-align-text-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.023 4.5a.75.75 0 1 0 0 1.5h11a.75.75 0 1 0 0-1.5zm0 4.5a.75.75 0 1 0 0 1.5h16a.75.75 0 1 0 0-1.5zm0 9a.75.75 0 0 0 0 1.5h16a.75.75 0 1 0 0-1.5zm-.75-3.75a.75.75 0 0 1 .75-.75h11a.75.75 0 1 1 0 1.5h-11a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class LineiconsAlignTextLeftIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
