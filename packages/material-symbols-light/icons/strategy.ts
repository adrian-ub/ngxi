import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStrategyIcon],svg[material-symbols-light-strategy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 21L8 17.788v-6.422l2.73-1.589v6.492h5.54V9.777L19 11.366v6.423zM6 10.846L3 9.135V5.712L6 4l3 1.712v3.423zM13 14V3h8l-1.654 2.5L21 8h-7v6z"></svg:path>`,
})
export class MaterialSymbolsLightStrategyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
