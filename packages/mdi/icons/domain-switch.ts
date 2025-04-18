import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDomainSwitchIcon],svg[mdi-domain-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9h2v2h-2zm6 6V5H12V1H2v14zm-2-2h-8v-2h2V9h-2V7h8zM8 5V3h2v2zm0 4V7h2v2zm0 4v-2h2v2zM4 5V3h2v2zm0 4V7h2v2zm0 4v-2h2v2zm5 4v2h6v-2l3 3l-3 3v-2H9v2l-3-3z"></svg:path>`,
})
export class MdiDomainSwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
