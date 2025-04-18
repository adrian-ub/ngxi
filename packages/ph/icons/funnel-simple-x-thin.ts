import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFunnelSimpleXThinIcon],svg[ph-funnel-simple-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 140H64a4 4 0 0 1 0-8h128a4 4 0 0 1 0 8m40-56H24a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8m-104 96h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m90.83-6.83a4 4 0 0 0-5.66 0L192 194.34l-21.17-21.17a4 4 0 0 0-5.66 5.66L186.34 200l-21.17 21.17a4 4 0 0 0 5.66 5.66L192 205.66l21.17 21.17a4 4 0 0 0 5.66-5.66L197.66 200l21.17-21.17a4 4 0 0 0 0-5.66"></svg:path>`,
})
export class PhFunnelSimpleXThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
