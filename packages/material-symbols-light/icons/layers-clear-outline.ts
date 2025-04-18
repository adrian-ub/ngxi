import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLayersClearOutlineIcon],svg[material-symbols-light-layers-clear-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.062 12.53l-.708-.718l3.396-2.62L12 4.742l-2.696 2.07l-.708-.72L12 3.462l7.385 5.73zm2.163 2.159l-.72-.72l2.076-1.592l.804.634zm2.921 7.18l-5.308-5.307L12 18.742l-7.385-5.73l.804-.635L12 17.462l2.1-1.633l-1.425-1.42l-.675.514l-7.385-5.73l1.594-1.26l-4.468-4.458l.713-.713l18.4 18.4zM11.83 9.312"></svg:path>`,
})
export class MaterialSymbolsLightLayersClearOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
