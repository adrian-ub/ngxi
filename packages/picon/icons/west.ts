import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconWestIcon],svg[picon-west-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 4l2 2V2"></svg:path>`,
})
export class PiconWestIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
