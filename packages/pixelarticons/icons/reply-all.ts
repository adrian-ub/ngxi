import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsReplyAllIcon],svg[pixelarticons-reply-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19h2v-4h7V9h-7V5h-2v2h-2v2H9v2H7v2h2v2h2v2h2zM8 7H6v2H4v2H2v2h2v2h2v2h2v2h2v-2H8v-2H6v-2H4v-2h2V9h2zm0 0h2V5H8z"></svg:path>`,
})
export class PixelarticonsReplyAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
