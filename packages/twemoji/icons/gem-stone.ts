import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiGemStoneIcon],svg[twemoji-gem-stone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#BDDDF4" d="M13 3H7l-7 9h10z"></svg:path><svg:path fill="#5DADEC" d="m36 12l-7-9h-6l3 9z"></svg:path><svg:path fill="#4289C1" d="M26 12h10L18 33z"></svg:path><svg:path fill="#8CCAF7" d="M10 12H0l18 21zm3-9l-3 9h16l-3-9z"></svg:path><svg:path fill="#5DADEC" d="m18 33l-8-21h16z"></svg:path>`,
})
export class TwemojiGemStoneIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
