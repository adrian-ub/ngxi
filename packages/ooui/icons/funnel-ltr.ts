import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiFunnelLtrIcon],svg[ooui-funnel-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13L1 1h18z"></svg:path><svg:path fill="currentColor" d="M8 9v8l4 2V9z"></svg:path>`,
})
export class OouiFunnelLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
