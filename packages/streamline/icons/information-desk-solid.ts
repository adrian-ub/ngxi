import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInformationDeskSolidIcon],svg[streamline-information-desk-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.09 2.735a3.686 3.686 0 0 1 1.316 4.653A4.054 4.054 0 1 0 6.09 2.735m3.791 1.066c.345 0 .625.28.625.625V6.22a.625.625 0 0 1-1.25 0V4.426c0-.345.28-.625.625-.625m-.733-1.58c0 .471.39.678.665.708l.07.004c.273 0 .734-.2.734-.712c0-.472-.39-.679-.665-.709l-.07-.004c-.273 0-.734.2-.734.713M4.065 8.259a2.44 2.44 0 1 0 0-4.879a2.44 2.44 0 0 0 0 4.879M0 13.137a4.065 4.065 0 0 1 8.075-.673h5.157a.75.75 0 0 1 0 1.5H.77a.75.75 0 0 1-.748-.698a.4.4 0 0 1-.021-.129Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineInformationDeskSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
