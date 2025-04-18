import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArmchairDuotoneIcon],svg[ph-armchair-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 128a32 32 0 0 1-32 32v40a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8v-40a32 32 0 0 1 0-64V72a32 32 0 0 1 32-32h96a32 32 0 0 1 32 32v24a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M216 88.8V72a40 40 0 0 0-40-40H80a40 40 0 0 0-40 40v16.8a40 40 0 0 0 0 78.4V200a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-32.8a40 40 0 0 0 0-78.4M80 48h96a24 24 0 0 1 24 24v16.8a40.07 40.07 0 0 0-32 39.2H88a40.07 40.07 0 0 0-32-39.2V72a24 24 0 0 1 24-24m128.39 104H208a8 8 0 0 0-8 8v40H56v-40a8 8 0 0 0-8-8h-.39A24 24 0 1 1 72 128v40a8 8 0 0 0 16 0v-24h80v24a8 8 0 0 0 16 0v-40a24 24 0 1 1 24.39 24"></svg:path></svg:g>`,
})
export class PhArmchairDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
