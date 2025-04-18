import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laPollIcon],svg[la-poll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm8 3v12h2V10zm-5 4v8h2v-8zm10 2v6h2v-6z"></svg:path>`,
})
export class LaPollIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
