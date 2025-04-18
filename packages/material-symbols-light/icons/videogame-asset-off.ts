import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVideogameAssetOffIcon],svg[material-symbols-light-videogame-asset-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 17q-.691 0-1.153-.462T3 15.378V8.616q0-.697.466-1.16q.465-.462 1.161-.462h2.367L14.5 14.5h-1.427L2.74 4.167l.714-.713l17.092 17.092l-.713.714l-4.26-4.26zM9.811 7h9.573q.69 0 1.153.463T21 8.623v6.762q0 .592-.35 1.015t-.887.552zm7.69 2.5q-.415 0-.709.291t-.293.707t.291.709t.707.293t.709-.291t.293-.707t-.291-.709t-.707-.293M7.5 14.5h1v-2h2v-1h-2v-2h-1v2h-2v1h2z"></svg:path>`,
})
export class MaterialSymbolsLightVideogameAssetOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
