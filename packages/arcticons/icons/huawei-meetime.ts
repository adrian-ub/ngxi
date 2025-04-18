import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHuaweiMeetimeIcon],svg[arcticons-huawei-meetime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24" cy="19.745" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="16.091" ry="15.245"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.724 12.187c2.539 2.72 7.338 7.616 1.836 12.472m-5.891 10.318c-1.006 2.83-2.572 6.815-6.419 8.523"></svg:path>`,
})
export class ArcticonsHuaweiMeetimeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
