import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFilterAltOffIcon],svg[material-symbols-light-filter-alt-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.089 11.264L7.825 5h10.156q.317 0 .467.28t-.052.55zm5.744 9.99L13 14.42v3.81q0 .328-.22.549t-.55.22h-.46q-.33 0-.55-.22t-.22-.55V12.42L2.746 4.167l.708-.713l17.092 17.092z"></svg:path>`,
})
export class MaterialSymbolsLightFilterAltOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
