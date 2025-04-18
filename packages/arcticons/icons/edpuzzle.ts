import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEdpuzzleIcon],svg[arcticons-edpuzzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.216 34.068l8.98-8.98a1.536 1.536 0 0 0 0-2.177l-8.98-8.98l8.98-8.979a1.536 1.536 0 0 1 2.176 0l5.624 5.624a4.746 4.746 0 0 1 6.712 6.712l5.624 5.624a1.536 1.536 0 0 1 0 2.176l-5.624 5.624a4.746 4.746 0 0 0-6.712 6.712l-5.624 5.624a1.536 1.536 0 0 1-2.176 0zV13.932"></svg:path>`,
})
export class ArcticonsEdpuzzleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
