import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8RoubleIcon],svg[icons8-rouble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6v14H7v2h2v4h2v-4h6v-2h-6v-3h7.5c3.026 0 5.5-2.474 5.5-5.5S21.526 6 18.5 6zm2 2h7.5c1.944 0 3.5 1.556 3.5 3.5S20.444 15 18.5 15H11z"></svg:path>`,
})
export class Icons8RoubleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
