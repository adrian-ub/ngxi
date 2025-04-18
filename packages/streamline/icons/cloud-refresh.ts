import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudRefreshIcon],svg[streamline-cloud-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 11.32a3.194 3.194 0 0 1-.21-5.818a3.2 3.2 0 0 1 1.202-.324a.23.23 0 0 0 .21-.127a3.868 3.868 0 0 1 7.508.91a.25.25 0 0 0 .173.2A2.73 2.73 0 0 1 12 11.249"></svg:path><svg:path d="M9.45 10.5a2.5 2.5 0 1 0-.832 2.406"></svg:path><svg:path d="m10 9l-.55 1.5L8 10.25"></svg:path></svg:g>`,
})
export class StreamlineCloudRefreshIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
