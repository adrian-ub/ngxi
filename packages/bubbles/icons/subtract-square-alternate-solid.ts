import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesSubtractSquareAlternateSolidIcon],svg[bubbles-subtract-square-alternate-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.363.167H1.637A1.47 1.47 0 0 0 .17 1.633v12.731a1.47 1.47 0 0 0 1.47 1.467h12.727a1.47 1.47 0 0 0 1.466-1.467V1.636a1.47 1.47 0 0 0-1.47-1.47m-.2 14H1.833V1.833h12.334z"></svg:path><svg:path d="M4.182 8.833h7.636a.833.833 0 1 0 0-1.666H4.182a.833.833 0 1 0 0 1.666"></svg:path></svg:g>`,
})
export class BubblesSubtractSquareAlternateSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
