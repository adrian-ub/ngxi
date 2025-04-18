import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMicroscopeFillIcon],svg[ph-microscope-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 216a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h149.25A72 72 0 0 0 144 80.46V136a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V32a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v32.37A88.05 88.05 0 0 1 203.94 208H224a8 8 0 0 1 8 8m-96-32a8 8 0 0 0 0-16H72a8 8 0 0 0 0 16Z"></svg:path>`,
})
export class PhMicroscopeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
