import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSkiIcon],svg[picon-ski-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8L0 5V4l6 3h2v1M5 7L4 6l1-1l-4-2V2h5l2 2l-5-1l4 2M6 2V0h2v2"></svg:path>`,
})
export class PiconSkiIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
