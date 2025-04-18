import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsPnpmIcon],svg[file-icons-pnpm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M502 10v140H362V10zm-176 0v140H186V10zm-176 0v140H10V10zm352 176v140H362V186zM512 0H352v160h160zM336 0H176v160h160zM160 0H0v160h160zm352 176H352v160h160zM336 336H176V176h160zm0 16H176v160h160zm176 0H352v160h160zm-352 0H0v160h160z"></svg:path>`,
})
export class FileIconsPnpmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
