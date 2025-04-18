import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPauseOutlineIcon],svg[material-symbols-light-pause-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 18V6H18v12zM6 18V6h4.5v12zm8.5-1H17V7h-2.5zM7 17h2.5V7H7zM7 7v10zm7.5 0v10z"></svg:path>`,
})
export class MaterialSymbolsLightPauseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
