import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDatabaseServer2SolidIcon],svg[streamline-database-server-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h11A1.5 1.5 0 0 1 14 1.5V3a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 3zm0 6A1.5 1.5 0 0 1 1.5 6h11A1.5 1.5 0 0 1 14 7.5V9a1.5 1.5 0 0 1-1.5 1.5H7.75v1.987H12a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h4.25V10.5H1.5A1.5 1.5 0 0 1 0 9zm3.5-5.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m4.33-.625a.625.625 0 1 0 0 1.25H11a.625.625 0 1 0 0-1.25zM3.5 8.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m3.706 0c0-.345.28-.625.625-.625H11a.625.625 0 1 1 0 1.25H7.83a.625.625 0 0 1-.624-.625" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineDatabaseServer2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
