import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAutoReadPauseSharpIcon],svg[material-symbols-light-auto-read-pause-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.808 13.5h1v-7h-1zm3.384 0h1v-7h-1zM3 20.077V3h18v14H6.077z"></svg:path>`,
})
export class MaterialSymbolsLightAutoReadPauseSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
