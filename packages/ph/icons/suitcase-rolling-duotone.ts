import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSuitcaseRollingDuotoneIcon],svg[ph-suitcase-rolling-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 64v144a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M104 88v96a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0m24-8a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8m32 0a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8m48-16v144a16 16 0 0 1-16 16h-16v16a8 8 0 0 1-16 0v-16H96v16a8 8 0 0 1-16 0v-16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h24V24a24 24 0 0 1 24-24h32a24 24 0 0 1 24 24v24h24a16 16 0 0 1 16 16M104 48h48V24a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8Zm88 160V64H64v144z"></svg:path></svg:g>`,
})
export class PhSuitcaseRollingDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
