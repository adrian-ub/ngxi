import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFolderOffIcon],svg[carbon-folder-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 8h-2.586L30 3.414L28.586 2L2 28.586L3.414 30l2-2H28a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2m0 18H7.414l16-16H28zM4 6h7.172l3.414 3.414l.586.586H18V8h-2l-3.414-3.414A2 2 0 0 0 11.172 4H4a2 2 0 0 0-2 2v18h2z"></svg:path>`,
})
export class CarbonFolderOffIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
