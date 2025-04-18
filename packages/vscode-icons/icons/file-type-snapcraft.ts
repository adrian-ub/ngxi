import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeSnapcraftIcon],svg[vscode-icons-file-type-snapcraft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#82bfa1" fill-rule="evenodd" d="m18.105 8.876l6.173 2.667l-6.173 6ZM6.318 29L17.21 18.413L13.887 15.2ZM2 3l15.582 15.052V8.474Z"></svg:path><svg:path fill="#fa6340" fill-rule="evenodd" d="M27.436 8.473h-8.972L30 13.457Z"></svg:path>`,
})
export class VscodeIconsFileTypeSnapcraftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
