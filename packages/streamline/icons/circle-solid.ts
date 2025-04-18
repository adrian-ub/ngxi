import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCircleSolidIcon],svg[streamline-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7a7 7 0 1 0 14 0A7 7 0 1 0 0 7"></svg:path>`,
})
export class StreamlineCircleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
