import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons8tracksIcon],svg[arcticons-8tracks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 20.917V14.75A9.25 9.25 0 1 1 33.25 24h-18.5A9.25 9.25 0 1 0 24 33.25v-6.167"></svg:path>`,
})
export class Arcticons8tracksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
