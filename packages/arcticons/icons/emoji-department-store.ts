import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiDepartmentStoreIcon],svg[arcticons-emoji-department-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.57 5.5h30.86v37H8.57z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.657 34.792h6.171V42.5h-6.171zm18.515 0h6.171V42.5h-6.171zm-9.258 0h6.172V42.5h-6.172zM8.57 24h7.715v7.708H8.571zm7.715 0H24v7.708h-7.715zM24 24h7.715v7.708H24zm7.715 0h7.714v7.708h-7.714zM8.57 16.292h7.715V24H8.571zm7.715 0H24V24h-7.715zm7.715 0h7.715V24H24zm7.715 0h7.714V24h-7.714zM8.57 8.583h7.715v7.709H8.571zm7.715 0H24v7.709h-7.715zm7.715 0h7.715v7.709H24zm7.715 0h7.714v7.709h-7.714z"></svg:path>`,
})
export class ArcticonsEmojiDepartmentStoreIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
