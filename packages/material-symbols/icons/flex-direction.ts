import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlexDirectionIcon],svg[material-symbols-flex-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20v-7h9v7zm0-9V4h9v7zm2-2h5V6H4zm14 11l-5-5l1.4-1.4l2.6 2.575V4h2v12.175l2.6-2.575L23 15z"></svg:path>`,
})
export class MaterialSymbolsFlexDirectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
