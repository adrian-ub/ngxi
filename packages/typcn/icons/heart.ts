import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnHeartIcon],svg[typcn-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10.375a4.375 4.375 0 0 0-8.75 0c0 1.127.159 2.784 1.75 4.375L12 20s5.409-3.659 7-5.25s1.75-3.248 1.75-4.375a4.375 4.375 0 0 0-8.75 0"></svg:path>`,
})
export class TypcnHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
