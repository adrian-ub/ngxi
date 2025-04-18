import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiRazorIcon],svg[arcticons-emoji-razor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.882 15.205s0 23.05.605 25.475c.605 2.427 2.42 2.427 3.026 0c1.23-4.927.605-25.475.605-25.475M15.83 10.959s6.052 3.033 6.052 4.246"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.118 15.205c0-1.03 4.367-3.373 5.682-4.056c.233-.121.37-.19.37-.19M14.316 8.23h19.368"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.674 5.5h16.652c.75 0 1.358.61 1.358 1.36h0v2.738a1.36 1.36 0 0 1-1.358 1.361H15.674a1.36 1.36 0 0 1-1.358-1.36V6.86a1.36 1.36 0 0 1 1.358-1.361"></svg:path>`,
})
export class ArcticonsEmojiRazorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
