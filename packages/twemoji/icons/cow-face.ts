import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiCowFaceIcon],svg[twemoji-cow-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#99AAB5" d="M4 8s-4 2-4 11c0 0 6-1 7-3c0 0 2-12.25-3-8m27.995.043s4 2 4 11c0 0-6-.999-7-2.999c0 0-2-12.251 3-8.001"></svg:path><svg:path fill="#FFE8B6" d="M1 1c-1.01.99 1 8 5 9s4-5 3-5C5 5 3.042-1 1 1m34.297 0c1.011.99-1 8-5 9s-4-5-3-5c4 0 5.959-6 8-4"></svg:path><svg:path fill="#CCD6DD" d="M21.976 31h-7.951C8.488 31 4 26.512 4 20.976v-8.951C4 6.488 8.488 2 14.025 2h7.951C27.512 2 32 6.488 32 12.025v8.951C32 26.512 27.512 31 21.976 31"></svg:path><svg:path fill="#E6AAAA" d="M35 28c0 5.522-4.478 8-10 8H11c-5.523 0-10-2.478-10-8s4.477-10 10-10h14c5.522 0 10 4.478 10 10"></svg:path><svg:ellipse cx="9.5" cy="26" fill="#C1694F" rx="1.5" ry="3"></svg:ellipse><svg:ellipse cx="26.5" cy="26" fill="#C1694F" rx="1.5" ry="3"></svg:ellipse><svg:path fill="#272B2B" d="M11 12s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2zm10 0s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2z"></svg:path>`,
})
export class TwemojiCowFaceIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
