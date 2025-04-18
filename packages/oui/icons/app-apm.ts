import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiAppApmIcon],svg[oui-app-apm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10h4v2H1V1h30v6h-2V3H3zm26 19v-6h2v8H18v-8h2v6z"></svg:path><svg:path fill="currentColor" d="M31 10H9v11h12c5.523 0 10-4.477 10-10zm-10 9H11v-7h17.938A8 8 0 0 1 21 19" class="ouiIcon__fillSecondary"></svg:path>`,
})
export class OuiAppApmIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
