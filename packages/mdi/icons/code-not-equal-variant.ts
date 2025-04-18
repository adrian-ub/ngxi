import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCodeNotEqualVariantIcon],svg[mdi-code-not-equal-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6.5v2.83L8.33 12L11 14.67v2.83L5.5 12M13 6.43L18.57 12L13 17.57v-2.83L15.74 12L13 9.26M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"></svg:path>`,
})
export class MdiCodeNotEqualVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
