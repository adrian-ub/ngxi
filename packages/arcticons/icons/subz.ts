import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSubzIcon],svg[arcticons-subz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.51 19.5l13 7.5l-13 7.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 37.5v-21a2 2 0 0 0-2-2h-35a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h35a2 2 0 0 0 2-2m-6.61-26.13V9.62a1.12 1.12 0 0 0-1.12-1.12H12.23a1.12 1.12 0 0 0-1.12 1.12v1.75m28.78 3.13v-2a1.12 1.12 0 0 0-1.12-1.12H9.23a1.12 1.12 0 0 0-1.12 1.12v2"></svg:path>`,
})
export class ArcticonsSubzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
