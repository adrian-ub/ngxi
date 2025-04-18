import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsSnapcraftIcon],svg[file-icons-snapcraft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m294.5 122l112.9 50.2L294.5 285zM79 500.6l199.2-199.2l-60.8-60.4zM0 11.4l284.9 283.2V114.4zm465.1 103h-164L512 208.2z"></svg:path>`,
})
export class FileIconsSnapcraftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
