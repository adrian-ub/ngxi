import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiContainStartIcon],svg[mdi-contain-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h6v2H4v14h4v2H2zm5 14v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2z"></svg:path>`,
})
export class MdiContainStartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
