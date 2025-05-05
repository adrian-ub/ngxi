import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCamcorderIcon],svg[picon-camcorder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7V1h5v6m0-2V3l3-2v6"></svg:path>`,
})
export class PiconCamcorderIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
