import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusSearchIcon],svg[nimbus-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.91 13.09l-3.68-3.21a4.86 4.86 0 0 0 .86-2.77A5.34 5.34 0 0 0 6.59 2a5.35 5.35 0 0 0-5.5 5.15a5.34 5.34 0 0 0 5.5 5.15a5.7 5.7 0 0 0 3.82-1.44L14.08 14zM6.59 11a4.09 4.09 0 0 1-4.25-3.9a4.09 4.09 0 0 1 4.25-3.9a4.09 4.09 0 0 1 4.25 3.9A4.08 4.08 0 0 1 6.59 11"></svg:path>`,
})
export class NimbusSearchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
