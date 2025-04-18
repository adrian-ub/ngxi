import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEastIcon],svg[material-symbols-light-east-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.673 18.327l-.713-.688l5.157-5.158H3v-1h16.137l-5.152-5.158l.688-.688l6.346 6.346z"></svg:path>`,
})
export class MaterialSymbolsLightEastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
