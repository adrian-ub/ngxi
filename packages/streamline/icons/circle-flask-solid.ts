import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCircleFlaskSolidIcon],svg[streamline-circle-flask-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.456.005a.75.75 0 0 0 0 1.5H5v2.907a5 5 0 1 0 4 0V1.505h.544a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCircleFlaskSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
