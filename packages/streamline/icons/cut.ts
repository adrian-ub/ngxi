import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCutIcon],svg[streamline-cut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.49 10.5h2m2 0h2M2.19 4.93l5.8 3.33M2.75 5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m-.56 4.07L13.5 2.55M2.75 13.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"></svg:path>`,
})
export class StreamlineCutIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
