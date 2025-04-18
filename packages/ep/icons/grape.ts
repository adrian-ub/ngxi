import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epGrapeIcon],svg[ep-grape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M544 195.2a160 160 0 0 1 96 60.8a160 160 0 1 1 146.24 254.976a160 160 0 0 1-128 224a160 160 0 1 1-292.48 0a160 160 0 0 1-128-224A160 160 0 1 1 384 256a160 160 0 0 1 96-60.8V128h-64a32 32 0 0 1 0-64h192a32 32 0 0 1 0 64h-64zM512 448a96 96 0 1 0 0-192a96 96 0 0 0 0 192m-256 0a96 96 0 1 0 0-192a96 96 0 0 0 0 192m128 224a96 96 0 1 0 0-192a96 96 0 0 0 0 192m128 224a96 96 0 1 0 0-192a96 96 0 0 0 0 192m128-224a96 96 0 1 0 0-192a96 96 0 0 0 0 192m128-224a96 96 0 1 0 0-192a96 96 0 0 0 0 192"></svg:path>`,
})
export class EpGrapeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
