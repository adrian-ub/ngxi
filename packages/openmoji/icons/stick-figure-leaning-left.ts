import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiStickFigureLeaningLeftIcon],svg[openmoji-stick-figure-leaning-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="m30.816 19.61l7.319-1.458l-2.764 17.428l-4.658-1.203z"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29.5 63.5L30 35l6 1.5m7.5 27l-7.5-27"></svg:path><svg:path d="M30 35V19m6 17.5L39 18"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m30 19l9.5-2l2 23M30 19l-5 8l5 7.5"></svg:path><svg:circle cx="35" cy="11" r="3"></svg:circle></svg:g>`,
})
export class OpenmojiStickFigureLeaningLeftIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
