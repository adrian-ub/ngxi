import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsFirstAidIcon],svg[bxs-first-aid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-3V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M9 4h6v2H9zm7 10h-3v3h-2v-3H8v-2h3V9h2v3h3z"></svg:path>`,
})
export class BxsFirstAidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
