import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinJestIcon],svg[catppuccin-jest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#ed8796" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.5 6L5.56 1.5h9.94l-2 4.5"></svg:path><svg:path d="m12.5 6l-2-2.5l-2 2.5m1 1.5h2m2 1.5c1 1-.5 2.75-3 4s-4.5 1.5-6 1.5c-2 0-3-1-3-2.9q0-1.35 1.5-2.1"></svg:path><svg:path d="M7.5 9c0 1.5-2 2.5-3 2.5S3 11.25 3 9.5"></svg:path><svg:path d="M4.5 8.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1m5-1A1.5 1.5 0 0 1 8 9a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 8 6a1.5 1.5 0 0 1 1.5 1.5m5 0A1.5 1.5 0 0 1 13 9a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 13 6a1.5 1.5 0 0 1 1.5 1.5"></svg:path></svg:g>`,
})
export class CatppuccinJestIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
