import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagGb1x1Icon],svg[flag-gb-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#012169" d="M0 0h512v512H0z"></svg:path><svg:path fill="#FFF" d="M512 0v64L322 256l190 187v69h-67L254 324L68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"></svg:path><svg:path fill="#C8102E" d="m184 324l11 34L42 512H0v-3zm124-12l54 8l150 147v45zM512 0L320 196l-4-44L466 0zM0 1l193 189l-59-8L0 49z"></svg:path><svg:path fill="#FFF" d="M176 0v512h160V0zM0 176v160h512V176z"></svg:path><svg:path fill="#C8102E" d="M0 208v96h512v-96zM208 0v512h96V0z"></svg:path>`,
})
export class FlagGb1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
