import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiStickFigureWithArmsRaisedIcon],svg[openmoji-stick-figure-with-arms-raised-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m29.5 63.5l3-28.5h3M41 63.5L38 35h-2.5"></svg:path><svg:path stroke-linecap="round" d="M32.5 35L30 19.5M38 35l2-15.5"></svg:path><svg:circle cx="35" cy="11" r="3"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m23 5l-1 10.5l8 4"></svg:path><svg:path d="M30 19.5h10.5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m47 5l1 10.5l-8 4"></svg:path></svg:g>`,
})
export class OpenmojiStickFigureWithArmsRaisedIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
