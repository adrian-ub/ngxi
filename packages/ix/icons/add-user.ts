import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAddUserIcon],svg[ix-add-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 320v64h64v42.667h-64v64H384v-64h-64V384h64v-64zm-176-85.333c60.31 0 109.485 49.03 111.906 110.451l.094 4.749v12.8H320v-12.8c0-38.933-29.192-70.302-65.425-72.42l-3.908-.113H176c-36.708 0-67.166 30.026-69.223 68.392l-.11 4.141V384h192v42.667H64v-76.8c0-62.033 47.668-112.614 107.383-115.104l4.617-.096zm-37.334-192c41.238 0 74.667 33.43 74.667 74.667c0 39.862-31.238 72.429-70.57 74.556l-4.097.11c-41.237 0-74.666-33.43-74.666-74.666c0-39.863 31.238-72.43 70.57-74.557zm0 42.667c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32"></svg:path>`,
})
export class IxAddUserIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
