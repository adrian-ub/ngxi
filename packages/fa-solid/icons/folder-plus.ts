import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidFolderPlusIcon],svg[fa-solid-folder-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 128H272l-64-64H48a48 48 0 0 0-48 48v288a48 48 0 0 0 48 48h416a48 48 0 0 0 48-48V176a48 48 0 0 0-48-48M359.5 296a16 16 0 0 1-16 16h-64v64a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-64h-64a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h64v-64a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16v64h64a16 16 0 0 1 16 16Z"></svg:path>`,
})
export class FaSolidFolderPlusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
