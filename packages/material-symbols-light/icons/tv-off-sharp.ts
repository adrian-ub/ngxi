import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTvOffSharpIcon],svg[material-symbols-light-tv-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.767 17.167L7.6 4H21v13.167zM4.81 4.041v1.415L2.161 2.808l.707-.708l18.685 18.685l-.708.707L17.354 18h-2.315v2H9v-2H3V4.04z"></svg:path>`,
})
export class MaterialSymbolsLightTvOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
