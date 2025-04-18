import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiMegaphoneIcon],svg[twemoji-megaphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M14 19a6 6 0 1 0 0 12a6 6 0 0 0 0-12m0 10a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path><svg:path fill="#55ACEE" d="M1.783 14.023v.02C.782 14.263 0 15.939 0 18s.782 3.737 1.783 3.956v.021l28.701 7.972V6.064z"></svg:path><svg:ellipse cx="31" cy="18" fill="#269" rx="5" ry="12"></svg:ellipse>`,
})
export class TwemojiMegaphoneIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
