import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFunnelSimpleXIcon],svg[ph-funnel-simple-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 144H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16m40-64H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16m-104 96h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16m93.66-5.66a8 8 0 0 0-11.32 0L192 188.69l-18.34-18.35a8 8 0 0 0-11.32 11.32L180.69 200l-18.35 18.34a8 8 0 0 0 11.32 11.32L192 211.31l18.34 18.35a8 8 0 0 0 11.32-11.32L203.31 200l18.35-18.34a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhFunnelSimpleXIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
