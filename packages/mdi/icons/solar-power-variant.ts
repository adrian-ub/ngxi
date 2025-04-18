import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSolarPowerVariantIcon],svg[mdi-solar-power-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.33 16H11v-3H4zM13 16h7.67L20 13h-7zm8.11 2H13v4h9zM2 22h9v-4H2.89zm9-14h2v3h-2zm4.76-.79l1.42-1.42l2.12 2.12l-1.41 1.42zm-11.05.7l2.12-2.12l1.41 1.42l-2.12 2.12zM3 2h3v2H3zm15 0h3v2h-3zm-6 5c2.76 0 5-2.24 5-5H7c0 2.76 2.24 5 5 5"></svg:path>`,
})
export class MdiSolarPowerVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
