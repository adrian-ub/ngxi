import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkNote1OffIcon],svg[nrk-note-1-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7V5h-6v4.65L8.51 2h-2.2l9.13 20h2.2L14 14.03V7zM8 17v-4h1.14l-.92-2H6v8h5.87l-.91-2z"></svg:path>`,
})
export class NrkNote1OffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
