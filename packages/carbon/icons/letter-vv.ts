import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLetterVvIcon],svg[carbon-letter-vv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 13h-1.75L21 22.03L18.79 13H17l2.5 10h3zM13 9l-2 13L9 9H7l2.52 14h2.96L15 9z"></svg:path>`,
})
export class CarbonLetterVvIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
