import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciPuzzleIcon],svg[ci-puzzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7h-2.151C17.35 7 17 6.498 17 6a3 3 0 1 0-6 0c0 .498-.351 1-.849 1H8a1 1 0 0 0-1 1v2.151C7 10.65 6.498 11 6 11a3 3 0 1 0 0 6c.498 0 1 .351 1 .849V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.151c0-.498-.503-.849-1-.849a3 3 0 1 1 0-6c.497 0 1-.351 1-.849V8a1 1 0 0 0-1-1"></svg:path>`,
})
export class CiPuzzleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
