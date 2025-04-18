import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpTimer3SelectIcon],svg[ic-sharp-timer-3-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11v2h-4v1h4v5h-6v-2h4v-1h-4v-5zM4 5v3h6v2.5H4v3h6V16H4v3h9V5z"></svg:path>`,
})
export class IcSharpTimer3SelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
