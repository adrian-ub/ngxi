import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidMaskIcon],svg[fa-solid-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320.67 64c-442.6 0-357.57 384-158.46 384c39.9 0 77.47-20.69 101.42-55.86l25.73-37.79c15.66-22.99 46.97-22.99 62.63 0l25.73 37.79C401.66 427.31 439.23 448 479.13 448c189.86 0 290.63-384-158.46-384M184 308.36c-41.06 0-67.76-25.66-80.08-41.05c-5.23-6.53-5.23-16.09 0-22.63c12.32-15.4 39.01-41.05 80.08-41.05s67.76 25.66 80.08 41.05c5.23 6.53 5.23 16.09 0 22.63c-12.32 15.4-39.02 41.05-80.08 41.05m272 0c-41.06 0-67.76-25.66-80.08-41.05c-5.23-6.53-5.23-16.09 0-22.63c12.32-15.4 39.01-41.05 80.08-41.05s67.76 25.66 80.08 41.05c5.23 6.53 5.23 16.09 0 22.63c-12.32 15.4-39.02 41.05-80.08 41.05"></svg:path>`,
})
export class FaSolidMaskIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
