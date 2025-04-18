import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGarageVariantIcon],svg[mdi-garage-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9v11h-2v-9H4v9H2V9l10-4zm-3 3H5v2h14zm0 6H5v2h14zm0-3H5v2h14z"></svg:path>`,
})
export class MdiGarageVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
