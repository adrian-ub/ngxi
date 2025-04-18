import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignIpodFilledIcon],svg[tdesign-ipod-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1H3v22h18zM5 13V3h14v10h-2V7h-2v6h-2V5h-2v8H9V9H7v4zm7 3a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path>`,
})
export class TdesignIpodFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
