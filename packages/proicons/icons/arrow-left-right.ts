import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsArrowLeftRightIcon],svg[proicons-arrow-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16.25 17l3.94-3.94c.292-.292.439-.676.439-1.06M16.25 7l3.94 3.94c.292.292.439.676.439 1.06M7.75 17l-3.94-3.94A1.5 1.5 0 0 1 3.372 12M7.75 7l-3.94 3.94A1.5 1.5 0 0 0 3.371 12m0 0H20.63"></svg:path>`,
})
export class ProiconsArrowLeftRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
