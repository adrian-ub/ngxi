import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkHardwareSmartWatchIcon],svg[nrk-hardware-smart-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 2h2v10h-2zm-4 2h2v6h-2zm-6 4h2v8H6V8zM6 18H4V6h2V2h8v4h2v12h-2v4H6zm2 0v2h4v-2zm4-12H8V4h4zM9 9h1v3h2v1H9z" clip-rule="evenodd"></svg:path>`,
})
export class NrkHardwareSmartWatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
