import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatSizeRoundedIcon],svg[material-symbols-light-format-size-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.827 6.25h-4.308q-.256 0-.436-.18t-.18-.438t.18-.444T10.52 5h9.866q.256 0 .436.18q.179.18.179.438q0 .257-.18.444t-.435.188h-4.308v12.135q0 .256-.18.436q-.18.179-.438.179q-.257 0-.444-.185q-.188-.185-.188-.45zm-8.865 4.904H3.616q-.257 0-.436-.18q-.18-.18-.18-.438q0-.257.18-.445t.436-.187h5.923q.256 0 .435.18t.18.438t-.18.444t-.435.188H7.192v7.23q0 .257-.18.436q-.18.18-.437.18q-.258 0-.435-.18q-.178-.179-.178-.436z"></svg:path>`,
})
export class MaterialSymbolsLightFormatSizeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
