import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsFileReportIcon],svg[majesticons-file-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M3 19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 14.172 2H6a3 3 0 0 0-3 3v14zm14-8a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-6zm-4 2a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4zm-4 1.995a1 1 0 0 0-2 .01l.01 2a1 1 0 0 0 2-.01l-.01-2z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsFileReportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
