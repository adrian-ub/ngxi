import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlipVertical32RegularIcon],svg[fluent-flip-vertical-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.54 2.158A1 1 0 0 1 28 3v11a1 1 0 0 1-1 1H3a1 1 0 0 1-.417-1.91l24-11a1 1 0 0 1 .957.068M7.582 13H26V4.558zM28 29a1 1 0 0 1-1.417.91l-24-11A1 1 0 0 1 3 17h24a1 1 0 0 1 1 1z"></svg:path>`,
})
export class FluentFlipVertical32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
