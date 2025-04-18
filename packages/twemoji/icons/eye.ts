import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiEyeIcon],svg[twemoji-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E1E8ED" d="M35.059 18c0 3.304-7.642 11-17.067 11S.925 22.249.925 18c0-3.314 34.134-3.314 34.134 0"></svg:path><svg:path fill="#292F33" d="M35.059 18H.925c0-3.313 7.642-11 17.067-11s17.067 7.686 17.067 11"></svg:path><svg:path fill="#F5F8FA" d="M33.817 18c0 2.904-7.087 9.667-15.826 9.667S2.166 21.732 2.166 18c0-2.912 7.085-9.666 15.825-9.666C26.73 8.333 33.817 15.088 33.817 18"></svg:path><svg:circle cx="18" cy="18" r="8.458" fill="#8B5E3C"></svg:circle><svg:circle cx="18" cy="18" r="4.708" fill="#292F33"></svg:circle><svg:circle cx="14.983" cy="15" r="2" fill="#F5F8FA"></svg:circle>`,
})
export class TwemojiEyeIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
