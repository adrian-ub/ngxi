import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiBowlWithSpoonIcon],svg[twemoji-bowl-with-spoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#A0041E" d="M16 31c8.837 0 16-7.163 16-16H0c0 8.837 7.164 16 16 16"></svg:path><svg:ellipse cx="16" cy="15" fill="#EA596E" rx="16.051" ry="8.917"></svg:ellipse><svg:ellipse cx="16" cy="15" fill="#662113" rx="14.641" ry="7.719"></svg:ellipse><svg:path fill="#99AAB5" d="M34 8c-1 0-4 1-8 4c-4.525 3.394-7.596 2.187-7.596 2.187l.001.003C16.981 13.453 15.087 13 13 13c-4.418 0-8 2.015-8 4.5S8.582 22 13 22c2.773 0 5.216-.794 6.651-2c0 0 4.995-4.431 7.349-6c3-2 5-3 7-3s2-3 0-3"></svg:path><svg:ellipse cx="13" cy="19" fill="#CCD6DD" rx="5" ry="2.5"></svg:ellipse>`,
})
export class TwemojiBowlWithSpoonIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
