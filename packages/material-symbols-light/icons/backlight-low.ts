import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBacklightLowIcon],svg[material-symbols-light-backlight-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.616 14.5v-1H5v1zm4.08-5.096L5.014 7.702l.688-.689l1.683 1.702zM7.5 17v-2h9v2zm4-10V4.616h1V7zm5.766 2.39l-.689-.713l1.702-1.664l.688.714zM19 14.5v-1h2.385v1z"></svg:path>`,
})
export class MaterialSymbolsLightBacklightLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
