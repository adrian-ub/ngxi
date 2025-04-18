import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiIdentifierIcon],svg[mdi-identifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7v2H9v6h1v2H6v-2h1V9H6V7zm6 0a2 2 0 0 1 2 2v6c0 1.11-.89 2-2 2h-4V7m4 2h-2v6h2z"></svg:path>`,
})
export class MdiIdentifierIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
