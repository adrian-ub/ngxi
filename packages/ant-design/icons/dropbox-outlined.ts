import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignDropboxOutlinedIcon],svg[ant-design-dropbox-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m64 556.9l264.2 173.5L512.5 577L246.8 412.7zm896-290.3L696.8 95L512.5 248.5l265.2 164.2L512.5 577l184.3 153.4L960 558.8L777.7 412.7zM513 609.8L328.2 763.3l-79.4-51.5v57.8L513 928l263.7-158.4v-57.8l-78.9 51.5zM328.2 95L64 265.1l182.8 147.6l265.7-164.2zM64 556.9"></svg:path>`,
})
export class AntDesignDropboxOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
