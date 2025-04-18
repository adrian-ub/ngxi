import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMushroomIcon],svg[hugeicons-mushroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.276 13c1.724 3-1.598 4.383-1.25 6.275c.406 2.214 2.713 3.367 4.454 2.355c2.467-1.435 1.415-6.827.432-8.61"></svg:path><svg:path d="M12.015 2C7.343 2 3.538 4.648 3.02 9.031c-.725 6.131 18.635 4.44 17.963-.212C20.368 4.563 16.612 2 12.015 2"></svg:path><svg:path d="M16 6c1 0 2 1 2 2"></svg:path></svg:g>`,
})
export class HugeiconsMushroomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
