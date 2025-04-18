import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonHdIcon],svg[carbon-hd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M4 24V8h24v16Z"></svg:path><svg:path fill="currentColor" d="M22 11h-4v10h4a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3m1 7a1 1 0 0 1-1 1h-2v-6h2a1 1 0 0 1 1 1zm-10-7v4h-3v-4H8v10h2v-4h3v4h2V11z"></svg:path>`,
})
export class CarbonHdIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
