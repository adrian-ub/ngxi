import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggInboxIcon],svg[gg-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v15a2 2 0 0 1-2 2H8.148a2 2 0 0 1-.148.005H4a2 2 0 0 1-2-2zm3-1h14a1 1 0 0 1 1 1v9h-4a2 2 0 0 0-2 2v1h-4v-.995a2 2 0 0 0-2-2H4V5a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class GgInboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
