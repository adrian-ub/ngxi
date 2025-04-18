import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFridgeVariantIcon],svg[mdi-fridge-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4v15c0 1.11-.89 2-2 2v1h-2v-1h-2.5V2H17a2 2 0 0 1 2 2M7 2h4.5v19H9v1H7v-1a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2m3 8H7v4h3z"></svg:path>`,
})
export class MdiFridgeVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
