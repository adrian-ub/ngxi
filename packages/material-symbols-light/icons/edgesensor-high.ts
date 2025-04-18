import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEdgesensorHighIcon],svg[material-symbols-light-edgesensor-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.27 16.5v-6h1v6zm2.769-3v-6h1v6zM8.423 21q-.69 0-1.153-.462t-.462-1.153V4.615q0-.69.462-1.152T8.423 3h7.154q.69 0 1.153.463t.462 1.153v14.769q0 .69-.462 1.153T15.577 21zm10.539-4.5v-6h1v6zm2.769-3v-6h1v6zm-13.923 4h8.384v-11H7.808z"></svg:path>`,
})
export class MaterialSymbolsLightEdgesensorHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
