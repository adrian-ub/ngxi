import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsNanocIcon],svg[file-icons-nanoc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128.676 356.921V153.88h90.33l81.536 113.111V153.88h78.339v203.04h-89.13l-83.008-111.835l-1.326 111.835zm-.965-322.468c-170.281 98.17-170.281 344.925 0 443.094S512 452.338 512 256S297.993-63.716 127.711 34.453m26.439 397.435c-135.188-77.937-135.188-273.839 0-351.776S459.241 100.125 459.241 256S289.338 509.826 154.15 431.888"></svg:path>`,
})
export class FileIconsNanocIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
