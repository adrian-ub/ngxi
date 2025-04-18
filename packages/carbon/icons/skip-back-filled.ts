import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSkipBackFilledIcon],svg[carbon-skip-back-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 28a1 1 0 0 1-.501-.135l-19-11a1 1 0 0 1 0-1.73l19-11A1 1 0 0 1 28 5v22a1 1 0 0 1-1 1M2 4h2v24H2z"></svg:path>`,
})
export class CarbonSkipBackFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
