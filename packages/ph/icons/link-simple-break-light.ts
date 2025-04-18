import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleBreakLightIcon],svg[ph-link-simple-break-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m214.2 118.18l-30.07 30.07a6 6 0 0 1-8.49-8.49l30.08-30.07a42 42 0 0 0-59.41-59.41l-30.07 30.06a6 6 0 0 1-8.49-8.49l30.07-30a54 54 0 0 1 76.38 76.38Zm-74.44 57.46l-30.07 30.08a42 42 0 0 1-59.41-59.41l30.06-30.07a6 6 0 0 0-8.49-8.49l-30 30.07a54 54 0 0 0 76.38 76.39l30.07-30.08a6 6 0 0 0-8.49-8.49Z"></svg:path>`,
})
export class PhLinkSimpleBreakLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
