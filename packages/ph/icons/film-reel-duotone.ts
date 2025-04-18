import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFilmReelDuotoneIcon],svg[ph-film-reel-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 32a96 96 0 1 0 96 96a96 96 0 0 0-96-96M80 144a16 16 0 1 1 16-16a16 16 0 0 1-16 16m48 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16m0-96a16 16 0 1 1 16-16a16 16 0 0 1-16 16m48 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16" opacity=".2"></svg:path><svg:path d="M232 216h-48.64A103.95 103.95 0 1 0 128 232h104a8 8 0 0 0 0-16M40 128a88 88 0 1 1 88 88a88.1 88.1 0 0 1-88-88m88-24a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0-32a8 8 0 1 1-8 8a8 8 0 0 1 8-8m24 104a24 24 0 1 0-24 24a24 24 0 0 0 24-24m-32 0a8 8 0 1 1 8 8a8 8 0 0 1-8-8m56-24a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0-32a8 8 0 1 1-8 8a8 8 0 0 1 8-8m-96-16a24 24 0 1 0 24 24a24 24 0 0 0-24-24m0 32a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path></svg:g>`,
})
export class PhFilmReelDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
