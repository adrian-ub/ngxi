import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsChat2TextIcon],svg[majesticons-chat-2-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 11c0-5.167 5.145-9 11-9s11 3.833 11 9s-5.145 9-11 9c-1.198 0-2.354-.156-3.437-.447c-.785.662-1.59 1.244-2.54 1.672C4.894 21.735 3.617 22 2 22a1 1 0 0 1-.707-1.707c.876-.876 1.843-1.914 2.368-3.416C2.029 15.327 1 13.28 1 11m7-5a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsChat2TextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
