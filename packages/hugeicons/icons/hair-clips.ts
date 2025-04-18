import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHairClipsIcon],svg[hugeicons-hair-clips-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.349 12.332c-1 2.053 3.207 3.698 1.649 5.668c-1.506 1.388-3.152-2.38-6.498-2.5"></svg:path><svg:path d="M22 4.439c-5.349-1.602-8.88 1.412-10.93 5.274C8.666 14.243 5.85 15.313 2 16m3 4c2 0 3-2 3-2m2.714-2.706C12.844 12.276 15.286 10 21 10"></svg:path></svg:g>`,
})
export class HugeiconsHairClipsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
