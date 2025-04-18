import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWardrobeOutlineIcon],svg[mdi-wardrobe-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v15c0 1.11.89 2 2 2v1h2v-1h8v1h2v-1c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2zm0 2h5v15H6zm7 0h5v15h-5zm-5 6v3h2v-3zm6 0v3h2v-3z"></svg:path>`,
})
export class MdiWardrobeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
