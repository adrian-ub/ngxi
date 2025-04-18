import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsChecklistIcon],svg[pixelarticons-checklist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4h2v2h-2zm-2 4V6h2v2zm-2 0h2v2h-2zm0 0h-2V6h2zM3 6h8v2H3zm8 10H3v2h8zm7 2v-2h2v-2h-2v2h-2v-2h-2v2h2v2h-2v2h2v-2zm0 0v2h2v-2z"></svg:path>`,
})
export class PixelarticonsChecklistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
