import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPagePreviousIcon],svg[mdi-page-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21h15a2 2 0 0 0 2-2v-6h-4v2l-4-3l4-3v2h4V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2m0-6h4v2H4zm0-4h7v2H4zm0-4h7v2H4zm17 4h3v2h-3z"></svg:path>`,
})
export class MdiPagePreviousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
