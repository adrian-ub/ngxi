import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laDyalogIcon],svg[la-dyalog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5v7h2V7h7c4.962 0 9 4.038 9 9s-4.038 9-9 9H6v2h9c6.065 0 11-4.935 11-11S21.065 5 15 5z"></svg:path>`,
})
export class LaDyalogIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
