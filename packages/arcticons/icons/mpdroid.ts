import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMpdroidIcon],svg[arcticons-mpdroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M17.8 27.37h-8v-5.7c0-17.9 28.4-17.9 28.4 0v5.7h-8V43h7.1a5 5 0 0 0 5.2-5.2V21.67c0-22.2-36.8-22.2-37 0v16.11A4.88 4.88 0 0 0 10.7 43h7.1Z"></svg:path>`,
})
export class ArcticonsMpdroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
