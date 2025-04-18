import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHarmonoidIcon],svg[arcticons-harmonoid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.08 30.333c0 5.515-4.487 9.985-10.024 9.985h0c-5.536 0-10.024-4.47-10.024-9.985s4.488-9.986 10.024-9.986s10.025 4.471 10.025 9.986"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.045 14.219c0 3.61-2.938 6.537-6.563 6.537h0c-3.624 0-6.563-2.927-6.563-6.537h0c0-3.61 2.939-6.537 6.563-6.537h.001c3.624 0 6.562 2.927 6.562 6.537"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 4.5h26v39H11z"></svg:path>`,
})
export class ArcticonsHarmonoidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
