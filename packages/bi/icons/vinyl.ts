import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biVinylIcon],svg[bi-vinyl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></svg:path><svg:path d="M8 6a2 2 0 1 0 0 4a2 2 0 0 0 0-4M4 8a4 4 0 1 1 8 0a4 4 0 0 1-8 0"></svg:path><svg:path d="M9 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class BiVinylIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
