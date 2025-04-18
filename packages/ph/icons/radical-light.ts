import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRadicalLightIcon],svg[ph-radical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 80v24a6 6 0 0 1-12 0V86H132.16L85.62 210.11a6 6 0 0 1-11.24 0l-48-128a6 6 0 1 1 11.24-4.22L80 190.91l42.38-113A6 6 0 0 1 128 74h112a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhRadicalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
