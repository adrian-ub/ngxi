import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayTickIcon],svg[subway-tick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M437.3 30L202.7 339.3L64 200.7l-64 64L213.3 478L512 94z"></svg:path>`,
})
export class SubwayTickIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
