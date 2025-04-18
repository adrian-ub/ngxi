import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiContainIcon],svg[mdi-contain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h6v2H4v14h4v2H2zm5 14v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm7-14v18h-6v-2h4V5h-4V3z"></svg:path>`,
})
export class MdiContainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
