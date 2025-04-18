import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCrossLightIcon],svg[ph-cross-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 74h-42V32a14 14 0 0 0-14-14h-32a14 14 0 0 0-14 14v42H56a14 14 0 0 0-14 14v32a14 14 0 0 0 14 14h42v90a14 14 0 0 0 14 14h32a14 14 0 0 0 14-14v-90h42a14 14 0 0 0 14-14V88a14 14 0 0 0-14-14m2 46a2 2 0 0 1-2 2h-48a6 6 0 0 0-6 6v96a2 2 0 0 1-2 2h-32a2 2 0 0 1-2-2v-96a6 6 0 0 0-6-6H56a2 2 0 0 1-2-2V88a2 2 0 0 1 2-2h48a6 6 0 0 0 6-6V32a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v48a6 6 0 0 0 6 6h48a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhCrossLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
