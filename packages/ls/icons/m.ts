import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsMIcon],svg[ls-m-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M71 128v64c42-40 109-64 171-64s110 24 152 64c13 13 26 28 36 44c41-66 124-108 207-108c62 0 108 24 150 64c45 42 73 102 73 168v294h-73V356c-2-87-62-157-150-157s-170 71-171 159v296h-72V356c-3-87-64-157-152-157c-87 0-169 70-171 157v298H0V128z"></svg:path>`,
})
export class LsMIcon {
  readonly viewBox = input("0 0 860 654")
  readonly width = input("1.32em")
  readonly height = input("1em")
}
