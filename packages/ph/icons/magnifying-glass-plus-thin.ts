import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassPlusThinIcon],svg[ph-magnifying-glass-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 112a4 4 0 0 1-4 4h-28v28a4 4 0 0 1-8 0v-28H80a4 4 0 0 1 0-8h28V80a4 4 0 0 1 8 0v28h28a4 4 0 0 1 4 4m78.83 114.83a4 4 0 0 1-5.66 0l-52.7-52.7a84.1 84.1 0 1 1 5.66-5.66l52.7 52.7a4 4 0 0 1 0 5.66M112 188a76 76 0 1 0-76-76a76.08 76.08 0 0 0 76 76"></svg:path>`,
})
export class PhMagnifyingGlassPlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
