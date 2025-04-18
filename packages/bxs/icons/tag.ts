import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsTagIcon],svg[bxs-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.842 6.218a2 2 0 0 0-.424-.628A2 2 0 0 0 20 5H8c-.297 0-.578.132-.769.359l-5 6c-.309.371-.309.91 0 1.281l5 6c.191.228.472.36.769.36h12a1.98 1.98 0 0 0 1.41-.582A2 2 0 0 0 22 17V7q0-.398-.158-.782"></svg:path>`,
})
export class BxsTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
