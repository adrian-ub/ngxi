import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsReadscriptureIcon],svg[arcticons-readscripture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.795 33.018H5.5V7.473h37v25.582H32.318M24 7.474v17.185m-.154 3.638v12.23m-4.257-7.509h8.75M11.306 14.053h8.127m-8.36 6.473h8.594m-8.731 6.432h8.675m9.661-12.891h8.292m-8.374 6.377h8.484m-8.428 6.376h8.566"></svg:path>`,
})
export class ArcticonsReadscriptureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
