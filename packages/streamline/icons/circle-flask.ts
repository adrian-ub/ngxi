import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCircleFlaskIcon],svg[streamline-circle-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.494 4.767V.523H5.505v4.244a4.483 4.483 0 1 0 2.99 0ZM4 .523h6"></svg:path>`,
})
export class StreamlineCircleFlaskIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
