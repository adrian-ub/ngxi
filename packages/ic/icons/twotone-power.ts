import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotonePowerIcon],svg[ic-twotone-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 13.65l3.5 3.52V19h1v-1.83l3.5-3.51V9H8z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M16 7V3h-2v4h-4V3H8v4h-.01C6.89 7 6 7.89 6 8.98v5.52L9.5 18v3h5v-3l3.5-3.5V9c0-1.1-.9-2-2-2m0 6.66l-3.5 3.51V19h-1v-1.83L8 13.65V9h8z"></svg:path>`,
})
export class IcTwotonePowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
