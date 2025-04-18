import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons5eToolsIcon],svg[arcticons-5e-tools-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 30.628c1.1.923 2.169 1.345 4.838 1.345h.459a4.47 4.47 0 0 0 4.47-4.47h0a4.47 4.47 0 0 0-4.47-4.47H13.5v-7.007h9.767m10.71 11.244a3.99 3.99 0 0 1-3.464 2.013h0a3.987 3.987 0 0 1-3.986-3.987v-2.592a3.987 3.987 0 0 1 3.986-3.986h0a3.987 3.987 0 0 1 3.987 3.986V24h-7.973"></svg:path>`,
})
export class Arcticons5eToolsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
