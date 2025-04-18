import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGateOpenIcon],svg[mdi-gate-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21V7H5v4H3V9H1v12h2v-2h2v2zm-4-4v-4h2v4zm18-8v2h-2V7h-2v14h2v-2h2v2h2V9zm0 8h-2v-4h2z"></svg:path>`,
})
export class MdiGateOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
