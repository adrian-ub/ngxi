import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxImageAddIcon],svg[bx-image-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4z"></svg:path><svg:path fill="currentColor" d="m8 11l-3 4h11l-4-6l-3 4z"></svg:path><svg:path fill="currentColor" d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></svg:path>`,
})
export class BxImageAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
