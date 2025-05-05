import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconInstagramIcon],svg[picon-instagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 2l1-1l1 1l-1 1M0 8V0h8v8M1 1v6h6V1M2 4l2 2l2-2l-2-2m0 3L3 4l1-1l1 1"></svg:path>`,
})
export class PiconInstagramIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
