import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phEqualizerLightIcon],svg[ph-equalizer-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M78 96a6 6 0 0 1-6 6H24a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m-6 26H24a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32H24a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32H24a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m80-64h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m80-96h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m-48-20h48a6 6 0 0 0 0-12h-48a6 6 0 0 0 0 12m48 52h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhEqualizerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
