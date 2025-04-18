import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHarddiskRemoveIcon],svg[mdi-harddisk-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1m6-7H6a2 2 0 0 0-2 2v9.09A5.5 5.5 0 0 1 5 13a5.7 5.7 0 0 1 2 .36a6 6 0 1 1 8.71 1.33l-1.92-2.42a1 1 0 0 0-1.37-.37l-.86.5a1 1 0 0 0-.37 1.37L12.1 16a6.1 6.1 0 0 1-2.1-.38a6 6 0 0 1 .19 6.38H18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-3.42 17.58l-2.49-6.31l.86-.5l4.22 5.31M12 11a1 1 0 1 0-1-1a1 1 0 0 0 1 1M7.12 22.54L5 20.41l-2.12 2.13l-1.42-1.42L3.59 19l-2.13-2.12l1.42-1.42L5 17.59l2.12-2.13l1.42 1.42L6.41 19l2.13 2.12Z"></svg:path>`,
})
export class MdiHarddiskRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
