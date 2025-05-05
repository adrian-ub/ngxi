import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconShovelIcon],svg[picon-shovel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4L1 0L0 1l4 4l3 2M3 6l3-3l2 2v3H5"></svg:path>`,
})
export class PiconShovelIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
