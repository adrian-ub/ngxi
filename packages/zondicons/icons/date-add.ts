import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsDateAddIcon],svg[zondicons-date-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h2V0h2v2h6V0h2zM3 6v12h14V6zm6 5V9h2v2h2v2h-2v2H9v-2H7v-2z"></svg:path>`,
})
export class ZondiconsDateAddIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
