import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLink2sdIcon],svg[arcticons-link2sd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 11V6.5a2 2 0 0 1 2-2h27a2 2 0 0 1 2 2v35a2 2 0 0 1-2 2h-18l-11-11V18"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.84 14.5L12 7.5V11H5v7h7v3.5zm13.05 18.85h3v5h-3zm-12.29 0h3v5h-3zm6.15 0h3v5h-3zm-9.29 0v5l-4.97-4.97z"></svg:path>`,
})
export class ArcticonsLink2sdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
