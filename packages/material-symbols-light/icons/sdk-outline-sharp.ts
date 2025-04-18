import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSdkOutlineSharpIcon],svg[material-symbols-light-sdk-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V6.627L5.78 4.5h12.44L20 6.627V20zM5.4 6.5h13.2l-.85-1H6.25zM5 19h14V7.5H5zm10.93-5.5l-2.1 2.1l.72.72l2.82-2.82l-2.82-2.82l-.72.72zm-7.81 0l2.1-2.1l-.72-.72l-2.82 2.82l2.82 2.82l.72-.72zM5 19V7.5z"></svg:path>`,
})
export class MaterialSymbolsLightSdkOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
