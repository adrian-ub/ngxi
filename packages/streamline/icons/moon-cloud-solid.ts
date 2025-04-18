import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMoonCloudSolidIcon],svg[streamline-moon-cloud-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.843 1.25a.75.75 0 0 0 .192-.722a.67.67 0 0 0-.674-.51a3.4 3.4 0 0 0-2.287.996c-.663.628-1.035 1.331-1.153 2.038a6.25 6.25 0 0 1 3.911 3.701q.083-.003.166-.003H11q.216 0 .429.022A3.95 3.95 0 0 0 12.9 5.87l.01-.01c.636-.635.97-1.46 1-2.291a.67.67 0 0 0-.509-.675a.75.75 0 0 0-.72.192a1.299 1.299 0 1 1-1.838-1.837ZM4.025 4.095a5 5 0 0 1 5.91 4.1A3 3 0 0 1 10.999 8H11a3 3 0 1 1 0 6H5a5 5 0 0 1-.975-9.904Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineMoonCloudSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
