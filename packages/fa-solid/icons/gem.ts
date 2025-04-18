import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidGemIcon],svg[fa-solid-gem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M485.5 0L576 160H474.9L405.7 0zm-128 0l69.2 160H149.3L218.5 0zm-267 0h79.8l-69.2 160H0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2"></svg:path>`,
})
export class FaSolidGemIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
