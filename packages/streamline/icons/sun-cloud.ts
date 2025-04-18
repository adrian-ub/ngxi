import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSunCloudIcon],svg[streamline-sun-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 8.5a2.5 2.5 0 0 0-1.5.5A4.5 4.5 0 1 0 5 13.5h6a2.5 2.5 0 0 0 0-5m.25-3.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"></svg:path>`,
})
export class StreamlineSunCloudIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
