import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconJoinIcon],svg[picon-join-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 0l3 3H5v1l3 3v1H6V7L4 5L2 7v1H0V7l3-3V3H1"></svg:path>`,
})
export class PiconJoinIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
