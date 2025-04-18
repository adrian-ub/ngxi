import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderBlocIcon],svg[material-icon-theme-folder-bloc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#26A69A" d="m13.8 7.5l-1.3-1.1c-.3-.2-.8-.4-1.2-.4H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2H15.1c-.5 0-.9-.1-1.3-.5"></svg:path><svg:path fill="#B2DFDB" d="m25 12l7 4.198v8.103L25 28.5l-7-4.212V16.21z"></svg:path></svg:g>`,
})
export class MaterialIconThemeFolderBlocIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
