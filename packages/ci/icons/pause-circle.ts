import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciPauseCircleIcon],svg[ci-pause-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 9v6m-4-6v6m2 6a9 9 0 1 1 0-18a9 9 0 0 1 0 18"></svg:path>`,
})
export class CiPauseCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
