import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxDuplicateIcon],svg[bx-duplicate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 10H9v3H6v2h3v3h2v-3h3v-2h-3z"></svg:path><svg:path fill="currentColor" d="M4 22h12c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2M4 8h12l.002 12H4z"></svg:path><svg:path fill="currentColor" d="M20 2H8v2h12v12h2V4c0-1.103-.897-2-2-2"></svg:path>`,
})
export class BxDuplicateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
