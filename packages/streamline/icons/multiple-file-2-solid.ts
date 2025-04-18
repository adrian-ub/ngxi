import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMultipleFile2SolidIcon],svg[streamline-multiple-file-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 0a.75.75 0 0 0 0 1.5H11a.25.25 0 0 1 .25.25v9.5a.75.75 0 0 0 1.5 0v-9.5A1.75 1.75 0 0 0 11 0zm-3 4A1.5 1.5 0 0 1 3 2.5h5.5A1.5 1.5 0 0 1 10 4v8.5A1.5 1.5 0 0 1 8.5 14H3a1.5 1.5 0 0 1-1.5-1.5zm1.625 1c0-.345.28-.625.625-.625h4a.625.625 0 1 1 0 1.25h-4A.625.625 0 0 1 3.125 5m.625 1.875a.625.625 0 1 0 0 1.25h4a.625.625 0 1 0 0-1.25zM3.124 10c0-.345.28-.625.625-.625h2a.625.625 0 1 1 0 1.25h-2A.625.625 0 0 1 3.124 10" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineMultipleFile2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
