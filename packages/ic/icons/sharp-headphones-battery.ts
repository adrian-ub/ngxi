import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpHeadphonesBatteryIcon],svg[ic-sharp-headphones-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7V6h-2v1h-2v11h6V7zM8 6c-3.31 0-6 2.69-6 6v6h4v-5H3.5v-1c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5v1H10v5h4v-6c0-3.31-2.69-6-6-6"></svg:path>`,
})
export class IcSharpHeadphonesBatteryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
