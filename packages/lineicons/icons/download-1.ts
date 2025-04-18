import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsDownload1Icon],svg[lineicons-download-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.424 16.75a.75.75 0 0 1-.548-.237l-4.61-4.607a.75.75 0 0 1 1.061-1.061l3.347 3.345V4a.75.75 0 1 1 1.5 0v10.185l3.343-3.34a.75.75 0 1 1 1.06 1.06l-4.575 4.573a.75.75 0 0 1-.578.272"></svg:path><svg:path fill="currentColor" d="M5.172 16a.75.75 0 0 0-1.5 0v2.5a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25V16a.75.75 0 1 0-1.5 0v2.5a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class LineiconsDownload1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
