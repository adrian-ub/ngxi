import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsApkpureIcon],svg[arcticons-apkpure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.1 4.5L4.73 33.8l4.76 9.7l19.12-39zm24.17 28.7l-5.05 10.3l-5.05-10.3zM28.61 4.5l9.32 19l-4.76 9.7l-9.31-19zM19.05 24h9.61m-14.12 9.21h18.63"></svg:path>`,
})
export class ArcticonsApkpureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
