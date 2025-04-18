import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsLetterIcon],svg[pepicons-letter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17 3.5H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1Zm-13 11v-9h12v9H4Z"></svg:path><svg:path d="m17.648 5.261l-7.045 6a1 1 0 0 1-1.301-.004l-6.955-6C1.645 4.652 2.073 3.5 3 3.5h14c.93 0 1.356 1.158.648 1.761ZM5.69 5.5l4.27 3.683L14.282 5.5H5.69Z"></svg:path></svg:g>`,
})
export class PepiconsLetterIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
