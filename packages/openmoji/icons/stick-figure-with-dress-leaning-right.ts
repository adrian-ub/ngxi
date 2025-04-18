import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiStickFigureWithDressLeaningRightIcon],svg[openmoji-stick-figure-with-dress-leaning-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="m33.91 18.148l7.266 1.431l.673 43.138l-12.465-.056l7.359-26.284z"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m42 35l.5 28.5h-14m0 0l7.5-27"></svg:path><svg:path d="M42 35V19m-6 17.5L33 18"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m42 19l-9.5-2l-2 23M42 19l5 8l-5 7.5"></svg:path><svg:circle cx="37" cy="11" r="3"></svg:circle></svg:g>`,
})
export class OpenmojiStickFigureWithDressLeaningRightIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
