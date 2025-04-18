import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDownloadIcon],svg[tdesign-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3v9.586l3.5-3.5l1.414 1.414L12 16.414L6.086 10.5L7.5 9.086l3.5 3.5V3zM4.5 14v5h15v-5h2v7h-19v-7z"></svg:path>`,
})
export class TdesignDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
