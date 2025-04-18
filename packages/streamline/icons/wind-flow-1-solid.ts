import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWindFlow1SolidIcon],svg[streamline-wind-flow-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.75.75A.75.75 0 0 1 7.5 0a2.5 2.5 0 1 1 0 5H.75a.75.75 0 0 1 0-1.5H7.5a1 1 0 0 0 0-2a.75.75 0 0 1-.75-.75M2 7a.75.75 0 0 1 .75-.75h8.75a2.5 2.5 0 0 1 0 5a.75.75 0 0 1 0-1.5a1 1 0 1 0 0-2H2.75A.75.75 0 0 1 2 7m-.25 2a.75.75 0 0 0 0 1.5h5.5a1 1 0 0 1 0 2a.75.75 0 0 0 0 1.5a2.5 2.5 0 0 0 0-5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineWindFlow1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
