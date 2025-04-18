import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiKiteIcon],svg[openmoji-kite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffa7c0" d="m15.036 4.719l-9.34 21.342L32.289 45.27l4.6-32.481z"></svg:path><svg:path fill="#e67a94" d="m32.289 45.27l4.6-32.481l-21.853-8.07"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m32.289 45.27l4.6-32.481l-21.853-8.07l-9.34 21.342zM15.398 5.522L31.78 44.113M6.442 25.764l29.926-12.451"></svg:path><svg:path d="M31.78 44.523s4.023 9.238 16.986 6.556c8.86-1.833 12.082 4.545 13.234 8.768a16 16 0 0 1 .493 4.83"></svg:path></svg:g>`,
})
export class OpenmojiKiteIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
