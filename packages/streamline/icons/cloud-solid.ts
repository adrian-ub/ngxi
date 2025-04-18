import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudSolidIcon],svg[streamline-cloud-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.913 2.38A5 5 0 1 0 5 12h6a3 3 0 0 0 0-6v.5V6a3 3 0 0 0-1.065.196a5 5 0 0 0-3.022-3.815Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCloudSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
