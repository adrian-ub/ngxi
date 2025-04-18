import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biVinylFillIcon],svg[bi-vinyl-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 6a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 3a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4 8a4 4 0 1 0 8 0a4 4 0 0 0-8 0"></svg:path></svg:g>`,
})
export class BiVinylFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
