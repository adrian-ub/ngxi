import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpAssistantDirectionIcon],svg[ic-sharp-assistant-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 10H8v5h2v-3h3.5v2.5L17 11l-3.5-3.5zM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11s11-4.9 11-11S18.1 1 12 1m8.31 11l-8.34 8.37L3.62 12l8.34-8.37z"></svg:path>`,
})
export class IcSharpAssistantDirectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
