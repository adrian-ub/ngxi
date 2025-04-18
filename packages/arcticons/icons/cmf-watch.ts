import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCmfWatchIcon],svg[arcticons-cmf-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.487 26.415C40.632 36.789 30.92 43.888 20.794 42.27S3.966 30.93 5.821 20.556C7.068 13.584 11.982 7.786 18.585 5.5m10.052.558l12.854 12.39"></svg:path>`,
})
export class ArcticonsCmfWatchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
