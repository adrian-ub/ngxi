import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsTwineIcon],svg[file-icons-twine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 281.073V0h192v94.65C106.01 132.14 30.952 197.93 0 281.072M0 416v96h192v-96c0-160 256-160 256-160V64S0 64 0 416"></svg:path>`,
})
export class FileIconsTwineIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
