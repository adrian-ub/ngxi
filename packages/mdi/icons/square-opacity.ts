import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSquareOpacityIcon],svg[mdi-square-opacity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13v-2h2v2zm2-4V7h-2v2zm0-6h-2v2h2zm-4 12h2v-2h-2zm4 2v-2h-2v2zm-8 0v-2h2v-2h-2v-2h2V9h-2V7h2V5h-2V3H3v18h10v-2h2v-2zm2 4h2v-2h-2zm2-18h-2v2h2zm0 8h2V9h-2zm-2 6h2v-2h-2zm2 2h2v-2h-2zm4 2v-2h-2v2zM15 9h2V7h-2zm0 4h2v-2h-2zm2-8v2h2V5z"></svg:path>`,
})
export class MdiSquareOpacityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
