import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCrownIcon],svg[si-glyph-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(1)"><svg:path d="M12.971 15.23c0 .423-.417.768-.932.768H3.951c-.515 0-.932-.345-.932-.768v-.45c0-.422.417-.767.932-.767h8.088c.515 0 .932.345.932.767zm-.506-2.251H3.547L1.421 5.365l1.141-.709l3.011 4.251l1.772-5.865h1.418l1.594 6.22l3.188-4.606l1.046.709z"></svg:path><svg:circle cx="14.968" cy="2.968" r=".968"></svg:circle><svg:circle cx="7.964" cy=".964" r=".964"></svg:circle><svg:ellipse cx=".983" cy="2.974" rx=".983" ry=".974"></svg:ellipse></svg:g>`,
})
export class SiGlyphCrownIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
