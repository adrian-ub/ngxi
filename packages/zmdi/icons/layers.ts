import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiLayersIcon],svg[zmdi-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m192 356l157-123l35 27l-192 149L0 260l35-27zm0-55L35 179L0 152L192 3l192 149l-35 27z"></svg:path>`,
})
export class ZmdiLayersIcon {
  readonly viewBox = input("0 0 384 416")
  readonly width = input("0.93em")
  readonly height = input("1em")
}
