import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNothingGalleryIcon],svg[arcticons-nothing-gallery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 24c0 10.21-8.29 18.5-18.5 18.5V24zm0 0c10.21 0 18.5 8.29 18.5 18.5H24zM42.5 5.5C42.5 15.71 34.21 24 24 24V5.5z"></svg:path><svg:circle cx="14.75" cy="14.75" r="6.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsNothingGalleryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
