import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesDoneSquareAlternateSolidIcon],svg[bubbles-done-square-alternate-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2.4A2.4 2.4 0 0 0 13.6 0H2.4A2.4 2.4 0 0 0 0 2.4v11.2A2.4 2.4 0 0 0 2.4 16h11.2a2.4 2.4 0 0 0 2.4-2.4zm-3.72 1.411a1.2 1.2 0 0 1 .309 1.669l-4.4 6.4a1.204 1.204 0 0 1-1.775.23l-2.8-2.4a1.2 1.2 0 0 1 1.562-1.82l1.44 1.241a.4.4 0 0 0 .32.093a.4.4 0 0 0 .278-.171l3.392-4.933a1.2 1.2 0 0 1 1.674-.309"></svg:path>`,
})
export class BubblesDoneSquareAlternateSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
