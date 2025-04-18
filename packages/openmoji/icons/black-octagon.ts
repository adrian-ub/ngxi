import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBlackOctagonIcon],svg[openmoji-black-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M15.78 16.83a1.94 1.94 0 0 1 1.05-1.05l18.427-7.632a1.94 1.94 0 0 1 1.486 0l18.426 7.632a1.94 1.94 0 0 1 1.05 1.05l7.633 18.427a1.94 1.94 0 0 1 0 1.486L56.22 55.169a1.94 1.94 0 0 1-1.05 1.05l-18.427 7.633a1.94 1.94 0 0 1-1.486 0L16.831 56.22a1.94 1.94 0 0 1-1.05-1.05L8.147 36.742a1.94 1.94 0 0 1 0-1.486z"></svg:path><svg:path fill="#3F3F3F" d="M15.78 16.83a1.94 1.94 0 0 1 1.05-1.05l18.427-7.632a1.94 1.94 0 0 1 1.486 0l18.426 7.632a1.94 1.94 0 0 1 1.05 1.05l7.633 18.427a1.94 1.94 0 0 1 0 1.486L56.22 55.169a1.94 1.94 0 0 1-1.05 1.05l-18.427 7.633a1.94 1.94 0 0 1-1.486 0L16.831 56.22a1.94 1.94 0 0 1-1.05-1.05L8.147 36.742a1.94 1.94 0 0 1 0-1.486z"></svg:path><svg:path fill="none" stroke="#000" stroke-width="2" d="M15.78 16.83a1.94 1.94 0 0 1 1.05-1.05l18.427-7.632a1.94 1.94 0 0 1 1.486 0l18.426 7.632a1.94 1.94 0 0 1 1.05 1.05l7.633 18.427a1.94 1.94 0 0 1 0 1.486L56.22 55.169a1.94 1.94 0 0 1-1.05 1.05l-18.427 7.633a1.94 1.94 0 0 1-1.486 0L16.831 56.22a1.94 1.94 0 0 1-1.05-1.05L8.147 36.742a1.94 1.94 0 0 1 0-1.486z"></svg:path>`,
})
export class OpenmojiBlackOctagonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
