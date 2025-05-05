import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPlaystationIcon],svg[picon-playstation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v1q-4 0 0-3v1L1 6m4 1l1-1H5V5q4 0 0 3M4 8L3 7V0q5 0 2 4V2L4 1"></svg:path>`,
})
export class PiconPlaystationIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
