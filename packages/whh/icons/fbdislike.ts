import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFbdislikeIcon],svg[whh-fbdislike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 0H576l-64 64H320V0H0v576h320v-64h64l96 96l160 352h192V800l-64-96v-64h160l96-64V64zM256 512H64V64h192zm704 21l-64 43H704v160l64 96v64h-79L544 576L416 448h-96V128h224l64-64h288l64 43z"></svg:path>`,
})
export class WhhFbdislikeIcon {
  readonly viewBox = input("0 0 1024 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
