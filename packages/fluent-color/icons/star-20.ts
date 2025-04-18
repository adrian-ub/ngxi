import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorStar20Icon],svg[fluent-color-star-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorStar200)" d="M9.104 2.899a1 1 0 0 1 1.794 0l1.93 3.911l4.317.627a1 1 0 0 1 .554 1.706l-3.124 3.045l.738 4.299a1 1 0 0 1-1.451 1.054l-3.86-2.03l-3.862 2.03a1 1 0 0 1-1.45-1.054l.737-4.3l-3.124-3.044a1 1 0 0 1 .554-1.706l4.317-.627z"></svg:path><svg:defs><svg:lineargradient id="fluentColorStar200" x1="18" x2="1.55" y1="18" y2="2.477" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF6F47"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorStar20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
