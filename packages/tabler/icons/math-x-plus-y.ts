import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMathXPlusYIcon],svg[tabler-math-x-plus-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 9l3 5.063M2 9l6 6m-6 0l6-6m14 0l-4.8 9M10 12h4m-2-2v4"></svg:path>`,
})
export class TablerMathXPlusYIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
