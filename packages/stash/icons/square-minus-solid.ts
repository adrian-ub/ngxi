import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashSquareMinusSolidIcon],svg[stash-square-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.545 6.73C4 7.8 4 9.2 4 12s0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C7.8 20 9.2 20 12 20s4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C20 16.2 20 14.8 20 12s0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C16.2 4 14.8 4 12 4s-4.2 0-5.27.545A5 5 0 0 0 4.545 6.73M9 11h6a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2"></svg:path>`,
})
export class StashSquareMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
