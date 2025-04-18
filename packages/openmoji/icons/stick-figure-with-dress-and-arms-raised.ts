import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiStickFigureWithDressAndArmsRaisedIcon],svg[openmoji-stick-figure-with-dress-and-arms-raised-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M31.107 20.371h7.866L37.027 35.02l3.001 27.57l-9.578.027l3.028-27.597z"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m29.5 63.5l3-28.5"></svg:path><svg:path d="M29.5 63.5H41"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M41 63.5L38 35"></svg:path><svg:path d="M32.5 35L30 19m8 16l2-16"></svg:path><svg:circle cx="35" cy="11" r="3"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m23 5l-1 10.5l8 4M47 5l1 10.5l-8 4"></svg:path><svg:path d="M30 19.5h10.5"></svg:path></svg:g>`,
})
export class OpenmojiStickFigureWithDressAndArmsRaisedIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
