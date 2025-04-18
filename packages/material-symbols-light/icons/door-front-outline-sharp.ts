import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDoorFrontOutlineSharpIcon],svg[material-symbols-light-door-front-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-1h2V4h12v15h2v1zm3-1h10V5H7zm7.23-6.23q.31 0 .54-.23T15 12t-.23-.54t-.54-.23t-.539.23t-.23.54t.23.54t.54.23M7 5v14z"></svg:path>`,
})
export class MaterialSymbolsLightDoorFrontOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
