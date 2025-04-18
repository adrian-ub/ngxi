import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVideoStableOutlineSharpIcon],svg[material-symbols-light-video-stable-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h18v14zm1-1h16V6H4zm12.975 0l2.3-8.689L7.075 6l-2.3 8.63zm-.713-1.239L5.994 13.942L7.79 7.22l10.267 2.8zM4 18V6z"></svg:path>`,
})
export class MaterialSymbolsLightVideoStableOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
