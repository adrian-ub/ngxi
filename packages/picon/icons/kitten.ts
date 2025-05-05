import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconKittenIcon],svg[picon-kitten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5V4H2v1m2 2l1-1H3m2-1h1V4H5m3 1c0 4-8 4-8 0V0l3 2h2l3-2"></svg:path>`,
})
export class PiconKittenIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
