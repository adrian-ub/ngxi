import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsTextParagraphIcon],svg[lineicons-text-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 3.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5zm0 10.667a.75.75 0 0 0 0 1.5h16a.75.75 0 1 0 0-1.5zM3.75 20a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75M4.5 8.583a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class LineiconsTextParagraphIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
