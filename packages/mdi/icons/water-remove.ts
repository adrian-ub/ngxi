import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWaterRemoveIcon],svg[mdi-water-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18c0 .7.12 1.36.34 2H12c-3.31 0-6-2.69-6-6c0-4 6-10.75 6-10.75S16.31 8.1 17.62 12c-3.12.22-5.62 2.82-5.62 6m9.54-2.12l-1.41-1.41L18 16.59l-2.12-2.12l-1.41 1.41L16.59 18l-2.12 2.12l1.41 1.41L18 19.41l2.12 2.12l1.41-1.41L19.41 18z"></svg:path>`,
})
export class MdiWaterRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
