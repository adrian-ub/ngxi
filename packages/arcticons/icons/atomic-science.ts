import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAtomicScienceIcon],svg[arcticons-atomic-science-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.5 15.5h-9a2 2 0 0 1-2-2v-9h-16a4 4 0 0 0-4 4v31a4 4 0 0 0 4 4h23a4 4 0 0 0 4-4zm-11-11l11 11"></svg:path><svg:ellipse cx="24" cy="28.247" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.822" ry="11.5"></svg:ellipse><svg:ellipse cx="24" cy="28.247" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="11.5" ry="4.822" transform="rotate(-30 24 28.247)"></svg:ellipse><svg:ellipse cx="24" cy="28.247" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.822" ry="11.5" transform="rotate(-60 24 28.247)"></svg:ellipse>`,
})
export class ArcticonsAtomicScienceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
