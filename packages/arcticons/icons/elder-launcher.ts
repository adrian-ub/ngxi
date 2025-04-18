import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsElderLauncherIcon],svg[arcticons-elder-launcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 19.42a13.673 13.673 0 0 1-13.673 13.672h0A13.673 13.673 0 0 1 15.154 19.42h0A13.673 13.673 0 0 1 28.827 5.746h0A13.673 13.673 0 0 1 42.5 19.42m-6.405 22.834H6.047m22.741 0v-9.162M8.535 42.254V25.16"></svg:path><svg:circle cx="8.535" cy="20.006" r="3.035" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.1 33.638v-6.982m4.87 6.982v-6.982m27.984-7.236A10.127 10.127 0 1 1 28.826 9.292a10.127 10.127 0 0 1 10.126 10.126"></svg:path>`,
})
export class ArcticonsElderLauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
