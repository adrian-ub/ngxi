import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFlowerTulipIcon],svg[mdi-flower-tulip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13a9 9 0 0 0 9 9a9 9 0 0 0-9-9m9 9a9 9 0 0 0 9-9a9 9 0 0 0-9 9m6-19v5a6 6 0 0 1-6 6a6 6 0 0 1-6-6V3c.74 0 1.47.12 2.16.39c.55.23 1.04.57 1.45 1L12 2l2.39 2.39c.41-.43.9-.77 1.45-1A5.9 5.9 0 0 1 18 3"></svg:path>`,
})
export class MdiFlowerTulipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
