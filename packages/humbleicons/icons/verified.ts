import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsVerifiedIcon],svg[humbleicons-verified-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 12.5L11 15l4.5-4.5m-.595-5.512l-.48-.659a3 3 0 0 0-4.85 0l-.48.659l-.804-.127a3 3 0 0 0-3.43 3.43l.127.804l-.659.48a3 3 0 0 0 0 4.85l.659.48l-.127.804a3 3 0 0 0 3.43 3.43l.804-.127l.48.659a3 3 0 0 0 4.85 0l.48-.659l.804.127a3 3 0 0 0 3.43-3.43l-.127-.804l.659-.48a3 3 0 0 0 0-4.85l-.659-.48l.127-.804a3 3 0 0 0-3.43-3.43z"></svg:path>`,
})
export class HumbleiconsVerifiedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
