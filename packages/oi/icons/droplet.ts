import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiDropletIcon],svg[oi-droplet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 0l-.34.34C3.55.45 1 3.03 1 5.22c0 1.65 1.35 3 3 3s3-1.35 3-3C7 3.04 4.45.45 4.34.34zM2.5 4.72c.28 0 .5.22.5.5c0 .55.45 1 1 1c.28 0 .5.22.5.5s-.22.5-.5.5c-1.1 0-2-.9-2-2c0-.28.22-.5.5-.5"></svg:path>`,
})
export class OiDropletIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
