import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkHardwareWatchIcon],svg[nrk-hardware-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 4h-4v2h4zM8 4v2H6v12h2v4h8v-4h2V6h-2V2H8zm2 14v2h4v-2zm4-2h2V8H8v8zm-3-7h1v3h2v1h-3z" clip-rule="evenodd"></svg:path>`,
})
export class NrkHardwareWatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
