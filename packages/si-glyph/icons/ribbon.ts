import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphRibbonIcon],svg[si-glyph-ribbon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m9.025 0l1.39 1.025h1.717l.53 1.657l1.39 1.025l-.531 1.659l.531 1.658l-1.39 1.024l-.53 1.658h-1.717l-1.39 1.025l-1.39-1.025H5.92l-.529-1.658l-1.389-1.024l.529-1.658l-.529-1.659l1.389-1.025l.529-1.657h1.715zM5.042 15.529l-1.04-2.682l-1.984 1.599L4.006 9l.675 1.577l2.317.014zm7.914-.021l1.075-2.661l1.948 1.578L14.027 9l-.675 1.577l-2.317.014z"></svg:path>`,
})
export class SiGlyphRibbonIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
