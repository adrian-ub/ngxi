import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiStickFigureWithDressIcon],svg[openmoji-stick-figure-with-dress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M30.612 18.749h9.121l-2.488 16.358l3.016 27.516l-10.102.075l3.016-27.742z"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m29.5 63.5l3-28.5M41 63.5L38 35"></svg:path><svg:path d="m38 35l2.5-17m-8 17L30 18"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M35 18h5.5L43 42m-8-24h-5l-2 24"></svg:path><svg:circle cx="35" cy="11" r="3"></svg:circle><svg:path d="M29.5 63.5H41"></svg:path></svg:g>`,
})
export class OpenmojiStickFigureWithDressIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
