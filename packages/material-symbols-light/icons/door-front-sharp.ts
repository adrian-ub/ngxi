import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDoorFrontSharpIcon],svg[material-symbols-light-door-front-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20h16v-1h-2V4H6v15H4zm10.23-7.23q-.309 0-.539-.23t-.23-.54t.23-.54t.54-.23t.54.23T15 12t-.23.54t-.54.23"></svg:path>`,
})
export class MaterialSymbolsLightDoorFrontSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
