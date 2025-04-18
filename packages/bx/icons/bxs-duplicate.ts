import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsDuplicateIcon],svg[bx-bxs-duplicate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M4 22h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2zm2-9h3v-3h2v3h3v2h-3v3H9v-3H6v-2z" fill="currentColor"></svg:path><svg:path d="M20 2H8v2h12v12h2V4c0-1.103-.897-2-2-2z" fill="currentColor"></svg:path>`,
})
export class BxBxsDuplicateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
