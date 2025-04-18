import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsMicIcon],svg[zondicons-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 18v-1.06A8 8 0 0 1 2 9h2a6 6 0 1 0 12 0h2a8 8 0 0 1-7 7.94V18h3v2H6v-2zM6 4a4 4 0 1 1 8 0v5a4 4 0 1 1-8 0z"></svg:path>`,
})
export class ZondiconsMicIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
