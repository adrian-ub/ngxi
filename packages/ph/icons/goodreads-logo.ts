import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGoodreadsLogoIcon],svg[ph-goodreads-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 24a8 8 0 0 0-8 8v13.74A64 64 0 0 0 64 88v24a64 64 0 0 0 112 42.26V168a48.05 48.05 0 0 1-48 48c-16.45 0-32.72-8.08-41.44-20.58a8 8 0 1 0-13.12 9.16C85.06 221.24 106.48 232 128 232a64.07 64.07 0 0 0 64-64V32a8 8 0 0 0-8-8m-56 136a48.05 48.05 0 0 1-48-48V88a48 48 0 0 1 96 0v24a48.05 48.05 0 0 1-48 48"></svg:path>`,
})
export class PhGoodreadsLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
