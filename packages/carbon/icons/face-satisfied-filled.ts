import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFaceSatisfiedFilledIcon],svg[carbon-face-satisfied-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m-4.5 9A2.5 2.5 0 1 1 9 13.5a2.48 2.48 0 0 1 2.5-2.5M16 24a8 8 0 0 1-6.85-3.89l1.71-1a6 6 0 0 0 10.28 0l1.71 1A8 8 0 0 1 16 24m4.5-8a2.5 2.5 0 1 1 2.5-2.5a2.48 2.48 0 0 1-2.5 2.5"></svg:path>`,
})
export class CarbonFaceSatisfiedFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
