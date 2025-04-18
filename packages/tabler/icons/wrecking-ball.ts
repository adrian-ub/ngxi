import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWreckingBallIcon],svg[tabler-wrecking-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0M2 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m9 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 2H4m0-4h9"></svg:path><svg:path d="M8 12V7h2a3 3 0 0 1 3 3v5"></svg:path><svg:path d="M5 15v-2a1 1 0 0 1 1-1h7m6-1V4l-6 7"></svg:path></svg:g>`,
})
export class TablerWreckingBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
