import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epDishIcon],svg[ep-dish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 257.152V192h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96v65.152A448 448 0 0 1 955.52 768H68.48A448 448 0 0 1 480 257.152M128 704h768a384 384 0 1 0-768 0M96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64"></svg:path>`,
})
export class EpDishIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
