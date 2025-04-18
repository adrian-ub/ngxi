import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsTistoryIcon],svg[simple-icons-tistory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3a3 3 0 1 0 6 0a3 3 0 0 0-6 0m9 18a3 3 0 1 0 6 0a3 3 0 0 0-6 0m0-9a3 3 0 1 0 6 0a3 3 0 0 0-6 0m0-9a3 3 0 1 0 6 0a3 3 0 0 0-6 0m9 0a3 3 0 1 0 6 0a3 3 0 0 0-6 0"></svg:path>`,
})
export class SimpleIconsTistoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
