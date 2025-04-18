import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStrategyOutlineIcon],svg[material-symbols-light-strategy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10.846L3 9.135V5.712L6 4l3 1.712v3.423zM6 9.7l2-1.138V6.285L6 5.146L4 6.285v2.277zm10.27 1.229V9.777L19 11.366v6.423L13.5 21L8 17.788v-6.422l2.73-1.589v1.152L9 11.939v5.279l4.5 2.61l4.5-2.61v-5.28zM13 14V3h8l-1.654 2.5L21 8h-7v6zM6 7.423"></svg:path>`,
})
export class MaterialSymbolsLightStrategyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
