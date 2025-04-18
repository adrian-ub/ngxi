import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeCloudDownloadIcon],svg[icomoon-free-cloud-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.922 5.626A3.72 3.72 0 0 0 10.205 2a3.71 3.71 0 0 0-2.92 1.418a2.09 2.09 0 0 0-3.719 1.573a3.028 3.028 0 0 0-3.567 2.98A3.03 3.03 0 0 0 3.026 11H4.46l3.539 3.664L11.538 11h1.742a2.725 2.725 0 0 0 .641-5.374zM8 13l-3-3h2V7h2v3h2z"></svg:path>`,
})
export class IcomoonFreeCloudDownloadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
