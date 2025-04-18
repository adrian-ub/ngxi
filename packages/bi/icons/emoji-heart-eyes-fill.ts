import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biEmojiHeartEyesFillIcon],svg[bi-emoji-heart-eyes-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.756 4.566c.763-1.424 4.02-.12.952 3.434c-4.496-1.596-2.35-4.298-.952-3.434m6.559 5.448a.5.5 0 0 1 .548.736A4.5 4.5 0 0 1 7.965 13a4.5 4.5 0 0 1-3.898-2.25a.5.5 0 0 1 .548-.736h.005l.017.005l.067.015l.252.055c.215.046.515.108.857.169c.693.124 1.522.242 2.152.242s1.46-.118 2.152-.242a27 27 0 0 0 1.109-.224l.067-.015l.017-.004l.005-.002zm-.07-5.448c1.397-.864 3.543 1.838-.953 3.434c-3.067-3.554.19-4.858.952-3.434z"></svg:path>`,
})
export class BiEmojiHeartEyesFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
