import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideoStableOutlineSharpIcon],svg[material-symbols-video-stable-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h20v16zm2-2h16V6H4zm12.975 0l2.3-8.65L7.075 6l-2.3 8.65zm-1.425-2.45l-8.325-2.3L8.5 8.45l8.325 2.3zM4 18V6z"></svg:path>`,
})
export class MaterialSymbolsVideoStableOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
