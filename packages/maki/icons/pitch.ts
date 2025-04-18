import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiPitchIcon],svg[maki-pitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3a1 1 0 1 1 0-2a1 1 0 0 1 0 2m7.5 7H10L9 7L8 5.25L9 5l2.3 1a.539.539 0 0 0 .4-1L9 4H7L5 5L4 6H2.5a.5.5 0 0 0 0 1H5l1-1l1 2l-2 2v3.5a.5.5 0 0 0 1 0v-3.11L8 9l1 2h3.5a.5.5 0 0 0 0-1"></svg:path>`,
})
export class MakiPitchIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
