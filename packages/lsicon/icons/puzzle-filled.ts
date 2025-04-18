import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPuzzleFilledIcon],svg[lsicon-puzzle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.05 3.5a2.5 2.5 0 0 1 4.9 0H13V7a2 2 0 1 1 0 4v3H9v-.5a1.5 1.5 0 0 0-3 0v.5H2V9h2a1 1 0 0 0 0-2H2V3.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPuzzleFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
