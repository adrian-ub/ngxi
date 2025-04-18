import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsBitwigIcon],svg[simple-icons-bitwig-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.15 7.782a1.59 1.59 0 1 1 3.181 0a1.59 1.59 0 0 1-3.181 0m5.741 1.591a1.59 1.59 0 1 0 0-3.181a1.59 1.59 0 0 0 0 3.181m4.218 0a1.59 1.59 0 1 0 0-3.181a1.59 1.59 0 0 0 0 3.181m4.15 0a1.59 1.59 0 1 0 0-3.181a1.59 1.59 0 0 0 0 3.181M5.741 10.409a1.59 1.59 0 1 0 0 3.181a1.59 1.59 0 0 0 0-3.181m8.368 0a1.59 1.59 0 1 0 0 3.181a1.59 1.59 0 0 0 0-3.181m4.15 0a1.59 1.59 0 1 0 0 3.181a1.59 1.59 0 0 0 0-3.181m4.15 3.182a1.59 1.59 0 1 0 0-3.181a1.59 1.59 0 0 0 0 3.181M1.591 10.409a1.591 1.591 0 1 0 0 3.182a1.591 1.591 0 0 0 0-3.182m4.15 4.218a1.59 1.59 0 1 0 0 3.181a1.59 1.59 0 0 0 0-3.181m12.518 0a1.59 1.59 0 1 0 0 3.181a1.59 1.59 0 0 0 0-3.181m4.15 0a1.59 1.59 0 1 0 0 3.181a1.59 1.59 0 0 0 0-3.181m-20.818 0a1.59 1.59 0 1 0 0 3.181a1.59 1.59 0 0 0 0-3.181m8.3-4.218a1.591 1.591 0 1 0 0 3.182a1.591 1.591 0 0 0 0-3.182"></svg:path>`,
})
export class SimpleIconsBitwigIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
