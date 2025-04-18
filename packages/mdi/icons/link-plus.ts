import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLinkPlusIcon],svg[mdi-link-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7h4v2H7a3 3 0 0 0-3 3a3 3 0 0 0 3 3h4v2H7a5 5 0 0 1-5-5a5 5 0 0 1 5-5m10 0a5 5 0 0 1 5 5h-2a3 3 0 0 0-3-3h-4V7zm-9 4h8v2H8zm9 1h2v3h3v2h-3v3h-2v-3h-3v-2h3z"></svg:path>`,
})
export class MdiLinkPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
