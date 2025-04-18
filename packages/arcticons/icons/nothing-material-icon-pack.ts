import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNothingMaterialIconPackIcon],svg[arcticons-nothing-material-icon-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25 15.781v12.438c0 .2.078.39.219.531l4 4a.75.75 0 0 0 1.281-.531V19.781a.75.75 0 0 0-.219-.531l-4-4a.75.75 0 0 0-1.281.53m-7.604-.707l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m1.793-10l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m1.793-10l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354"></svg:path>`,
})
export class ArcticonsNothingMaterialIconPackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
