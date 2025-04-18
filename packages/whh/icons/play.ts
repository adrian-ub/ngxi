import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPlayIcon],svg[whh-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m62.397 8l819 467q16 9 16 39.5t-16 37.5l-819 467q-12 8-30 5.5t-32-17.5V22q31-34 62-14"></svg:path>`,
})
export class WhhPlayIcon {
  readonly viewBox = input("0 0 898 1026")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
