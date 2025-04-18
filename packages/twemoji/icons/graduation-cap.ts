import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiGraduationCapIcon],svg[twemoji-graduation-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#31373D" d="M24 14H12s-5 6-5 10s11 11 11 11s11-7 11-11s-5-10-5-10"></svg:path><svg:path fill="#292F33" d="M19.64 1.28c-.901-.704-2.377-.704-3.278 0L1.639 12.776c-.901.704-.901 1.856 0 2.56l14.722 11.495c.902.704 2.377.704 3.278 0l14.722-11.495c.902-.704.902-1.856 0-2.56z"></svg:path><svg:path fill="#394146" d="M19.64 1.28c-.901-.704-2.377-.704-3.278 0L1.639 12.776c-.901.704-.901 1.856 0 2.56l14.722 11.495c.901.704 2.377.704 3.278 0l14.723-11.495c.901-.704.901-1.856 0-2.56z"></svg:path><svg:path fill="#FCAB40" d="M8 25s-2 2-2 3v6s0 2 2 2s2-2 2-2v-6c0-1-2-3-2-3"></svg:path><svg:circle cx="8" cy="26" r="3" fill="#FDD888"></svg:circle><svg:path fill="#FCAB40" d="M8.001 27a1 1 0 0 1-1-1v-3.958c-.042-.634.187-2.036 1.317-2.884l9.022-7.91a1 1 0 0 1 1.318 1.504l-9.08 7.958C8.974 21.166 9 21.982 9 21.99L9.002 26a1 1 0 0 1-1.001 1"></svg:path><svg:circle cx="18" cy="13" r="3" fill="#31373D"></svg:circle>`,
})
export class TwemojiGraduationCapIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
