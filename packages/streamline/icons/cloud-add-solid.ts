import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudAddSolidIcon],svg[streamline-cloud-add-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.883.06a4.37 4.37 0 0 0-4.582 2.718a3.693 3.693 0 0 0-.743 7.18A2 2 0 0 1 4.5 8.438H5v-.5a2 2 0 1 1 4 0v.5h.5a2 2 0 0 1 1.963 1.617a3.231 3.231 0 0 0 .223-6.246A4.37 4.37 0 0 0 7.883.061ZM3.75 10.439a.75.75 0 0 1 .75-.75h1.75v-1.75a.75.75 0 1 1 1.5 0v1.75H9.5a.75.75 0 0 1 0 1.5H7.75v1.75a.75.75 0 0 1-1.5 0v-1.75H4.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCloudAddSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
