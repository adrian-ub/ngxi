import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGridNineBoldIcon],svg[ph-grid-nine-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-108 96v-24h40v24Zm40 24v24h-40v-24ZM44 116h40v24H44Zm64-24V68h40v24Zm64 24h40v24h-40Zm40-24h-40V68h40ZM84 68v24H44V68Zm-40 96h40v24H44Zm128 24v-24h40v24Z"></svg:path>`,
})
export class PhGridNineBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
