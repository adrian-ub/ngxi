import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsNoonIcon],svg[file-icons-noon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M127.711 34.453c-170.281 98.17-170.281 344.925 0 443.094S512 452.338 512 256S297.992-63.716 127.711 34.453M286.662 254.25c0 45.226-62.696 45.226-62.696 0V65.598c0-43.33 62.696-43.33 62.696 0z"></svg:path>`,
})
export class FileIconsNoonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
