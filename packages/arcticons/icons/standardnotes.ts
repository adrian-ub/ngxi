import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStandardnotesIcon],svg[arcticons-standardnotes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.36 6.19h-1.07a1.79 1.79 0 0 0-3.57 0H14.3a1.79 1.79 0 0 0-3.57 0H9.66A2.88 2.88 0 0 0 6.76 9v3.68h34.48V9.06a2.87 2.87 0 0 0-2.86-2.87Zm2.88 6.52H6.76v28a2.85 2.85 0 0 0 2.86 2.86h28.74a2.86 2.86 0 0 0 2.88-2.85h0Zm-28.86 6.04h23.24M12.5 25h18.82m-18.94 6.25h23.24M12.5 37.5h18.82"></svg:path>`,
})
export class ArcticonsStandardnotesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
