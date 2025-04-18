import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilMediaStopIcon],svg[cil-media-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M408 80H104a24.027 24.027 0 0 0-24 24v304a24.027 24.027 0 0 0 24 24h304a24.027 24.027 0 0 0 24-24V104a24.027 24.027 0 0 0-24-24m-8 320H112V112h288Z"></svg:path>`,
})
export class CilMediaStopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
