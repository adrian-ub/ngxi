import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesControlsRewindSolidIcon],svg[bubbles-controls-rewind-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.333.923L9.28 5.488A.167.167 0 0 1 9 5.364V1.681A1 1 0 0 0 7.333.923L.337 7.242a1.027 1.027 0 0 0 0 1.515l6.996 6.319A1 1 0 0 0 9 14.318v-3.683a.167.167 0 0 1 .279-.123l5.054 4.564A1 1 0 0 0 16 14.318V1.681a1 1 0 0 0-1.667-.758"></svg:path>`,
})
export class BubblesControlsRewindSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
