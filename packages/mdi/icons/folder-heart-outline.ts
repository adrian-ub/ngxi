import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFolderHeartOutlineIcon],svg[mdi-folder-heart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18H4V8h16m0-2h-8l-2-2H4c-1.11 0-2 .89-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8a2 2 0 0 0-2-2m-7 4c-1.1 0-2 .92-2 2.05c0 .57.22 1.07.59 1.45L15 17l3.42-3.5c.36-.37.58-.89.58-1.45c0-1.13-.9-2.05-2-2.05c-.54 0-1.05.23-1.41.6l-.59.6l-.58-.59A2 2 0 0 0 13 10"></svg:path>`,
})
export class MdiFolderHeartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
