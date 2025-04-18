import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBagSimpleThinIcon],svg[ph-bag-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 68h-44v-4a44 44 0 0 0-88 0v4H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12M92 64a36 36 0 0 1 72 0v4H92Zm128 136a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhBagSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
