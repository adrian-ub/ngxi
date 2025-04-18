import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phEscalatorUpIcon],svg[ph-escalator-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 40h-56a8 8 0 0 0-5.88 2.57L68.5 144H32a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h56a8 8 0 0 0 5.88-2.57L187.5 112H224a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 56h-40a8 8 0 0 0-5.88 2.57L84.5 200H32v-40h40a8 8 0 0 0 5.88-2.57L171.5 56H224Zm5.66 74.34a8 8 0 0 1-11.32 11.32L208 171.31V208a8 8 0 0 1-16 0v-36.69l-10.34 10.35a8 8 0 0 1-11.32-11.32l24-24a8 8 0 0 1 11.32 0Z"></svg:path>`,
})
export class PhEscalatorUpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
