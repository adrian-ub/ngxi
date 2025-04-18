import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoOutdentIcon],svg[fontisto-outdent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.999 21.333H1.334a1.334 1.334 0 0 0-.002 2.666h26.667a1.334 1.334 0 0 0 .002-2.666zm0-5.333H14.667l-.037-.001a1.334 1.334 0 1 0 0 2.668l.039-.001h-.002H28A1.334 1.334 0 0 0 28.002 16H28zm0-5.333H14.667l-.037-.001a1.334 1.334 0 1 0 0 2.668l.039-.001h-.002H28a1.334 1.334 0 0 0 .002-2.666H28zM1.334 2.666h26.665l.037.001a1.334 1.334 0 1 0 0-2.668L27.997 0h.002H1.334a1.334 1.334 0 0 0-.002 2.666zm26.665 2.667H14.667l-.037-.001a1.334 1.334 0 1 0 0 2.668l.039-.001h-.002H28l.037.001a1.334 1.334 0 1 0 0-2.668l-.039.001H28zm-22.275.39L.391 11.057c-.241.241-.39.574-.39.942s.149.701.39.942l5.333 5.333A1.334 1.334 0 0 0 8 17.332V6.666a1.334 1.334 0 0 0-2.276-.942z"></svg:path>`,
})
export class FontistoOutdentIcon {
  readonly viewBox = input("0 0 29 24")
  readonly width = input("1.21em")
  readonly height = input("1em")
}
