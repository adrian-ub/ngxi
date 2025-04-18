import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFolderOpenVertical24FilledIcon],svg[fluent-folder-open-vertical-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5.25A3.25 3.25 0 0 0 17.75 2H8.84l3.54 2.045a4.25 4.25 0 0 1 2.126 3.68V20h.745a3.25 3.25 0 0 0 3.25-3.25v-5.19l1.842-1.84A2.25 2.25 0 0 0 21 8.129zm-7.995 2.475v13.02c0 1.732-1.875 2.814-3.375 1.948l-5.26-3.036a2.75 2.75 0 0 1-1.375-2.382V4.255c0-1.731 1.875-2.814 3.375-1.948l5.259 3.037a2.75 2.75 0 0 1 1.375 2.381"></svg:path>`,
})
export class FluentFolderOpenVertical24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
