import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsDiploma1Icon],svg[flat-color-icons-diploma-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E8EAF6" d="M4 9h40v30H4z"></svg:path><svg:path fill="#5C6BC0" d="M30 34h2.8l-5-5l-2.8 2.8l5 5zm-12 0h-2.8l5-5l2.8 2.8l-5 5z"></svg:path><svg:path fill="#9FA8DA" d="M11 15h26v4H11zm13 8c-2.8 0-5 2.2-5 5s2.2 5 5 5s5-2.2 5-5s-2.2-5-5-5m0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3"></svg:path><svg:path fill="#9FA8DA" d="M3 8v32h42V8zm40 27c-1.7 0-3 1.3-3 3H8c0-1.7-1.3-3-3-3V13c1.7 0 3-1.3 3-3h32c0 1.7 1.3 3 3 3z"></svg:path>`,
})
export class FlatColorIconsDiploma1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
