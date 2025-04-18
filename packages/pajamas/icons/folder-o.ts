import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasFolderOIcon],svg[pajamas-folder-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 4V2.5h4.697l1 1.5zM0 4V2a1 1 0 0 1 1-1h5.465a1 1 0 0 1 .832.445l1.667 2.5l.034.055H15a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm1.5 1.5v7h13v-7z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasFolderOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
