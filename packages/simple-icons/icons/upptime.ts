import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsUpptimeIcon],svg[simple-icons-upptime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.86 15.68c1.926 0 3.489 1.526 3.489 3.406s-1.563 3.407-3.488 3.407s-3.489-1.526-3.489-3.407c0-1.88 1.563-3.407 3.489-3.407ZM24 14.884L12 1.507L0 14.885l3.158 3.52L12 8.548l8.842 9.857z"></svg:path>`,
})
export class SimpleIconsUpptimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
