import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFilmReelBoldIcon],svg[ph-film-reel-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 212h-36.2a107.94 107.94 0 1 0-67.8 24h104a12 12 0 0 0 0-24M44 128a84 84 0 1 1 84 84a84.09 84.09 0 0 1-84-84m64-44a20 20 0 1 1 20 20a20 20 0 0 1-20-20m20 108a20 20 0 1 1 20-20a20 20 0 0 1-20 20m24-64a20 20 0 1 1 20 20a20 20 0 0 1-20-20m-48 0a20 20 0 1 1-20-20a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhFilmReelBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
