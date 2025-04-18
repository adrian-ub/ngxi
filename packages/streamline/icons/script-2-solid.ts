import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineScript2SolidIcon],svg[streamline-script-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.5 11.5V2.707c0-.533.14-1.079.371-1.424a.625.625 0 1 1 1.04.693a1 1 0 0 0-.102.263c-.035.137-.059.3-.059.468V4H13a1 1 0 0 0 1-1v-.75A2.25 2.25 0 0 0 11.75 0H4.5A2.5 2.5 0 0 0 2 2.5v9A1.5 1.5 0 0 1 .5 13a.5.5 0 0 0 0 1H8a2.5 2.5 0 0 0 2.5-2.5m-5.323-8c0-.345.28-.625.625-.625H7.74a.625.625 0 1 1 0 1.25H5.802a.625.625 0 0 1-.625-.625m-.666 2.375a.625.625 0 1 0 0 1.25H7.74a.625.625 0 1 0 0-1.25H4.51ZM3.885 9.5c0-.345.28-.625.626-.625H7.74a.625.625 0 1 1 0 1.25H4.51a.625.625 0 0 1-.624-.625Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineScript2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
