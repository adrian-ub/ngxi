import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionChatboxEllipsesOutlineIcon],svg[ion-chatbox-ellipses-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M408 64H104a56.16 56.16 0 0 0-56 56v192a56.16 56.16 0 0 0 56 56h40v80l93.72-78.14a8 8 0 0 1 5.13-1.86H408a56.16 56.16 0 0 0 56-56V120a56.16 56.16 0 0 0-56-56Z"></svg:path><svg:circle cx="160" cy="216" r="32" fill="currentColor"></svg:circle><svg:circle cx="256" cy="216" r="32" fill="currentColor"></svg:circle><svg:circle cx="352" cy="216" r="32" fill="currentColor"></svg:circle>`,
})
export class IonChatboxEllipsesOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
