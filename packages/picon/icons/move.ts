import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMoveIcon],svg[picon-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5V3h5v2M5 2v4h1V2M2 2v4h1V2m1 6L0 4l4-4l4 4"></svg:path>`,
})
export class PiconMoveIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
