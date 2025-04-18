import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciTransferIcon],svg[ci-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 20l-5-4l5-4v3h13v2H9v3Zm6-8V9H2V7h13V4l5 4l-5 4Z"></svg:path>`,
})
export class CiTransferIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
