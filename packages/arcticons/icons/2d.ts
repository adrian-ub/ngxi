import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons2dIcon],svg[arcticons-2d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.794 31V17h3.15a6.125 6.125 0 0 1 6.125 6.125v1.75A6.125 6.125 0 0 1 28.944 31zm-12.863-9.362a4.642 4.642 0 0 1 5.558-4.55c1.945.374 3.498 2.056 3.692 4.027c.144 1.466-.32 2.913-1.333 3.802C18.972 26.563 12.931 31 12.931 31h9.275"></svg:path>`,
})
export class Arcticons2dIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
