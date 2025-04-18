import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCardIndexDividersIcon],svg[openmoji-card-index-dividers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fcea2b" d="M11 21h50v36H11z"></svg:path><svg:path fill="#f1b31c" d="M11 21h50v4H11zm0 4h50v4H11z"></svg:path><svg:path fill="#b1cc33" d="M17.565 16h5.87A1.565 1.565 0 0 1 25 17.565V21h-9v-3.435A1.565 1.565 0 0 1 17.565 16"></svg:path><svg:path fill="#ea5a47" d="M30.565 20h5.87A1.565 1.565 0 0 1 38 21.565V25h-9v-3.435A1.565 1.565 0 0 1 30.565 20"></svg:path><svg:path fill="#92d3f5" d="M19.565 24h5.87A1.565 1.565 0 0 1 27 25.565V29h-9v-3.435A1.565 1.565 0 0 1 19.565 24"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 29h50m-34.107-4H61m-50 0h7.108M29 21H11v36h50V21H37.893m-20.328-5h5.87A1.565 1.565 0 0 1 25 17.565V21h0h-9h0v-3.435A1.565 1.565 0 0 1 17.565 16"></svg:path><svg:path d="M30.565 20h5.87A1.565 1.565 0 0 1 38 21.565V25h0h-9h0v-3.435A1.565 1.565 0 0 1 30.565 20m-11 4h5.87A1.565 1.565 0 0 1 27 25.565V29h0h-9h0v-3.435A1.565 1.565 0 0 1 19.565 24"></svg:path></svg:g>`,
})
export class OpenmojiCardIndexDividersIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
