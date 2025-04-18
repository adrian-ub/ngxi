import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHome4SolidIcon],svg[streamline-home-4-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.707 1.293a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414L2 8.414V13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8.414l.293.293a1 1 0 1 0 1.414-1.414z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHome4SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
