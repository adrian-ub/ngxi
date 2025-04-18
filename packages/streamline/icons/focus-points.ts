import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFocusPointsIcon],svg[streamline-focus-points-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 1.5h-1a1 1 0 0 0-1 1v1m13 0v-1a1 1 0 0 0-1-1h-1m0 11h1a1 1 0 0 0 1-1v-1m-13 0v1a1 1 0 0 0 1 1h1m4.5-5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-4 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m8 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-4 4a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0-8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path>`,
})
export class StreamlineFocusPointsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
