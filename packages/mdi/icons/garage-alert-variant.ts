import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGarageAlertVariantIcon],svg[mdi-garage-alert-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9v11h-2v-9H2v9H0V9l10-4zm-3 3H3v2h14zm0 3H3v2h14zm5 0v-5h2v5zm0 4v-2h2v2z"></svg:path>`,
})
export class MdiGarageAlertVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
