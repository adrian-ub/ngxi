import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFunnelSimpleXBoldIcon],svg[ph-funnel-simple-x-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 148H64a12 12 0 0 1 0-24h128a12 12 0 0 1 0 24m40-72H24a12 12 0 0 0 0 24h208a12 12 0 0 0 0-24m-104 96h-24a12 12 0 0 0 0 24h24a12 12 0 0 0 0-24m96.49-4.49a12 12 0 0 0-17 0L192 183l-15.51-15.52a12 12 0 0 0-17 17L175 200l-15.52 15.51a12 12 0 0 0 17 17L192 217l15.51 15.52a12 12 0 0 0 17-17L209 200l15.52-15.51a12 12 0 0 0-.03-16.98"></svg:path>`,
})
export class PhFunnelSimpleXBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
