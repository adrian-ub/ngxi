import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiStickFigureLeaningRightIcon],svg[openmoji-stick-figure-leaning-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="m33.777 18.072l7.753 1.723l-.199 14.579l-4.572 1.325z"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42.5 63.5L42 35l-6 1.5m-7.5 27l7.5-27"></svg:path><svg:path d="M42 35V19m-6 17.5L33 18"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m42 19l-9.5-2l-2 23M42 19l5 8l-5 7.5"></svg:path><svg:circle cx="37" cy="11" r="3"></svg:circle></svg:g>`,
})
export class OpenmojiStickFigureLeaningRightIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
