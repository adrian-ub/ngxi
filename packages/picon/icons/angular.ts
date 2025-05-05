import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAngularIcon],svg[picon-angular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 6l3 2l3-2l1-4l-4-2l-4 2m4 1l.5 1h-1M4 1l2 5H5V5H3v1H2"></svg:path>`,
})
export class PiconAngularIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
