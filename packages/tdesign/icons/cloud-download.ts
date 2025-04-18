import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCloudDownloadIcon],svg[tdesign-cloud-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.598 6.283a7.502 7.502 0 0 1 14.804 0a6.502 6.502 0 0 1 1.053 12.008l-.89.455l-.91-1.78l.89-.456a4.502 4.502 0 0 0-1.236-8.438l-.771-.14l-.049-.781a5.5 5.5 0 0 0-10.978 0l-.049.782l-.77.14a4.502 4.502 0 0 0-1.237 8.437l.89.455l-.91 1.78l-.89-.454A6.502 6.502 0 0 1 4.599 6.283M13 10v9.586l3-3L17.414 18L12 23.414L6.586 18L8 16.586l3 3V10z"></svg:path>`,
})
export class TdesignCloudDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
