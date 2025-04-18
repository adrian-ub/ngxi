import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiStickFigureIcon],svg[openmoji-stick-figure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M30.895 18.831h8.687l-2.3 15.293l-3.989-.009z"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m29.5 63.5l3-28.5h3M41 63.5L38 35h-2.5"></svg:path><svg:path d="M32.5 35L30 18m8 17l2.5-17"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M35 18h5.5L43 42m-8-24h-5l-2 24"></svg:path><svg:circle cx="35" cy="11" r="3"></svg:circle></svg:g>`,
})
export class OpenmojiStickFigureIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
