import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsContactDeleteIcon],svg[pixelarticons-contact-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3H0v18h16v-2H2V5h20v10h2V3zM6 7h4v4H6zm0 8H4v2h2zm4 0H6v-2h4zm0 0v2h2v-2zm4-8h6v2h-6zm6 4h-6v2h6zm-6 4h2v2h-2zm8 4h-2v-2h-2v2h2v2h-2v2h2v-2h2v2h2v-2h-2zm0 0h2v-2h-2z"></svg:path>`,
})
export class PixelarticonsContactDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
