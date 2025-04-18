import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerConfettiOffIcon],svg[tabler-confetti-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5h1m0 0v1m6.5-2L11 6m7-1h2m-1-1v2m-4 3l-1 1m4 3l2-.5M18 19h1m0 0v1m-5-3.482L7.482 10l-4.39 9.58a1 1 0 0 0 1.329 1.329zM3 3l18 18"></svg:path>`,
})
export class TablerConfettiOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
