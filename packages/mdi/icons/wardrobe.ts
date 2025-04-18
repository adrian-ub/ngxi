import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWardrobeIcon],svg[mdi-wardrobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v15c0 1.1.9 2 2 2v1h2v-1h3.5V2H6c-1.1 0-2 .9-2 2m4 6h2v3H8zm10-8h-5.5v19H16v1h2v-1c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2 11h-2v-3h2z"></svg:path>`,
})
export class MdiWardrobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
