import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInfosecIcon],svg[arcticons-infosec-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.91 12.061c3.5 14.363 9.92 27.649 15.495 30.918c1.308.767 3.957.666 5.227-.167c7.008-4.597 13.555-24.868 15.431-31.1c.304-1.006-.19-2.277-1.124-2.762c-4.851-2.525-19.577-8.713-33.876.203c-.892.556-1.401 1.886-1.152 2.908Z"></svg:path><svg:path d="M16.57 19.656h15.191c1.04 0 1.882.843 1.882 1.882h0c0 1.04-.843 1.882-1.882 1.882h-15.19a1.88 1.88 0 0 1-1.883-1.882h0c0-1.04.843-1.882 1.883-1.882"></svg:path></svg:g>`,
})
export class ArcticonsInfosecIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
