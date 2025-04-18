import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBidLandscapeDisabledOutlineSharpIcon],svg[material-symbols-bid-landscape-disabled-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.825 1.775l20.4 20.4L20.8 23.6L18.2 21H3V5.8L.4 3.2zM9 12.95l-4 4V19h11.2l-2.6-2.6l-.55.6zM5 7.8v6.3l3.15-3.15zM5.9 3H21v15.1l-2-2v-5.85l-2.75 3.1l-1.425-1.425L19 7.25V5H7.9zm7.5 7.5"></svg:path>`,
})
export class MaterialSymbolsBidLandscapeDisabledOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
