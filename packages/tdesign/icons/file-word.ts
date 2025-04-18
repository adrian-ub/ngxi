import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileWordIcon],svg[tdesign-file-word-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h12.414L21 6.586V23H3zm2 2v18h14V9h-6V3zm10 .414V7h3.586zM10 11v5h1v-5h2v5h1v-5h2v5a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-5z"></svg:path>`,
})
export class TdesignFileWordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
