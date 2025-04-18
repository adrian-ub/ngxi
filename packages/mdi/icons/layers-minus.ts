import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLayersMinusIcon],svg[mdi-layers-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17v2h-8v-2zm-11-1L2 9l9-7l9 7zm0 2.54l1-.79V18c0 .71.12 1.39.35 2L11 21.07l-9-7l1.62-1.26z"></svg:path>`,
})
export class MdiLayersMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
