import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceCloudIcon],svg[guidance-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M10 9.362C11 6.5 13.5 4.5 16.536 4.5c3.964 0 6.964 3.154 6.964 7a6 6 0 0 1-6 6H.5v-.536l.367-.446c1.471-1.79 1.984-4.325 3.558-6.025A4.87 4.87 0 0 1 8 8.93a4.82 4.82 0 0 1 4.821 4.821"></svg:path>`,
})
export class GuidanceCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
