import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpChairIcon],svg[ic-sharp-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13h10V7h3V3H4v4h3z"></svg:path><svg:path fill="currentColor" d="M23 9h-4v6H5V9H1v10h3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1h3z"></svg:path>`,
})
export class IcSharpChairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
