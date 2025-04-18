import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSunCloudSolidIcon],svg[streamline-sun-cloud-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 5.999A3 3 0 1 0 11 0a3 3 0 0 0 0 5.999m-9.682.32A4.5 4.5 0 0 1 4.5 5a4.45 4.45 0 0 1 4.46 4.11a.25.25 0 0 0 .14.19a.24.24 0 0 0 .23 0A2.45 2.45 0 0 1 10.5 9a2.5 2.5 0 0 1 0 5h-6a4.5 4.5 0 0 1-3.182-7.682Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSunCloudSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
