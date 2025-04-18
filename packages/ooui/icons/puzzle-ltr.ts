import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiPuzzleLtrIcon],svg[ooui-puzzle-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="17" cy="10" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M10.58 3A3 3 0 0 1 11 4.5a3 3 0 0 1-6 0A3 3 0 0 1 5.42 3H1v12a2 2 0 0 0 2 2h12V3z"></svg:path>`,
})
export class OouiPuzzleLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
