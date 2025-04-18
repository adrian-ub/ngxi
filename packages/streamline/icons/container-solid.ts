import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineContainerSolidIcon],svg[streamline-container-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.5 2a.5.5 0 0 0 0 1h.25v8H.5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-.25V3h.25a.5.5 0 0 0 0-1zm4.125 3a.625.625 0 1 0-1.25 0v4a.625.625 0 1 0 1.25 0zM7 4.375c.345 0 .625.28.625.625v4a.625.625 0 1 1-1.25 0V5c0-.345.28-.625.625-.625M10.625 5a.625.625 0 1 0-1.25 0v4a.625.625 0 1 0 1.25 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineContainerSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
