import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHighDefinitionBoldIcon],svg[ph-high-definition-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 68h-24a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h24a60 60 0 0 0 0-120m0 96h-12V92h12a36 36 0 0 1 0 72m-76 12v-36H56v36a12 12 0 0 1-24 0V80a12 12 0 0 1 24 0v36h48V80a12 12 0 0 1 24 0v96a12 12 0 0 1-24 0M20 44a12 12 0 0 1 12-12h192a12 12 0 0 1 0 24H32a12 12 0 0 1-12-12m216 168a12 12 0 0 1-12 12H32a12 12 0 0 1 0-24h192a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhHighDefinitionBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
