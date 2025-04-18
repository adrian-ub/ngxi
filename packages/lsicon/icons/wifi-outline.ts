import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconWifiOutlineIcon],svg[lsicon-wifi-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M14.645 5.791a9.4 9.4 0 0 0-3.05-2.066a9.3 9.3 0 0 0-7.192 0a9.4 9.4 0 0 0-3.05 2.066M3.57 8.038A6.22 6.22 0 0 1 8 6.178a6.22 6.22 0 0 1 4.43 1.86m-2.215 2.246a3.097 3.097 0 0 0-4.43 0M7.99 12.49H8v.01h-.01zm.5 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Z"></svg:path>`,
})
export class LsiconWifiOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
