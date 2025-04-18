import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHeartOff24RegularIcon],svg[fluent-heart-off-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.855 1.856a5.375 5.375 0 0 0-.5 8.044l7.895 7.896a.75.75 0 0 0 1.06 0l3.744-3.742l4.445 4.447a.75.75 0 0 0 1.061-1.061zm11.933 14.054L12 19.484L4.635 12.12a3.875 3.875 0 0 1 .512-5.912zm4.155-4.153l-2.033 2.032l1.06 1.06l2.037-2.034a5.38 5.38 0 0 0-7.612-7.6l-.821.823l-.823-.823A5.36 5.36 0 0 0 7.19 4.008l1.89 1.891c.374.183.724.43 1.034.74l1.358 1.358a.75.75 0 0 0 1.073-.013L13.88 6.64a3.88 3.88 0 0 1 5.49 0a3.876 3.876 0 0 1-.002 5.481"></svg:path>`,
})
export class FluentHeartOff24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
