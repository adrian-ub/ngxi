import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPicturesIcon],svg[picon-pictures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 4l1-2l1 3H1l1-2m5 4V2h1v6H1V7m5-1V1H0v5"></svg:path>`,
})
export class PiconPicturesIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
