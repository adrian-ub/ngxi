import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTorchIcon],svg[picon-torch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h5l2-1h1v4H7L5 5H0m3-2L2 4l1 1l1-1"></svg:path>`,
})
export class PiconTorchIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
