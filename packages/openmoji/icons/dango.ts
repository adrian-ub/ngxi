import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiDangoIcon],svg[openmoji-dango-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36.142" cy="35.999" r="10" fill="#FFF" transform="rotate(-45.001 36.14 36)"></svg:circle><svg:circle cx="22.142" cy="21.999" r="10" fill="#ea5a47" transform="rotate(-45.001 22.142 22)"></svg:circle><svg:path fill="#D22F27" d="M29.213 14.92c-2.594-2.595-6.258-3.455-9.571-2.602a9.94 9.94 0 0 1 4.57 2.602c3.907 3.905 3.907 10.237.002 14.143a9.95 9.95 0 0 1-4.571 2.601c3.313.853 6.976-.008 9.57-2.601c3.906-3.906 3.906-10.238 0-14.143"></svg:path><svg:ellipse cx="50.142" cy="49.999" fill="#b1cc33" rx="9.999" ry="10" transform="rotate(-45.001 50.139 49.999)"></svg:ellipse><svg:path fill="#5c9e31" d="M57.213 42.92c-2.594-2.594-6.258-3.455-9.571-2.602a9.94 9.94 0 0 1 4.57 2.602a10 10 0 0 1 .002 14.142a9.95 9.95 0 0 1-4.571 2.602c3.313.854 6.976-.008 9.57-2.602a10 10 0 0 0 0-14.142"></svg:path><svg:circle cx="36.142" cy="35.999" r="10" fill="none" transform="rotate(-45.001 36.142 36)"></svg:circle><svg:path fill="#d0cfce" d="M43.213 28.92c-2.594-2.595-6.258-3.455-9.571-2.602a9.94 9.94 0 0 1 4.57 2.602c3.907 3.905 3.907 10.236.002 14.142a9.95 9.95 0 0 1-4.571 2.602c3.313.854 6.976-.008 9.57-2.602c3.906-3.906 3.906-10.237 0-14.142"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="36.142" cy="35.999" r="10" transform="rotate(-45.001 36.14 36)"></svg:circle><svg:circle cx="22" cy="21.858" r="10" transform="rotate(-45.001 22 21.858)"></svg:circle><svg:circle cx="50.284" cy="50.142" r="10" transform="rotate(-45.001 50.284 50.142)"></svg:circle><svg:path d="m60.143 60l7 7"></svg:path></svg:g>`,
})
export class OpenmojiDangoIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
