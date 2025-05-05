import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconUpdateIcon],svg[picon-update-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 0l1 1h2v2l1 1l-1 1v2H5L4 8L3 7H1V5L0 4l1-1V1h2m2 3V2H3v2H2l2 2l2-2"></svg:path>`,
})
export class PiconUpdateIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
