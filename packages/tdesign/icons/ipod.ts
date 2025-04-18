import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignIpodIcon],svg[tdesign-ipod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h18v22H3zm2 2v10h2V9h2v4h2V5h2v8h2V7h2v6h2V3zm14 12H5v6h14zm-9 3a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path>`,
})
export class TdesignIpodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
