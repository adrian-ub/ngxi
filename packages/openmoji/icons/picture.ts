import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPictureIcon],svg[openmoji-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#B1CC33" d="M6 41h60v13H6z"></svg:path><svg:path fill="#5C9E31" d="M42 41h24v13H31z"></svg:path><svg:path fill="#92D3F5" d="M6 18h60v23H6z"></svg:path><svg:path fill="#61B2E4" d="M61 18h5v23H42z"></svg:path><svg:path fill="#D0CFCE" d="m22 43l11-11l11 11z"></svg:path><svg:path fill="#D0CFCE" d="m28.546 43.046l16.5-16.5L60.75 42.25z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M6 18h60v36H6z"></svg:path><svg:path d="M44 43H22l11-11l6.998 6.998"></svg:path><svg:path d="M39.797 33.203L45 28l15 15H43.999"></svg:path></svg:g>`,
})
export class OpenmojiPictureIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
