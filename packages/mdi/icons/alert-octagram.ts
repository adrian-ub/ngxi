import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAlertOctagramIcon],svg[mdi-alert-octagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.2 16.06L3.88 12L2.2 7.94l4.06-1.68L7.94 2.2L12 3.88l4.06-1.68l1.68 4.06l4.06 1.68L20.12 12l1.68 4.06l-4.06 1.68l-1.68 4.06L12 20.12L7.94 21.8l-1.68-4.06zM13 17v-2h-2v2zm0-4V7h-2v6z"></svg:path>`,
})
export class MdiAlertOctagramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
