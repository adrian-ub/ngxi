import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phToolboxLightIcon],svg[ph-toolbox-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 66h-50V56a22 22 0 0 0-22-22h-48a22 22 0 0 0-22 22v10H32a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14V80a14 14 0 0 0-14-14M94 56a10 10 0 0 1 10-10h48a10 10 0 0 1 10 10v10H94ZM32 78h192a2 2 0 0 1 2 2v34h-36v-10a6 6 0 0 0-12 0v10H78v-10a6 6 0 0 0-12 0v10H30V80a2 2 0 0 1 2-2m192 116H32a2 2 0 0 1-2-2v-66h36v10a6 6 0 0 0 12 0v-10h100v10a6 6 0 0 0 12 0v-10h36v66a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhToolboxLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
