import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiStickFigureWithDressLeaningLeftIcon],svg[openmoji-stick-figure-with-dress-leaning-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="m30.798 19.651l7.374-1.553l-2.935 18.31l7.198 26.255l-12.16.069l.256-42.98z"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m30 35l-.5 28.5h14m0 0l-7.5-27"></svg:path><svg:path d="M30 35V19m6 17.5L39 18"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m30 19l9.5-2l2 23M30 19l-5 8l5 7.5"></svg:path><svg:circle cx="35" cy="11" r="3"></svg:circle></svg:g>`,
})
export class OpenmojiStickFigureWithDressLeaningLeftIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
