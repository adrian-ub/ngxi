import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDocumentCodeIcon],svg[ix-document-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m307.503 42.668l119.164 119.163v307.504H85.333V42.668zm-17.69 42.667H128v341.333h256V179.521zm-23.302 83.231l20.696 5.174l-42.667 170.667l-20.696-5.174zm-72.174 27.439l16.659 13.326l-37.343 46.649l37.343 46.691l-16.659 13.327l-47.997-59.997zm123.405 0l47.998 59.996l-47.998 59.997l-16.658-13.327l37.342-46.691l-37.342-46.649z"></svg:path>`,
})
export class IxDocumentCodeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
