import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainModxIcon],svg[devicon-plain-modx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M123.9 13.9H64.6l-6.4 10.5L100.9 51zM99.3 53.4L17.1 2.1v59.3l12.8 8zM74 102.7l36.9 23.2V66.6l-10.3-6.5zM28.7 74.6L4.1 114.1h59.3l34.7-55.5z"></svg:path>`,
})
export class DeviconPlainModxIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
