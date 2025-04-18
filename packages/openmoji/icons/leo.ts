import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiLeoIcon],svg[openmoji-leo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b399c8" d="M11.88 12.21h48v47.83h-48z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="2" d="M12.12 11.96h48v48h-48z"></svg:path><svg:path stroke-width="3" d="M34.44 37.72a69.3 69.3 0 0 1-1.186-11.86c0-5.93 9.487-8.301 11.86-2.372c1.888 7.085-11.79 27.93-2.372 28.46c4.744 0 3.988-5.356 3.988-5.356"></svg:path><svg:circle cx="29.13" cy="39.22" r="5.5" stroke-width="3"></svg:circle></svg:g>`,
})
export class OpenmojiLeoIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
