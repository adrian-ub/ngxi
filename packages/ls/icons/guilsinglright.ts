import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsGuilsinglrightIcon],svg[ls-guilsinglright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 14l505 230l11 7v67l-11 6L0 556v-80l418-192L0 93z"></svg:path>`,
})
export class LsGuilsinglrightIcon {
  readonly viewBox = input("0 0 516 614")
  readonly width = input("0.85em")
  readonly height = input("1em")
}
