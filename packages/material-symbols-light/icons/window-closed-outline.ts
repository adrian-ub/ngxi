import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWindowClosedOutlineIcon],svg[material-symbols-light-window-closed-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20V4h14v16zm1-8.5h5.23v-.77h1.54v.77H18V5H6zM6 19h12v-6.5H6zm0 0h12z"></svg:path>`,
})
export class MaterialSymbolsLightWindowClosedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
