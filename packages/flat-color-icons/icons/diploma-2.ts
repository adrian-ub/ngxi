import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsDiploma2Icon],svg[flat-color-icons-diploma-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FBE9E7" d="M9 4h30v40H9z"></svg:path><svg:path fill="#F4511E" d="M30 37h2.8l-5-5l-2.8 2.8l5 5zm-12 0h-2.8l5-5l2.8 2.8l-5 5z"></svg:path><svg:path fill="#FF8A65" d="M15 13h18v4H15zm0 7h18v2H15zm9 6c-2.8 0-5 2.2-5 5s2.2 5 5 5s5-2.2 5-5s-2.2-5-5-5m0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3"></svg:path><svg:path fill="#FF8A65" d="M8 3v42h32V3zm30 37c-1.7 0-3 1.3-3 3H13c0-1.7-1.3-3-3-3V8c1.7 0 3-1.3 3-3h22c0 1.7 1.3 3 3 3z"></svg:path>`,
})
export class FlatColorIconsDiploma2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
