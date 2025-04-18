import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWifiSlashFillIcon],svg[ph-wifi-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.92 210.62a8 8 0 1 1-11.84 10.76l-33.67-37l-28.1 33.88A15.93 15.93 0 0 1 128 224a15.93 15.93 0 0 1-12.31-5.77L11.65 92.8a15.65 15.65 0 0 1-3.54-11.89a15.93 15.93 0 0 1 6.17-10.81A188.3 188.3 0 0 1 46.6 50.35l-4.29-4.72a8.22 8.22 0 0 1 .13-11.38a8 8 0 0 1 11.48.37Zm34-129.71a15.93 15.93 0 0 0-6.17-10.81A186.67 186.67 0 0 0 128 32a191 191 0 0 0-42.49 4.75a4 4 0 0 0-2 6.59L186 156.07a4 4 0 0 0 6-.14l52.35-63.13a15.65 15.65 0 0 0 3.54-11.89Z"></svg:path>`,
})
export class PhWifiSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
