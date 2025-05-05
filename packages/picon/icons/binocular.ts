import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBinocularIcon],svg[picon-binocular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1.5h2V0H5M1 1.5h2V0H1m2.5 4h1V2h-1M8 7V4L7 2H5v2l1 3M2 7l1-3V2H1L0 4v3"></svg:path>`,
})
export class PiconBinocularIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
