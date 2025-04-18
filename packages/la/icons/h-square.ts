import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laHSquareIcon],svg[la-h-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm4 3v12h2v-5h6v5h2V10h-2v5h-6v-5z"></svg:path>`,
})
export class LaHSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
