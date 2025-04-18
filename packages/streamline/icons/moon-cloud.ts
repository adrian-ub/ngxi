import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMoonCloudIcon],svg[streamline-moon-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.67 2.5A3 3 0 0 1 10.673.505a2 2 0 1 0 2.824 2.824a3 3 0 0 1-1.995 3M11 8.5a2.5 2.5 0 0 0-1.5.5A4.5 4.5 0 1 0 5 13.5h6a2.5 2.5 0 0 0 0-5"></svg:path>`,
})
export class StreamlineMoonCloudIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
