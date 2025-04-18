import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolMailIcon],svg[websymbol-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M105 5h1152q43 0 74 31t31 74v785q0 44-31 74.5t-74 30.5H105q-43 0-74-30.5T0 895V110q0-43 31-74t74-31m69 157l507 423l507-423zm-17 681h1048V285L711 697h-61L157 285z"></svg:path>`,
})
export class WebsymbolMailIcon {
  readonly viewBox = input("0 0 1360 1000")
  readonly width = input("1.36em")
  readonly height = input("1em")
}
