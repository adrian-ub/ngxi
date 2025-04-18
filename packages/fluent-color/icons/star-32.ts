import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorStar32Icon],svg[fluent-color-star-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorStar320)" d="M14.655 3.84c.549-1.12 2.144-1.12 2.693 0l3.199 6.52l7.17 1.05c1.228.179 1.72 1.686.834 2.555l-5.195 5.096l1.224 7.183c.21 1.227-1.08 2.16-2.18 1.578l-6.399-3.385l-6.399 3.385c-1.1.582-2.389-.351-2.18-1.578l1.225-7.183l-5.196-5.096c-.885-.87-.394-2.376.834-2.556l7.17-1.048z"></svg:path><svg:defs><svg:lineargradient id="fluentColorStar320" x1="28.999" x2="2.157" y1="28.557" y2="3.34" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF6F47"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorStar32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
