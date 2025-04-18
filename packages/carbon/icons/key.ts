import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonKeyIcon],svg[carbon-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 9h-2l-2 7l-2-7h-2l3 9v5h2v-5zm-9 2V9h-8v14h8v-2h-6v-4h5v-2h-5v-4zM11 9H8.894L5 15.553V9H3v14h2v-4.294l.928-1.485L8.894 23H11l-3.89-7.57z"></svg:path>`,
})
export class CarbonKeyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
