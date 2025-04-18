import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiExpansionCardIcon],svg[mdi-expansion-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v1.5h1V17h1.5V7zm4 0v9h1v1h7v-1h8V7zm11.5 2a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 17.5 9"></svg:path>`,
})
export class MdiExpansionCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
