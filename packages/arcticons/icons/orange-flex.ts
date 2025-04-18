import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOrangeFlexIcon],svg[arcticons-orange-flex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m0 16.23l-6.987 9.258m6.987 0l-6.987-9.258"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.491 29.226a3.49 3.49 0 0 1-3.035 1.763h0a3.494 3.494 0 0 1-3.494-3.494v-2.27a3.494 3.494 0 0 1 3.494-3.495h0a3.494 3.494 0 0 1 3.493 3.494v1.135h-6.987M9.5 21.73h4.891m-2.82 9.259V19.457a2.446 2.446 0 0 1 2.446-2.445h.952c1.204 0 1.972.356 2.487 1.023v11.204c0 .965.782 1.747 1.747 1.747h.524"></svg:path>`,
})
export class ArcticonsOrangeFlexIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
