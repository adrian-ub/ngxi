import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLineVerticalLightIcon],svg[ph-line-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 24v208a6 6 0 0 1-12 0V24a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhLineVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
