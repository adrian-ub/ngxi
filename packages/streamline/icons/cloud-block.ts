import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudBlockIcon],svg[streamline-cloud-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 12.044a2.8 2.8 0 1 1 0-5.6a2.8 2.8 0 0 1 0 5.6m1.982-.818L5.018 7.263"></svg:path><svg:path d="M2.819 10.874a3.193 3.193 0 0 1 .673-6.252a.23.23 0 0 0 .21-.127a3.868 3.868 0 0 1 7.508.91a.25.25 0 0 0 .173.2a2.73 2.73 0 0 1-.116 5.34"></svg:path></svg:g>`,
})
export class StreamlineCloudBlockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
