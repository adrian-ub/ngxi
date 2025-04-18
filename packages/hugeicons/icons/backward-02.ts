import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBackward02Icon],svg[hugeicons-backward-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.163 12.918c.282.77 1.136 1.387 2.842 2.62c2.327 1.68 3.49 2.52 4.464 2.459a2.7 2.7 0 0 0 1.909-.965C12 16.286 12 14.858 12 12s0-4.286-.622-5.032a2.7 2.7 0 0 0-1.91-.965c-.972-.061-2.136.779-4.463 2.46c-1.706 1.232-2.56 1.849-2.842 2.62a2.67 2.67 0 0 0 0 1.835"></svg:path><svg:path d="M12.163 12.918c.282.77 1.136 1.387 2.842 2.62c2.327 1.68 3.49 2.52 4.464 2.459a2.7 2.7 0 0 0 1.909-.965C22 16.286 22 14.858 22 12s0-4.286-.622-5.032a2.7 2.7 0 0 0-1.91-.965c-.972-.061-2.136.779-4.463 2.46c-1.706 1.232-2.56 1.849-2.842 2.62a2.67 2.67 0 0 0 0 1.835"></svg:path></svg:g>`,
})
export class HugeiconsBackward02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
