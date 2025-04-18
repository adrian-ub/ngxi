import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedEngIcon],svg[token-branded-eng-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#fff" d="m11.972 3l7.779 4.464v8.928l-7.78 4.464l-7.722-4.464V7.464z"></svg:path><svg:path fill="#065198" d="M11.968 11.876L7.866 9.52v4.509l4.102 2.64z"></svg:path><svg:path fill="#21B1F8" d="m12 12.078l4.133-2.367v4.532L12 16.811z"></svg:path><svg:path fill="#E82E9D" d="m12 6.971l4.138 2.566l-4.139 2.299l-4.097-2.298z"></svg:path><svg:path fill="#0C0E15" d="M3.945 7.163a.274.274 0 0 0 .1.375l7.684 4.474v8.714a.274.274 0 1 0 .548 0v-8.714l7.674-4.456a.274.274 0 1 0-.275-.473l-7.673 4.454L4.32 7.065a.274.274 0 0 0-.375.098M12 5.274a.44.44 0 1 0 0-.882a.44.44 0 0 0 0 .882m0 1.207a.44.44 0 1 0 0-.881a.44.44 0 0 0 0 .881m-5.034 8.51a.44.44 0 1 0 0-.881a.44.44 0 0 0 0 .881m-1.208.756a.44.44 0 1 0 0-.881a.44.44 0 0 0 0 .881m11.358-.756a.44.44 0 1 1 0-.881a.44.44 0 0 1 0 .881m1.209.756a.44.44 0 1 1 0-.882a.44.44 0 0 1 0 .882"></svg:path></svg:g>`,
})
export class TokenBrandedEngIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
