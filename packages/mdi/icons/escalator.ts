import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEscalatorIcon],svg[mdi-escalator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8h-1.05l-12 12H4a2 2 0 0 1-2-2a2 2 0 0 1 2-2h1.29L7 14.29V10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1.29L17.29 4H20a2 2 0 0 1 2 2a2 2 0 0 1-2 2M8.5 5A1.5 1.5 0 0 1 10 6.5A1.5 1.5 0 0 1 8.5 8A1.5 1.5 0 0 1 7 6.5A1.5 1.5 0 0 1 8.5 5"></svg:path>`,
})
export class MdiEscalatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
