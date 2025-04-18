import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFunnelSimpleBoldIcon],svg[ph-funnel-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 136a12 12 0 0 1-12 12H64a12 12 0 0 1 0-24h128a12 12 0 0 1 12 12m28-60H24a12 12 0 0 0 0 24h208a12 12 0 0 0 0-24m-80 96h-48a12 12 0 0 0 0 24h48a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhFunnelSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
